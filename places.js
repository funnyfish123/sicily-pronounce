// Each place: { name, lang, phonetic, ipa?, tips: [], lat, lng, country }
//   tips    — short bullet-point hints for English speakers
//   country — ISO-3166 alpha-2 (IT, MT, SI, CH, SM)
const PLACES = [
  // ── Sicily ──────────────────────────────────────────────────────────
  { name: "Catania", lang: "it-IT", phonetic: "kah-TAH-nyah", ipa: "/kaˈtaːnja/",
    tips: ["Stress on the middle: TAH.", "'gn' sound is soft 'ny'."],
    lat: 37.5079, lng: 15.0830, country: "IT" },
  { name: "Taormina", lang: "it-IT", phonetic: "tah-or-MEE-nah", ipa: "/taorˈmiːna/",
    tips: ["4 syllables: tah-or-MEE-nah.", "Say both 'a' and 'o' — don't blend them."],
    lat: 37.8517, lng: 15.2853, country: "IT" },
  { name: "Siracusa", lang: "it-IT", phonetic: "see-rah-KOO-zah", ipa: "/siraˈkuːza/",
    tips: ["Stress on KOO.", "'c' before 'u' is a hard 'k'.", "'s' between vowels sounds like 'z'."],
    lat: 37.0755, lng: 15.2866, country: "IT" },
  { name: "Ortigia", lang: "it-IT", phonetic: "or-TEE-jah", ipa: "/orˈtiːdʒa/",
    tips: ["Stress on TEE.", "'gi' sounds like the 'j' in 'gem'.", "Small island in Siracusa."],
    lat: 37.0595, lng: 15.2935, country: "IT" },
  { name: "Noto", lang: "it-IT", phonetic: "NOH-toh", ipa: "/ˈnɔːto/",
    tips: ["2 syllables: NOH-toh.", "Stress on the first."],
    lat: 36.8917, lng: 15.0700, country: "IT" },
  { name: "Ragusa", lang: "it-IT", phonetic: "rah-GOO-zah", ipa: "/raˈɡuːza/",
    tips: ["Stress on GOO.", "Hard 'g' before 'u'.", "'s' between vowels is 'z'."],
    lat: 36.9265, lng: 14.7236, country: "IT" },
  { name: "Agrigento", lang: "it-IT", phonetic: "ah-gree-JEN-toh", ipa: "/aɡriˈdʒɛnto/",
    tips: ["Stress on JEN.", "'gi' before 'e' is soft 'j', like 'gentle'."],
    lat: 37.3098, lng: 13.5859, country: "IT" },
  { name: "Scala dei Turchi", lang: "it-IT", phonetic: "SKAH-lah day TOOR-kee", ipa: "/ˈskaːla dei ˈturki/",
    tips: ["Means 'Stairs of the Turks'.", "'ch' in Italian is always hard 'k'.", "'dei' rhymes with 'day'."],
    lat: 37.2929, lng: 13.4793, country: "IT" },
  { name: "Castelmola", lang: "it-IT", phonetic: "kah-stel-MOH-lah",
    tips: ["Stress on MOH.", "Cliffside village above Taormina."],
    lat: 37.8666, lng: 15.2724, country: "IT" },
  { name: "Palermo", lang: "it-IT", phonetic: "pah-LAIR-moh", ipa: "/paˈlɛrmo/",
    tips: ["Stress on LAIR.", "Open 'e' — say 'LAIR', not 'LURR'."],
    lat: 38.1157, lng: 13.3613, country: "IT" },

  // ── Malta ───────────────────────────────────────────────────────────
  { name: "Luqa", lang: "en-US", phonetic: "LOO-kuh",
    tips: ["Stress on LOO.", "The 'q' is silent — just say 'LOO-kuh'."],
    lat: 35.8556, lng: 14.4837, country: "MT" },
  { name: "Valletta", lang: "en-US", phonetic: "vuh-LET-uh",
    tips: ["Stress on LET.", "Capital of Malta."],
    lat: 35.8989, lng: 14.5146, country: "MT" },
  { name: "Mdina", lang: "en-US", phonetic: "em-DEE-nah",
    tips: ["Starts with a quick 'em-' sound.", "Stress on DEE."],
    lat: 35.8857, lng: 14.4032, country: "MT" },
  { name: "Rabat", lang: "en-US", phonetic: "rah-BAHT",
    tips: ["2 short syllables.", "Light stress on BAHT."],
    lat: 35.8819, lng: 14.3974, country: "MT" },

  // ── Puglia / Basilicata ─────────────────────────────────────────────
  { name: "Polignano a Mare", lang: "it-IT", phonetic: "poh-leen-YAH-no ah MAH-ray",
    tips: ["'gn' sounds like 'ny' (like lasagna).", "'a Mare' means 'on the sea'.", "Cliffside town in Puglia."],
    lat: 40.9956, lng: 17.2189, country: "IT" },
  { name: "Alberobello", lang: "it-IT", phonetic: "ahl-bay-roh-BEL-loh",
    tips: ["5 syllables.", "Stress on BEL.", "Famous for trulli — cone-roof houses."],
    lat: 40.7821, lng: 17.2374, country: "IT" },
  { name: "Ostuni", lang: "it-IT", phonetic: "oh-STOO-nee",
    tips: ["3 syllables.", "Stress on STOO.", "Known as the 'white city'."],
    lat: 40.7301, lng: 17.5760, country: "IT" },
  { name: "Matera", lang: "it-IT", phonetic: "mah-TAY-rah", ipa: "/maˈtɛːra/",
    tips: ["Stress on TAY (middle).", "Famous for cave-houses called sassi."],
    lat: 40.6664, lng: 16.6044, country: "IT" },

  // ── Campania ────────────────────────────────────────────────────────
  { name: "Salerno", lang: "it-IT", phonetic: "sah-LAIR-noh", ipa: "/saˈlɛrno/",
    tips: ["Stress on LAIR.", "Open 'e' — 'LAIR', not 'LURR'."],
    lat: 40.6824, lng: 14.7681, country: "IT" },
  { name: "Amalfi", lang: "it-IT", phonetic: "ah-MAHL-fee",
    tips: ["3 syllables.", "Stress on MAHL."],
    lat: 40.6340, lng: 14.6027, country: "IT" },
  { name: "Ravello", lang: "it-IT", phonetic: "rah-VEL-loh",
    tips: ["Stress on VEL.", "Hold the doubled 'l' a beat longer.", "Hilltop town above Amalfi."],
    lat: 40.6498, lng: 14.6121, country: "IT" },
  { name: "Sorrento", lang: "it-IT", phonetic: "sor-REN-toh",
    tips: ["Stress on REN.", "Open 'e' — 'REN', not 'RAIN'.", "Roll the double 'r' a little."],
    lat: 40.6263, lng: 14.3759, country: "IT" },
  { name: "Capri", lang: "it-IT", phonetic: "KAH-pree", ipa: "/ˈkaːpri/",
    tips: ["Stress is on the FIRST syllable: KAH.", "Don't say 'cap-REE' — locals will notice!"],
    lat: 40.5532, lng: 14.2222, country: "IT" },
  { name: "Pompei", lang: "it-IT", phonetic: "pom-PAY-ee", ipa: "/pomˈpɛːi/",
    tips: ["3 syllables in Italian: pom-PAY-ee.", "'ei' is two vowels, not one."],
    lat: 40.7497, lng: 14.5008, country: "IT" },
  { name: "Circumvesuviana", lang: "it-IT", phonetic: "cheer-koom-vay-zoo-vee-AH-nah",
    tips: ["6 syllables — break it slowly.", "'c' before 'i' sounds like 'ch'.", "The train that runs along the Vesuvius coast."],
    lat: 40.8518, lng: 14.2681, country: "IT" },
  { name: "Naples", lang: "en-US", phonetic: "NAY-pulls",
    tips: ["English name — just say NAY-pulls.", "Italians call it Napoli (NAH-poh-lee)."],
    lat: 40.8518, lng: 14.2681, country: "IT" },

  // ── Central Italy ───────────────────────────────────────────────────
  { name: "Bologna", lang: "it-IT", phonetic: "boh-LOHN-yah", ipa: "/boˈloɲɲa/",
    tips: ["'gn' sounds like 'ny' (like lasagna).", "Never say 'bo-LOG-nuh'!"],
    lat: 44.4949, lng: 11.3426, country: "IT" },
  { name: "San Marino", lang: "it-IT", phonetic: "san mah-REE-noh",
    tips: ["Stress on REE.", "Tiny mountain country inside Italy."],
    lat: 43.9424, lng: 12.4578, country: "SM" },
  { name: "Assisi", lang: "it-IT", phonetic: "ah-SEE-zee", ipa: "/asˈsiːzi/",
    tips: ["Double 's' but say it as a soft 'z'.", "Stress on SEE.", "St. Francis's town."],
    lat: 43.0707, lng: 12.6196, country: "IT" },
  { name: "Perugia", lang: "it-IT", phonetic: "pay-ROO-jah", ipa: "/peˈruːdʒa/",
    tips: ["Stress on ROO (middle).", "'gi' before 'a' is a soft 'j'.", "Capital of Umbria."],
    lat: 43.1107, lng: 12.3908, country: "IT" },

  // ── Tuscany ─────────────────────────────────────────────────────────
  { name: "Abbadia Sicille", lang: "it-IT", phonetic: "ahb-bah-DEE-ah see-CHEEL-lay",
    tips: ["'cille' = CHEEL-lay (Italian 'ci' = 'ch').", "Hold the doubled 'l' a beat.", "Relais (small hotel) near Siena."],
    lat: 43.2715, lng: 11.2728, country: "IT" },
  { name: "Siena", lang: "it-IT", phonetic: "see-EN-ah", ipa: "/ˈsjɛːna/",
    tips: ["3 quick syllables: see-EN-ah.", "Stress on EN."],
    lat: 43.3188, lng: 11.3308, country: "IT" },
  { name: "San Gimignano", lang: "it-IT", phonetic: "san jee-meen-YAH-noh",
    tips: ["'gi' is soft 'j'.", "'gn' is 'ny'.", "5 syllables.", "Famous for medieval towers."],
    lat: 43.4674, lng: 11.0427, country: "IT" },
  { name: "Chianti", lang: "it-IT", phonetic: "kee-AHN-tee", ipa: "/ˈkjanti/",
    tips: ["Italian 'ch' is always a hard 'k'.", "Don't say 'chee-AHN-tee'!"],
    lat: 43.4750, lng: 11.3000, country: "IT" },

  // ── Liguria ─────────────────────────────────────────────────────────
  { name: "Monterosso", lang: "it-IT", phonetic: "mohn-tay-ROHS-soh",
    tips: ["Stress on ROHS.", "Double 's' — hold it a beat.", "Westernmost of the Cinque Terre."],
    lat: 44.1462, lng: 9.6541, country: "IT" },
  { name: "Cinque Terre", lang: "it-IT", phonetic: "CHEEN-kway TAIR-ray", ipa: "/ˌtʃiŋkwe ˈtɛrre/",
    tips: ["Means 'five lands' (the five villages).", "'Cinque' = CHEEN-kway, NEVER 'sink'.", "Roll the 'r' a little in TAIR-ray."],
    lat: 44.1230, lng: 9.7100, country: "IT" },

  // ── Lake Garda / Veneto ─────────────────────────────────────────────
  { name: "Desenzano del Garda", lang: "it-IT", phonetic: "day-zen-TSAH-noh del GAR-dah",
    tips: ["'z' between vowels = 'ts' sound.", "Stress on TSAH.", "Town on Lake Garda's south shore."],
    lat: 45.4707, lng: 10.5417, country: "IT" },
  { name: "Sirmione", lang: "it-IT", phonetic: "seer-mee-OH-nay",
    tips: ["4 syllables.", "Stress on OH.", "Peninsula sticking out into Lake Garda."],
    lat: 45.4969, lng: 10.6063, country: "IT" },
  { name: "Verona", lang: "it-IT", phonetic: "vay-ROH-nah",
    tips: ["Stress on ROH (middle).", "3 even syllables."],
    lat: 45.4384, lng: 10.9916, country: "IT" },
  { name: "Dolomites", lang: "en-US", phonetic: "DOL-uh-mites",
    tips: ["3 syllables.", "Stress on first: DOL.", "Mountain range in northern Italy."],
    lat: 46.4102, lng: 11.8440, country: "IT" },

  // ── Slovenia / Trieste ──────────────────────────────────────────────
  { name: "Lake Bled", lang: "en-US", phonetic: "layk BLED",
    tips: ["'Bled' is just 1 syllable.", "Rhymes with 'red'.", "Famous lake in Slovenia."],
    lat: 46.3683, lng: 14.0934, country: "SI" },
  { name: "Ljubljana", lang: "en-US", phonetic: "loob-lee-AH-nah",
    tips: ["The 'Lj' just sounds like a regular 'L'.", "Stress on AH.", "Capital of Slovenia."],
    lat: 46.0569, lng: 14.5058, country: "SI" },
  { name: "Trieste", lang: "it-IT", phonetic: "tree-ES-tay", ipa: "/triˈɛste/",
    tips: ["3 syllables.", "Stress on ES.", "Italian port city near the Slovenian border."],
    lat: 45.6495, lng: 13.7768, country: "IT" },

  // ── Swiss Alps ──────────────────────────────────────────────────────
  { name: "Lauterbrunnen", lang: "de-CH", phonetic: "LOW-ter-BROON-nen",
    tips: ["German 'au' = 'ow' (like 'cow').", "Stress on LOW.", "Valley of 72 waterfalls."],
    lat: 46.5934, lng: 7.9087, country: "CH" },
  { name: "Grindelwald", lang: "de-CH", phonetic: "GRIN-del-vahlt",
    tips: ["German 'w' = 'v'.", "Stress on first: GRIN.", "Final 'd' sounds like 't'."],
    lat: 46.6244, lng: 8.0414, country: "CH" },
  { name: "Wilderswil", lang: "de-CH", phonetic: "VIL-ders-vil",
    tips: ["Both 'w's are 'v'.", "Junction below Jungfrau."],
    lat: 46.6597, lng: 7.8528, country: "CH" },
  { name: "Sunnegga", lang: "de-CH", phonetic: "SOON-eg-gah",
    tips: ["Swiss German for 'little sun corner'.", "Hold the doubled 'g' a beat.", "Funicular above Zermatt."],
    lat: 46.0290, lng: 7.7681, country: "CH" },
  { name: "Zurich", lang: "en-US", phonetic: "ZOOR-ick",
    tips: ["2 syllables.", "Stress on ZOOR.", "Locals say TSOO-rikh, but ZOOR-ick is fine."],
    lat: 47.3769, lng: 8.5417, country: "CH" }
];

