const PLACES = [
  {
    name: "Catania",
    phonetic: "kah-TAH-nyah",
    ipa: "/kaˈtaːnja/",
    note: "Stress on the second syllable. The 'gn'-like sound here is just 'nya' — soft."
  },
  {
    name: "Taormina",
    phonetic: "tah-or-MEE-nah",
    ipa: "/taorˈmiːna/",
    note: "Four syllables: ta-or-MEE-na. Don't blend the 'ao' — keep both vowels."
  },
  {
    name: "Siracusa",
    phonetic: "see-rah-KOO-zah",
    ipa: "/siraˈkuːza/",
    note: "Italian 'c' before 'u' is hard like 'k'. The 's' between vowels softens to 'z'."
  },
  {
    name: "Ortigia",
    phonetic: "or-TEE-jah",
    ipa: "/orˈtiːdʒa/",
    note: "The 'gi' makes a soft 'j' sound, like the 'g' in 'gem'. Island in Siracusa."
  },
  {
    name: "Noto",
    phonetic: "NOH-toh",
    ipa: "/ˈnɔːto/",
    note: "Easy: two clean syllables. Open 'o' in the first, closed in the second."
  },
  {
    name: "Ragusa",
    phonetic: "rah-GOO-zah",
    ipa: "/raˈɡuːza/",
    note: "Hard 'g' (before 'u'). The 's' becomes 'z' between vowels."
  },
  {
    name: "Agrigento",
    phonetic: "ah-gree-JEN-toh",
    ipa: "/aɡriˈdʒɛnto/",
    note: "The 'gi' before 'e' is soft — 'jen' like 'gentle'. Stress on JEN."
  },
  {
    name: "Scala dei Turchi",
    phonetic: "SKAH-lah day TOOR-kee",
    ipa: "/ˈskaːla dei ˈturki/",
    note: "'Stairs of the Turks'. 'ch' in Italian is hard 'k'. 'dei' rhymes with 'day'."
  }
];

function pickItalianVoice() {
  const voices = window.speechSynthesis.getVoices()
    .filter(v => (v.lang || "").toLowerCase().startsWith("it"));
  if (!voices.length) return null;
  const score = v => {
    const n = v.name.toLowerCase();
    let s = 0;
    if (/enhanced|premium|neural|natural/.test(n)) s += 10;
    if (/luca/.test(n)) s += 6;
    if (/federica|alessandro|paolo|emma/.test(n)) s += 4;
    if (/alice/.test(n)) s -= 5;
    return s;
  };
  return voices.slice().sort((a, b) => score(b) - score(a))[0];
}

function speakName(name) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(name);
  u.lang = "it-IT";
  u.rate = 0.7;
  u.pitch = 0.92;
  const v = pickItalianVoice();
  if (v) u.voice = v;
  window.speechSynthesis.speak(u);
}

if ("speechSynthesis" in window) {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => {};
}
