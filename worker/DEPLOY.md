# Deploy the Pronounce worker

This Cloudflare Worker holds the GitHub token server-side and lets the
website add or delete places without each visitor needing their own token.

## One-time setup (~5 minutes)

1. **Create a Cloudflare account** (free): https://dash.cloudflare.com/sign-up
2. **Install wrangler** (the Cloudflare CLI):
   ```
   npm install -g wrangler
   ```
3. **Log in:**
   ```
   wrangler login
   ```
   (opens your browser to authorize)

4. **Create a GitHub Personal Access Token:**
   - Go to https://github.com/settings/personal-access-tokens/new
   - Token name: `pronounce-worker`
   - Repository access: "Only select repositories" → `funnyfish123/pronounce`
   - Permissions → Repository permissions → Contents: **Read and write**
   - Click Generate token, copy the `github_pat_...` value

5. **From this `worker/` directory, store the token as a worker secret:**
   ```
   cd worker
   wrangler secret put GITHUB_TOKEN
   ```
   Paste the token when prompted.

6. **Deploy:**
   ```
   wrangler deploy
   ```
   You'll see a URL like `https://pronounce-api.<your-subdomain>.workers.dev`.

7. **Tell me the URL** (or edit `manage.html` and replace the
   `WORKER_URL` constant). The site will start using the worker
   automatically; saves and deletes go straight to the repo, and every
   visitor sees the same custom places.

## Updating the worker code later

```
cd worker
wrangler deploy
```

## Tearing it down

```
wrangler delete
```