const COUNTRY_NAME = {
  IT: "Italy", MT: "Malta", SI: "Slovenia", CH: "Switzerland", SM: "San Marino",
  FR: "France", ES: "Spain", DE: "Germany", AT: "Austria", GR: "Greece",
  PT: "Portugal", NL: "Netherlands", BE: "Belgium", HR: "Croatia",
  GB: "United Kingdom", IE: "Ireland", US: "United States", CA: "Canada",
  JP: "Japan", CN: "China", KR: "South Korea", TH: "Thailand", VN: "Vietnam",
  MX: "Mexico", AR: "Argentina", BR: "Brazil", AU: "Australia", NZ: "New Zealand",
  TR: "Turkey", EG: "Egypt", MA: "Morocco", IS: "Iceland", NO: "Norway",
  SE: "Sweden", DK: "Denmark", FI: "Finland", PL: "Poland", CZ: "Czechia",
  HU: "Hungary", RO: "Romania", IL: "Israel", AE: "UAE", IN: "India"
};
function flagFor(cc) {
  if (!cc || cc.length !== 2) return "🏳️";
  return cc.toUpperCase().replace(/./g, c => String.fromCodePoint(0x1F1A5 + c.charCodeAt(0)));
}
const COUNTRY_FLAG = new Proxy({}, { get: (_, cc) => flagFor(cc) });

