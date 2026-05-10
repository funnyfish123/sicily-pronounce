// Each place: { name, speak?, lang?, phonetic, ipa?, note? }
//   name     — display label
//   speak    — what TTS reads (defaults to name); use the local form if different
//   lang     — BCP47 tag for TTS voice selection (defaults to it-IT)
const PLACES = [
  // ── Sicily ──────────────────────────────────────────────────────────
  { name: "Catania", lang: "it-IT", phonetic: "kah-TAH-nyah", ipa: "/kaˈtaːnja/",
    note: "Stress on the second syllable. The 'gn'-like sound is just 'nya' — soft." },
  { name: "Taormina", lang: "it-IT", phonetic: "tah-or-MEE-nah", ipa: "/taorˈmiːna/",
    note: "Four syllables: ta-or-MEE-na. Don't blend the 'ao' — keep both vowels." },
  { name: "Siracusa", lang: "it-IT", phonetic: "see-rah-KOO-zah", ipa: "/siraˈkuːza/",
    note: "Italian 'c' before 'u' is hard like 'k'. Intervocalic 's' softens to 'z'." },
  { name: "Ortigia", lang: "it-IT", phonetic: "or-TEE-jah", ipa: "/orˈtiːdʒa/",
    note: "The 'gi' makes a soft 'j' sound, like the 'g' in 'gem'. Island in Siracusa." },
  { name: "Noto", lang: "it-IT", phonetic: "NOH-toh", ipa: "/ˈnɔːto/",
    note: "Two clean syllables. Open 'o' in the first, closed in the second." },
  { name: "Ragusa", lang: "it-IT", phonetic: "rah-GOO-zah", ipa: "/raˈɡuːza/",
    note: "Hard 'g' (before 'u'). The 's' becomes 'z' between vowels." },
  { name: "Agrigento", lang: "it-IT", phonetic: "ah-gree-JEN-toh", ipa: "/aɡriˈdʒɛnto/",
    note: "The 'gi' before 'e' is soft — 'jen' like 'gentle'. Stress on JEN." },
  { name: "Scala dei Turchi", lang: "it-IT", phonetic: "SKAH-lah day TOOR-kee", ipa: "/ˈskaːla dei ˈturki/",
    note: "'Stairs of the Turks'. 'ch' in Italian is hard 'k'. 'dei' rhymes with 'day'." },
  { name: "Castelmola", lang: "it-IT", phonetic: "kah-stel-MOH-lah",
    note: "Cliffside village above Taormina. Stress on the third syllable: kah-stel-MOH-lah." },
  { name: "Palermo", lang: "it-IT", phonetic: "pah-LAIR-moh", ipa: "/paˈlɛrmo/",
    note: "Open 'e' in the middle — pah-LAIR-moh, not pah-LURR-moh." },

  // ── Malta ───────────────────────────────────────────────────────────
  { name: "Luqa", speak: "Lua", lang: "mt-MT", phonetic: "LOO-ah",
    note: "Maltese 'q' is a silent glottal stop — there's a tiny catch in the throat where the q is, but no consonant sound. Two syllables: LOO-ah." },
  { name: "Valletta", lang: "mt-MT", phonetic: "vah-LET-tah", ipa: "/vəˈlɛttə/",
    note: "Italian-style stress on LET. Doubled 't' is geminated — held a beat longer." },
  { name: "Mdina", speak: "Imdina", lang: "mt-MT", phonetic: "im-DEE-nah",
    note: "The leading 'M-D' isn't silent — it's a faint 'im-' before the 'DEE-nah'. Like quietly humming the M before the rest." },
  { name: "Rabat", lang: "mt-MT", phonetic: "rah-BAT",
    note: "Two short syllables, mild stress on the second. The 'a' is open: rah-BAHT." },

  // ── Puglia / Basilicata ─────────────────────────────────────────────
  { name: "Polignano a Mare", lang: "it-IT", phonetic: "poh-leen-YAH-noh ah MAH-reh",
    note: "The 'gn' is the soft 'ny' sound, like in 'lasagna'. Cliffside town in Puglia." },
  { name: "Alberobello", lang: "it-IT", phonetic: "al-beh-roh-BEL-loh",
    note: "Five syllables, all open and even, stress on BEL. The trulli town." },
  { name: "Ostuni", lang: "it-IT", phonetic: "oh-STOO-nee",
    note: "The white city. Three syllables, stress on STOO." },
  { name: "Matera", lang: "it-IT", phonetic: "mah-TEH-rah", ipa: "/maˈtɛːra/",
    note: "Open 'e' in the middle, stress on TEH. The cave-dwelling sassi town." },

  // ── Campania ────────────────────────────────────────────────────────
  { name: "Salerno", lang: "it-IT", phonetic: "sah-LAIR-noh", ipa: "/saˈlɛrno/",
    note: "Open 'e' makes it 'LAIR' not 'LURR'." },
  { name: "Amalfi", lang: "it-IT", phonetic: "ah-MAHL-fee",
    note: "Three syllables: ah-MAHL-fee. Stress on the middle." },
  { name: "Ravello", lang: "it-IT", phonetic: "rah-VEL-loh",
    note: "Doubled 'l' is held a beat. The hilltop town above Amalfi." },
  { name: "Sorrento", lang: "it-IT", phonetic: "sor-REN-toh",
    note: "Roll the double 'r' a little. Open 'e' in REN." },
  { name: "Capri", lang: "it-IT", phonetic: "KAH-pree", ipa: "/ˈkaːpri/",
    note: "Stress is on the FIRST syllable: KAH-pree. Most English speakers say it wrong (cap-REE) — locals will notice." },
  { name: "Pompei", lang: "it-IT", phonetic: "pom-PAY-ee", ipa: "/pomˈpɛːi/",
    note: "Three syllables in Italian: pom-PAY-ee. The 'ei' is two vowels, not one." },
  { name: "Circumvesuviana", lang: "it-IT", phonetic: "cheer-koom-veh-zoo-vee-AH-nah",
    note: "Six-syllable mouthful for the train along the Vesuvius coast. Italian 'c' before 'i' = 'ch' sound. Break it: cheer-koom-veh-zoo-vee-AH-nah." },
  { name: "Naples", speak: "Napoli", lang: "it-IT", phonetic: "NAH-poh-lee", ipa: "/ˈnaːpoli/",
    note: "Locals say Napoli — three syllables, stress on the FIRST. Not nah-POH-lee." },

  // ── Central Italy ───────────────────────────────────────────────────
  { name: "Bologna", lang: "it-IT", phonetic: "boh-LOHN-yah", ipa: "/boˈloɲɲa/",
    note: "The 'gn' is 'ny' like in 'lasagna' — boh-LOHN-yah. Never 'bo-LOG-nuh'." },
  { name: "San Marino", lang: "it-IT", phonetic: "san mah-REE-noh",
    note: "Crisp and even. The tiny mountain republic." },
  { name: "Assisi", lang: "it-IT", phonetic: "ah-SEE-zee", ipa: "/asˈsiːzi/",
    note: "Spelled with double s but pronounced as a single soft 'z' between the vowels. St. Francis's town." },
  { name: "Perugia", lang: "it-IT", phonetic: "peh-ROO-jah", ipa: "/peˈruːdʒa/",
    note: "The 'gi' before 'a' is a soft 'j' — peh-ROO-jah. Capital of Umbria." },

  // ── Tuscany ─────────────────────────────────────────────────────────
  { name: "Abbadia Sicille", lang: "it-IT", phonetic: "ahb-bah-DEE-ah see-CHEEL-leh",
    note: "Relais near Siena. 'cille' is 'CHEEL-leh' — Italian 'ci' is the 'ch' in 'chip'. Doubled 'l' held a beat." },
  { name: "Siena", lang: "it-IT", phonetic: "SYEH-nah", ipa: "/ˈsjɛːna/",
    note: "Two syllables, not three: the 'ie' is a single glide. SYEH-nah, not see-EE-nah." },
  { name: "San Gimignano", lang: "it-IT", phonetic: "san jee-meen-YAH-noh",
    note: "'gi' is soft 'j', 'gn' is 'ny'. Five syllables of medieval towers." },
  { name: "Chianti", lang: "it-IT", phonetic: "kee-AHN-tee", ipa: "/ˈkjanti/",
    note: "Italian 'ch' is hard 'k'. Don't say 'chee-AHN-tee'." },

  // ── Liguria ─────────────────────────────────────────────────────────
  { name: "Monterosso", lang: "it-IT", phonetic: "mohn-teh-ROHS-soh",
    note: "The double 's' is held a beat. Westernmost of the Cinque Terre." },
  { name: "Cinque Terre", lang: "it-IT", phonetic: "CHEEN-kway TEHR-reh", ipa: "/ˌtʃiŋkwe ˈtɛrre/",
    note: "'Five lands'. 'Cinque' is CHEEN-kway, never 'sink'. Both 'r's get a slight roll." },

  // ── Lake Garda / Veneto ─────────────────────────────────────────────
  { name: "Desenzano del Garda", lang: "it-IT", phonetic: "deh-zen-TSAH-noh del GAR-dah",
    note: "Italian 'z' between vowels is 'ts': deh-zen-TSAH-noh. Lake Garda's south shore." },
  { name: "Sirmione", lang: "it-IT", phonetic: "seer-mee-OH-neh",
    note: "Four syllables. The peninsula on Lake Garda." },
  { name: "Verona", lang: "it-IT", phonetic: "veh-ROH-nah",
    note: "Three even syllables, stress on ROH." },
  { name: "Dolomites", speak: "Dolomiti", lang: "it-IT", phonetic: "doh-loh-MEE-tee",
    note: "Italian name is Dolomiti. Stress on MEE." },

  // ── Slovenia / Trieste ──────────────────────────────────────────────
  { name: "Lake Bled", speak: "Bled", lang: "sl-SI", phonetic: "BLED",
    note: "Just one syllable in Slovenian — 'BLED', short and clipped. The lake is Blejsko jezero." },
  { name: "Ljubljana", lang: "sl-SI", phonetic: "lyoo-BLYAH-nah", ipa: "/ljuˈbljaːna/",
    note: "The 'Lj' is a palatal 'ly', like the 'lli' in 'million'. So: lyoo-BLYAH-nah, not loo-bul-JAH-nah." },
  { name: "Trieste", lang: "it-IT", phonetic: "tree-ES-teh", ipa: "/triˈɛste/",
    note: "Three syllables, open 'e' in ES. Italian port on the Slovenian border." },

  // ── Swiss Alps ──────────────────────────────────────────────────────
  { name: "Lauterbrunnen", lang: "de-CH", phonetic: "LOW-ter-BROON-nen",
    note: "German 'au' is 'ow'. Stress on LOW. Valley of 72 waterfalls." },
  { name: "Grindelwald", lang: "de-CH", phonetic: "GRIN-del-vahlt",
    note: "German 'w' is 'v', final 'd' devoices to 't'. GRIN-del-VAHLT." },
  { name: "Wilderswil", lang: "de-CH", phonetic: "VIL-ders-vil",
    note: "Both 'w's are 'v's: VIL-ders-vil. Junction below the Jungfrau." },
  { name: "Sunnegga", lang: "de-CH", phonetic: "SOON-eg-gah",
    note: "Swiss German diminutive — 'little sun corner'. Funicular above Zermatt. Doubled 'g' held a beat." },
  { name: "Zürich", speak: "Zürich", lang: "de-CH", phonetic: "TSOO-rikh", ipa: "/ˈtsyːrɪç/",
    note: "Locals say TSOO-rikh — the 'Z' is 'ts' and the final 'ch' is the throaty back-of-throat sound (like Bach). The English 'ZUR-ick' is fine for tourists." }
];

const FALLBACK_LANG_PREFIX = { mt: "it" };

function pickVoice(lang) {
  const voices = (window.speechSynthesis && window.speechSynthesis.getVoices()) || [];
  if (!voices.length) return null;
  const want = (lang || "it-IT").toLowerCase();
  const prefix = want.split("-")[0];

  let cands = voices.filter(v => (v.lang || "").toLowerCase() === want);
  if (!cands.length) cands = voices.filter(v => (v.lang || "").toLowerCase().startsWith(prefix));
  if (!cands.length && FALLBACK_LANG_PREFIX[prefix]) {
    cands = voices.filter(v => (v.lang || "").toLowerCase().startsWith(FALLBACK_LANG_PREFIX[prefix]));
  }
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
  speakName(p.speak || p.name, p.lang || "it-IT");
}

if ("speechSynthesis" in window) {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => {};
}
