// Cloudflare Worker for the Pronounce app.
// Reads/writes custom-places.json on the funnyfish123/pronounce repo via the GitHub API.
// The GitHub token is held server-side as a Cloudflare secret.

const REPO = "funnyfish123/pronounce";
const PATH = "custom-places.json";
const BRANCH = "main";
const GH_API = `https://api.github.com/repos/${REPO}/contents/${PATH}?ref=${BRANCH}`;
const GH_PUT = `https://api.github.com/repos/${REPO}/contents/${PATH}`;

const ALLOWED_ORIGINS = [
  "https://funnyfish123.github.io",
  "http://localhost:5173",
  "http://localhost:8080",
];

function corsHeaders(req) {
  const origin = req.headers.get("Origin") || "";
  const allow = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
  };
}

function json(data, init = {}, req) {
  return new Response(JSON.stringify(data), {
    status: init.status || 200,
    headers: { "Content-Type": "application/json", ...corsHeaders(req) },
  });
}

function utf8ToBase64(str) {
  return btoa(unescape(encodeURIComponent(str)));
}
function base64ToUtf8(str) {
  return decodeURIComponent(escape(atob(str.replace(/\s/g, ""))));
}

async function ghFetch(env) {
  const r = await fetch(GH_API, {
    headers: {
      "Authorization": `Bearer ${env.GITHUB_TOKEN}`,
      "User-Agent": "pronounce-worker",
      "Accept": "application/vnd.github+json",
    },
  });
  if (!r.ok) {
    const text = await r.text();
    throw new Error(`GitHub fetch failed: ${r.status} ${text}`);
  }
  const file = await r.json();
  const content = base64ToUtf8(file.content);
  const places = JSON.parse(content);
  return { places: Array.isArray(places) ? places : [], sha: file.sha };
}

async function ghPut(env, places, message, sha) {
  const body = JSON.stringify(places, null, 2) + "\n";
  const r = await fetch(GH_PUT, {
    method: "PUT",
    headers: {
      "Authorization": `Bearer ${env.GITHUB_TOKEN}`,
      "User-Agent": "pronounce-worker",
      "Content-Type": "application/json",
      "Accept": "application/vnd.github+json",
    },
    body: JSON.stringify({
      message,
      branch: BRANCH,
      content: utf8ToBase64(body),
      sha,
    }),
  });
  if (!r.ok) {
    const text = await r.text();
    throw new Error(`GitHub commit failed: ${r.status} ${text}`);
  }
  return await r.json();
}

function validatePlace(p) {
  if (!p || typeof p !== "object") return "missing body";
  if (!p.name || typeof p.name !== "string") return "missing name";
  if (!p.phonetic || typeof p.phonetic !== "string") return "missing phonetic";
  if (typeof p.lat !== "number" || typeof p.lng !== "number") return "lat/lng must be numbers";
  if (p.name.length > 100) return "name too long";
  if (p.phonetic.length > 200) return "phonetic too long";
  if ((p.tips || []).length > 10) return "too many tips";
  return null;
}

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders(request) });
    }
    if (!env.GITHUB_TOKEN) {
      return json({ error: "GITHUB_TOKEN secret not set on the worker" }, { status: 500 }, request);
    }

    const url = new URL(request.url);

    try {
      if (url.pathname === "/places" && request.method === "GET") {
        const { places } = await ghFetch(env);
        return json({ places }, {}, request);
      }

      if (url.pathname === "/places" && request.method === "POST") {
        const body = await request.json().catch(() => null);
        const err = validatePlace(body);
        if (err) return json({ error: err }, { status: 400 }, request);
        const { places, sha } = await ghFetch(env);
        if (places.some(p => p.name === body.name)) {
          return json({ error: "place already exists" }, { status: 409 }, request);
        }
        places.push(body);
        await ghPut(env, places, `add ${body.name}`, sha);
        return json({ places }, {}, request);
      }

      if (url.pathname === "/places" && request.method === "DELETE") {
        const body = await request.json().catch(() => null);
        if (!body || !body.name) return json({ error: "missing name" }, { status: 400 }, request);
        const { places, sha } = await ghFetch(env);
        const next = places.filter(p => p.name !== body.name);
        if (next.length === places.length) {
          return json({ error: "place not found" }, { status: 404 }, request);
        }
        await ghPut(env, next, `remove ${body.name}`, sha);
        return json({ places: next }, {}, request);
      }

      return new Response("Not found", { status: 404, headers: corsHeaders(request) });
    } catch (e) {
      return json({ error: String(e.message || e) }, { status: 500 }, request);
    }
  },
};