// — custom places persisted in localStorage —
const CUSTOM_KEY = "pronounce-custom-places-v1";
const HIDDEN_KEY = "pronounce-hidden-defaults-v1";

function loadCustom() {
  try {
    const raw = localStorage.getItem(CUSTOM_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}
function saveCustom(list) {
  localStorage.setItem(CUSTOM_KEY, JSON.stringify(list));
}
function loadHidden() {
  try {
    const raw = localStorage.getItem(HIDDEN_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}
function saveHidden(list) {
  localStorage.setItem(HIDDEN_KEY, JSON.stringify(list));
}

const DEFAULT_PLACES = PLACES.slice();
{
  const hidden = new Set(loadHidden());
  const visible = DEFAULT_PLACES.filter(p => !hidden.has(p.name));
  const custom = loadCustom().map(p => ({ ...p, custom: true }));
  PLACES.length = 0;
  PLACES.push(...visible, ...custom);
}

function pickVoice(lang) {
  const voices = (window.speechSynthesis && window.speechSynthesis.getVoices()) || [];
  if (!voices.length) return null;
  const want = (lang || "it-IT").toLowerCase();
  const prefix = want.split("-")[0];

  let cands = voices.filter(v => (v.lang || "").toLowerCase() === want);
  if (!cands.length) cands = voices.filter(v => (v.lang || "").toLowerCase().startsWith(prefix));
  if (!cands.length) return null;

  const score = v => {
    const n = v.name.toLowerCase();
    let s = 0;
    if (/enhanced|premium|neural|natural/.test(n)) s += 10;
    if (prefix === "it" && /luca/.test(n)) s += 6;
    if (prefix === "it" && /(federica|alessandro|paolo|emma)/.test(n)) s += 4;
    if (prefix === "it" && /alice/.test(n)) s -= 5;
    return s;
  };
  return cands.slice().sort((a, b) => score(b) - score(a))[0];
}

function speakName(text, lang) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  const v = pickVoice(lang);
  u.lang = v ? v.lang : (lang || "it-IT");
  u.rate = 0.7;
  u.pitch = 0.92;
  if (v) u.voice = v;
  window.speechSynthesis.speak(u);
}

function speakPlace(p) {
  speakName(p.name, p.lang || "it-IT");
}

if ("speechSynthesis" in window) {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => {};
}
