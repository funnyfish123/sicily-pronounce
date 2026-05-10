// Each place: { name, lang, phonetic, ipa?, note?, lat, lng, country }
//   country uses ISO-3166 alpha-2 codes (IT, MT, SI, CH, SM)
const PLACES = [
  // ── Sicily ──────────────────────────────────────────────────────────
  { name: "Catania", lang: "it-IT", phonetic: "kah-TAH-nyah", ipa: "/kaˈtaːnja/",
    note: "Stress on the second syllable. The 'gn'-like sound is just 'nya' — soft.",
    lat: 37.5079, lng: 15.0830, country: "IT" },
  { name: "Taormina", lang: "it-IT", phonetic: "tah-or-MEE-nah", ipa: "/taorˈmiːna/",
    note: "Four syllables: ta-or-MEE-na. Don't blend the 'ao' — keep both vowels.",
    lat: 37.8517, lng: 15.2853, country: "IT" },
  { name: "Siracusa", lang: "it-IT", phonetic: "see-rah-KOO-zah", ipa: "/siraˈkuːza/",
    note: "Italian 'c' before 'u' is hard like 'k'. Intervocalic 's' softens to 'z'.",
    lat: 37.0755, lng: 15.2866, country: "IT" },
  { name: "Ortigia", lang: "it-IT", phonetic: "or-TEE-jah", ipa: "/orˈtiːdʒa/",
    note: "The 'gi' makes a soft 'j' sound, like the 'g' in 'gem'. Island in Siracusa.",
    lat: 37.0595, lng: 15.2935, country: "IT" },
  { name: "Noto", lang: "it-IT", phonetic: "NOH-toh", ipa: "/ˈnɔːto/",
    note: "Two clean syllables. Open 'o' in the first, closed in the second.",
    lat: 36.8917, lng: 15.0700, country: "IT" },
  { name: "Ragusa", lang: "it-IT", phonetic: "rah-GOO-zah", ipa: "/raˈɡuːza/",
    note: "Hard 'g' (before 'u'). The 's' becomes 'z' between vowels.",
    lat: 36.9265, lng: 14.7236, country: "IT" },
  { name: "Agrigento", lang: "it-IT", phonetic: "ah-gree-JEN-toh", ipa: "/aɡriˈdʒɛnto/",
    note: "The 'gi' before 'e' is soft — 'jen' like 'gentle'. Stress on JEN.",
    lat: 37.3098, lng: 13.5859, country: "IT" },
  { name: "Scala dei Turchi", lang: "it-IT", phonetic: "SKAH-lah day TOOR-kee", ipa: "/ˈskaːla dei ˈturki/",
    note: "'Stairs of the Turks'. 'ch' in Italian is hard 'k'. 'dei' rhymes with 'day'.",
    lat: 37.2929, lng: 13.4793, country: "IT" },
  { name: "Castelmola", lang: "it-IT", phonetic: "kah-stel-MOH-lah",
    note: "Cliffside village above Taormina. Stress on the third syllable: kah-stel-MOH-lah.",
    lat: 37.8666, lng: 15.2724, country: "IT" },
  { name: "Palermo", lang: "it-IT", phonetic: "pah-LAIR-moh", ipa: "/paˈlɛrmo/",
    note: "Open 'e' in the middle — pah-LAIR-moh, not pah-LURR-moh.",
    lat: 38.1157, lng: 13.3613, country: "IT" },

  // ── Malta ───────────────────────────────────────────────────────────
  { name: "Luqa", lang: "en-US", phonetic: "LOO-kuh",
    note: "Common anglicized form: LOO-kuh. (Locals soften the 'q' to a glottal stop, but you don't need to.)",
    lat: 35.8556, lng: 14.4837, country: "MT" },
  { name: "Valletta", lang: "en-US", phonetic: "vuh-LET-uh",
    note: "Two beats on the LET. Capital of Malta.",
    lat: 35.8989, lng: 14.5146, country: "MT" },
  { name: "Mdina", lang: "en-US", phonetic: "em-DEE-nah",
    note: "Pronounced as if it starts with a quick 'em-': em-DEE-nah.",
    lat: 35.8857, lng: 14.4032, country: "MT" },
  { name: "Rabat", lang: "en-US", phonetic: "rah-BAHT",
    note: "Two short syllables, light stress on the second.",
    lat: 35.8819, lng: 14.3974, country: "MT" },

  // ── Puglia / Basilicata ─────────────────────────────────────────────
  { name: "Polignano a Mare", lang: "it-IT", phonetic: "poh-leen-YAH-noh ah MAH-reh",
    note: "The 'gn' is the soft 'ny' sound, like in 'lasagna'. Cliffside town in Puglia.",
    lat: 40.9956, lng: 17.2189, country: "IT" },
  { name: "Alberobello", lang: "it-IT", phonetic: "al-beh-roh-BEL-loh",
    note: "Five syllables, all open and even, stress on BEL. The trulli town.",
    lat: 40.7821, lng: 17.2374, country: "IT" },
  { name: "Ostuni", lang: "it-IT", phonetic: "oh-STOO-nee",
    note: "The white city. Three syllables, stress on STOO.",
    lat: 40.7301, lng: 17.5760, country: "IT" },
  { name: "Matera", lang: "it-IT", phonetic: "mah-TEH-rah", ipa: "/maˈtɛːra/",
    note: "Open 'e' in the middle, stress on TEH. The cave-dwelling sassi town.",
    lat: 40.6664, lng: 16.6044, country: "IT" },

  // ── Campania ────────────────────────────────────────────────────────
  { name: "Salerno", lang: "it-IT", phonetic: "sah-LAIR-noh", ipa: "/saˈlɛrno/",
    note: "Open 'e' makes it 'LAIR' not 'LURR'.",
    lat: 40.6824, lng: 14.7681, country: "IT" },
  { name: "Amalfi", lang: "it-IT", phonetic: "ah-MAHL-fee",
    note: "Three syllables: ah-MAHL-fee. Stress on the middle.",
    lat: 40.6340, lng: 14.6027, country: "IT" },
  { name: "Ravello", lang: "it-IT", phonetic: "rah-VEL-loh",
    note: "Doubled 'l' is held a beat. The hilltop town above Amalfi.",
    lat: 40.6498, lng: 14.6121, country: "IT" },
  { name: "Sorrento", lang: "it-IT", phonetic: "sor-REN-toh",
    note: "Roll the double 'r' a little. Open 'e' in REN.",
    lat: 40.6263, lng: 14.3759, country: "IT" },
  { name: "Capri", lang: "it-IT", phonetic: "KAH-pree", ipa: "/ˈkaːpri/",
    note: "Stress is on the FIRST syllable: KAH-pree. Most English speakers say it wrong (cap-REE) — locals will notice.",
    lat: 40.5532, lng: 14.2222, country: "IT" },
  { name: "Pompei", lang: "it-IT", phonetic: "pom-PAY-ee", ipa: "/pomˈpɛːi/",
    note: "Three syllables in Italian: pom-PAY-ee. The 'ei' is two vowels, not one.",
    lat: 40.7497, lng: 14.5008, country: "IT" },
  { name: "Circumvesuviana", lang: "it-IT", phonetic: "cheer-koom-veh-zoo-vee-AH-nah",
    note: "Six-syllable mouthful for the train along the Vesuvius coast. Italian 'c' before 'i' = 'ch' sound. Break it: cheer-koom-veh-zoo-vee-AH-nah.",
    lat: 40.8518, lng: 14.2681, country: "IT" },
  { name: "Naples", lang: "en-US", phonetic: "NAY-pulls",
    note: "Just the English name — NAY-pulls.",
    lat: 40.8518, lng: 14.2681, country: "IT" },

  // ── Central Italy ───────────────────────────────────────────────────
  { name: "Bologna", lang: "it-IT", phonetic: "boh-LOHN-yah", ipa: "/boˈloɲɲa/",
    note: "The 'gn' is 'ny' like in 'lasagna' — boh-LOHN-yah. Never 'bo-LOG-nuh'.",
    lat: 44.4949, lng: 11.3426, country: "IT" },
  { name: "San Marino", lang: "it-IT", phonetic: "san mah-REE-noh",
    note: "Crisp and even. The tiny mountain republic.",
    lat: 43.9424, lng: 12.4578, country: "SM" },
  { name: "Assisi", lang: "it-IT", phonetic: "ah-SEE-zee", ipa: "/asˈsiːzi/",
    note: "Spelled with double s but pronounced as a single soft 'z' between the vowels. St. Francis's town.",
    lat: 43.0707, lng: 12.6196, country: "IT" },
  { name: "Perugia", lang: "it-IT", phonetic: "peh-ROO-jah", ipa: "/peˈruːdʒa/",
    note: "The 'gi' before 'a' is a soft 'j' — peh-ROO-jah. Capital of Umbria.",
    lat: 43.1107, lng: 12.3908, country: "IT" },

  // ── Tuscany ─────────────────────────────────────────────────────────
  { name: "Abbadia Sicille", lang: "it-IT", phonetic: "ahb-bah-DEE-ah see-CHEEL-leh",
    note: "Relais near Siena. 'cille' is 'CHEEL-leh' — Italian 'ci' is the 'ch' in 'chip'. Doubled 'l' held a beat.",
    lat: 43.2715, lng: 11.2728, country: "IT" },
  { name: "Siena", lang: "it-IT", phonetic: "SYEH-nah", ipa: "/ˈsjɛːna/",
    note: "Two syllables, not three: the 'ie' is a single glide. SYEH-nah, not see-EE-nah.",
    lat: 43.3188, lng: 11.3308, country: "IT" },
  { name: "San Gimignano", lang: "it-IT", phonetic: "san jee-meen-YAH-noh",
    note: "'gi' is soft 'j', 'gn' is 'ny'. Five syllables of medieval towers.",
    lat: 43.4674, lng: 11.0427, country: "IT" },
  { name: "Chianti", lang: "it-IT", phonetic: "kee-AHN-tee", ipa: "/ˈkjanti/",
    note: "Italian 'ch' is hard 'k'. Don't say 'chee-AHN-tee'.",
    lat: 43.4750, lng: 11.3000, country: "IT" },

  // ── Liguria ─────────────────────────────────────────────────────────
  { name: "Monterosso", lang: "it-IT", phonetic: "mohn-teh-ROHS-soh",
    note: "The double 's' is held a beat. Westernmost of the Cinque Terre.",
    lat: 44.1462, lng: 9.6541, country: "IT" },
  { name: "Cinque Terre", lang: "it-IT", phonetic: "CHEEN-kway TEHR-reh", ipa: "/ˌtʃiŋkwe ˈtɛrre/",
    note: "'Five lands'. 'Cinque' is CHEEN-kway, never 'sink'. Both 'r's get a slight roll.",
    lat: 44.1230, lng: 9.7100, country: "IT" },

  // ── Lake Garda / Veneto ─────────────────────────────────────────────
  { name: "Desenzano del Garda", lang: "it-IT", phonetic: "deh-zen-TSAH-noh del GAR-dah",
    note: "Italian 'z' between vowels is 'ts': deh-zen-TSAH-noh. Lake Garda's south shore.",
    lat: 45.4707, lng: 10.5417, country: "IT" },
  { name: "Sirmione", lang: "it-IT", phonetic: "seer-mee-OH-neh",
    note: "Four syllables. The peninsula on Lake Garda.",
    lat: 45.4969, lng: 10.6063, country: "IT" },
  { name: "Verona", lang: "it-IT", phonetic: "veh-ROH-nah",
    note: "Three even syllables, stress on ROH.",
    lat: 45.4384, lng: 10.9916, country: "IT" },
  { name: "Dolomites", lang: "en-US", phonetic: "DOL-uh-mites",
    note: "English form: DOL-uh-mites, three syllables, stress on the first.",
    lat: 46.4102, lng: 11.8440, country: "IT" },

  // ── Slovenia / Trieste ──────────────────────────────────────────────
  { name: "Lake Bled", lang: "en-US", phonetic: "layk BLED",
    note: "'Bled' is one syllable, short and clipped — rhymes with 'red'.",
    lat: 46.3683, lng: 14.0934, country: "SI" },
  { name: "Ljubljana", lang: "en-US", phonetic: "loob-lee-AH-nah",
    note: "Common English approximation: loob-lee-AH-nah. The 'Lj' just sounds like a regular 'L'.",
    lat: 46.0569, lng: 14.5058, country: "SI" },
  { name: "Trieste", lang: "it-IT", phonetic: "tree-ES-teh", ipa: "/triˈɛste/",
    note: "Three syllables, open 'e' in ES. Italian port on the Slovenian border.",
    lat: 45.6495, lng: 13.7768, country: "IT" },

  // ── Swiss Alps ──────────────────────────────────────────────────────
  { name: "Lauterbrunnen", lang: "de-CH", phonetic: "LOW-ter-BROON-nen",
    note: "German 'au' is 'ow'. Stress on LOW. Valley of 72 waterfalls.",
    lat: 46.5934, lng: 7.9087, country: "CH" },
  { name: "Grindelwald", lang: "de-CH", phonetic: "GRIN-del-vahlt",
    note: "German 'w' is 'v', final 'd' devoices to 't'. GRIN-del-VAHLT.",
    lat: 46.6244, lng: 8.0414, country: "CH" },
  { name: "Wilderswil", lang: "de-CH", phonetic: "VIL-ders-vil",
    note: "Both 'w's are 'v's: VIL-ders-vil. Junction below the Jungfrau.",
    lat: 46.6597, lng: 7.8528, country: "CH" },
  { name: "Sunnegga", lang: "de-CH", phonetic: "SOON-eg-gah",
    note: "Swiss German diminutive — 'little sun corner'. Funicular above Zermatt. Doubled 'g' held a beat.",
    lat: 46.0290, lng: 7.7681, country: "CH" },
  { name: "Zurich", lang: "en-US", phonetic: "ZOOR-ick",
    note: "ZOOR-ick — two syllables, stress on the first. (The German 'Zürich' is more like TSOO-rikh, but you don't need that.)",
    lat: 47.3769, lng: 8.5417, country: "CH" }
];

const COUNTRY_FLAG = {
  IT: "🇮🇹", MT: "🇲🇹", SI: "🇸🇮", CH: "🇨🇭", SM: "🇸🇲"
};
const COUNTRY_NAME = {
  IT: "Italy", MT: "Malta", SI: "Slovenia", CH: "Switzerland", SM: "San Marino"
};

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
