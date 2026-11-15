const STORAGE = {
  answers: "studymatch-answers-v13",
  step: "studymatch-step-v13",
  favorites: "studymatch-favorites-v13",
  theme: "studymatch-theme-v13",
};

const questions = [
  { key: "interest", title: "Welche Themen interessieren dich?", options: [["tech", "Technik & Informatik", "Digitale Welten, Systeme und Innovation"], ["people", "Menschen & Gesellschaft", "Psychologie, Bildung und Zusammenleben"], ["creative", "Kreativität & Medien", "Design, Sprache und Geschichten"], ["nature", "Natur & Umwelt", "Biologie, Nachhaltigkeit und Forschung"], ["unsure", "Ich bin mir unsicher", "Ich möchte erst verschiedene Bereiche entdecken"]] },
  { key: "subjects", title: "Welche Schulfächer machen dir am meisten Spaß?", options: [["math", "Mathematik & Physik", "Logik, Zahlen und Experimente"], ["languages", "Sprachen & Geschichte", "Kommunikation, Kultur und Zusammenhänge"], ["arts", "Kunst & Musik", "Ausdruck, Gestaltung und Kreativität"], ["biology", "Biologie & Chemie", "Leben, Stoffe und Forschung"], ["unsure", "Ich bin mir unsicher", "Meine Interessen sind noch offen"]] },
  { key: "strength", title: "Welche Stärke beschreibt dich am besten?", options: [["analytical", "Analytisch denken", "Ich erkenne Muster und löse Probleme"], ["empathy", "Gut zuhören", "Ich verstehe Menschen und kann sie unterstützen"], ["ideas", "Ideen entwickeln", "Ich denke gern neu und probiere Dinge aus"], ["organize", "Organisieren", "Ich bringe Struktur in komplexe Aufgaben"], ["unsure", "Ich bin mir unsicher", "Ich entdecke meine Stärken noch"]] },
  { key: "creativity", title: "Wie wichtig ist dir Kreativität?", options: [["high", "Sehr wichtig", "Ich möchte eigene Ideen sichtbar machen"], ["medium", "Eine gute Mischung", "Kreativität darf neben anderen Themen vorkommen"], ["low", "Eher nebensächlich", "Ich arbeite lieber mit klaren Strukturen"], ["unsure", "Ich bin mir unsicher", "Das möchte ich ausprobieren"]] },
  { key: "analysis", title: "Wie gerne arbeitest du analytisch?", options: [["high", "Sehr gerne", "Ich untersuche Zusammenhänge und Daten"], ["medium", "Kommt darauf an", "Eine Mischung aus Denken und Machen passt zu mir"], ["low", "Eher wenig", "Ich möchte mich stärker auf Menschen oder Gestaltung konzentrieren"], ["unsure", "Ich bin mir unsicher", "Ich kenne meine Präferenz noch nicht"]] },
  { key: "career", title: "Welche berufliche Richtung klingt spannend?", options: [["build", "Produkte entwickeln", "Etwas Neues bauen, gestalten oder programmieren"], ["help", "Menschen begleiten", "Beraten, lehren oder unterstützen"], ["research", "Forschen & verstehen", "Fragen stellen und Wissen vertiefen"], ["business", "Projekte bewegen", "Teams, Ideen und Ziele zusammenbringen"], ["unsure", "Ich bin mir unsicher", "Ich möchte verschiedene Wege kennenlernen"]] },
  { key: "environment", title: "In welcher Arbeitsumgebung fühlst du dich wohl?", options: [["team", "Im Team", "Austausch und gemeinsames Arbeiten"], ["independent", "Selbstständig", "Ruhe, Verantwortung und eigene Entscheidungen"], ["practical", "Praktisch", "Werkstatt, Labor oder direkte Anwendung"], ["flexible", "Flexibel", "Abwechslung und unterschiedliche Aufgaben"], ["unsure", "Ich bin mir unsicher", "Ich möchte verschiedene Umgebungen erleben"]] },
  { key: "math", title: "Wie viel Mathematik darf im Studium vorkommen?", options: [["high", "Gern viel", "Zahlen, Logik und Formeln machen mir Spaß"], ["medium", "Eine gute Mischung", "Etwas Mathematik ist in Ordnung"], ["low", "Eher wenig", "Ich möchte andere Themen in den Mittelpunkt stellen"], ["unsure", "Ich bin mir unsicher", "Das möchte ich erst kennenlernen"]] },
  { key: "programming", title: "Wie interessiert bist du an Programmierung?", options: [["high", "Sehr interessiert", "Ich möchte Code schreiben und Systeme verstehen"], ["medium", "Neugierig", "Ich probiere es gern aus, aber nicht ausschließlich"], ["low", "Eher wenig", "Programmierung soll keine Hauptrolle spielen"], ["unsure", "Ich bin mir unsicher", "Ich habe bisher wenig Erfahrung"]] },
  { key: "mode", title: "Welche Studienform passt zu deinen Plänen?", options: [["dual", "Duales Studium", "Theorie und Berufspraxis verbinden"], ["classic", "Klassisches Studium", "Intensiv in ein Fachgebiet eintauchen"], ["flexible", "Noch offen", "Erst verschiedene Wege kennenlernen"], ["unsure", "Ich bin mir unsicher", "Ich brauche mehr Informationen"]] },
  { key: "region", title: "Welche Studienregion bevorzugst du?", options: [["north", "Norden", "Zum Beispiel Hamburg, Bremen oder Schleswig-Holstein"], ["west", "Westen", "Zum Beispiel NRW oder Rheinland-Pfalz"], ["south", "Süden", "Zum Beispiel Bayern oder Baden-Württemberg"], ["east", "Osten", "Zum Beispiel Berlin, Sachsen oder Thüringen"], ["unsure", "Ich bin mir unsicher", "Der Ort ist noch offen"]] },
];

const programmes = [
  {
    id: "th-koeln-medieninformatik", name: "Medieninformatik", institution: "TH Köln", field: "Technik & Informatik", region: "Westen", mode: "classic",
    description: "Informatik, Design und Kommunikation für interaktive digitale Produkte verbinden.", contents: ["Algorithmen und Programmierung", "Screendesign", "Web-Technologien"], careers: ["UX / UI Design", "Webentwicklung", "Produktmanagement"], officialUrl: "https://www.th-koeln.de/medieninformatik_ba", sourceLabel: "TH Köln · offizielle Studiengangsseite",
    tags: ["tech", "creative", "ideas", "build", "team", "medium", "medium", "classic", "west"], challenges: "Logisches Denken, Mathematik und Programmierung sind wichtige Bestandteile.",
  },
  {
    id: "tu-dortmund-informatik", name: "Informatik", institution: "TU Dortmund", field: "Technik & Informatik", region: "Westen", mode: "classic",
    description: "Grundlagen der Informatik mit Systemen, Softwareentwicklung und Wahlmöglichkeiten.", contents: ["Algorithmen", "Betriebssysteme", "Softwareentwicklung"], careers: ["Softwareentwicklung", "IT-Sicherheit", "Forschung"], officialUrl: "https://cs.tu-dortmund.de/en/studium/studiengaenge/bachelor-informatik/?tabindex=1", sourceLabel: "TU Dortmund · offizielle Studiengangsseite",
    tags: ["tech", "math", "analytical", "build", "independent", "high", "high", "classic", "west"], challenges: "Abstraktes Denken, Mathematik und regelmäßiges Programmieren werden erwartet.",
  },
  {
    id: "uni-koeln-wirtschaftsinformatik", name: "Wirtschaftsinformatik", institution: "Universität zu Köln", field: "Wirtschaft & Gesellschaft", region: "Westen", mode: "classic",
    description: "Betriebswirtschaft, Informatik und Informationssysteme an einer Schnittstelle verbinden.", contents: ["Programmierung", "Datenbanken", "Betriebswirtschaft"], careers: ["IT-Projektmanagement", "Business Analyse", "Digital Consulting"], officialUrl: "https://wim.uni-koeln.de/de/studium/bsc-wirtschaftsinformatik", sourceLabel: "Universität zu Köln · offizielle Studiengangsseite",
    tags: ["tech", "math", "analytical", "organize", "business", "team", "medium", "high", "classic", "west"], challenges: "Die Verbindung aus wirtschaftlichen und technischen Inhalten erfordert Flexibilität.",
  },
  {
    id: "uni-freiburg-umweltnaturwissenschaften", name: "Umweltnaturwissenschaften", institution: "Universität Freiburg", field: "Natur & Umwelt", region: "Süden", mode: "classic",
    description: "Umwelt, Ökosysteme und Wechselwirkungen zwischen Natur, Menschen und Gesellschaft untersuchen.", contents: ["Ökosysteme", "Klimawandel", "Natur- und Sozialwissenschaften"], careers: ["Umweltanalyse", "Nachhaltigkeitsmanagement", "Forschung"], officialUrl: "https://uni-freiburg.de/studium/studienangebot/studiengang/757/", sourceLabel: "Universität Freiburg · offizielle Studiengangsseite",
    tags: ["nature", "biology", "analytical", "research", "practical", "medium", "medium", "classic", "south"], challenges: "Naturwissenschaftliche Grundlagen und forschendes Arbeiten gehören dazu.",
  },
  {
    id: "hs-esslingen-elektrotechnik", name: "Elektrotechnik", institution: "Hochschule Esslingen", field: "Technik & Informatik", region: "Süden", mode: "classic",
    description: "Elektrische und elektronische Systeme, Software und technische Zukunftsthemen.", contents: ["Schaltungen und Systeme", "Softwareentwicklung", "Technische Anwendungen"], careers: ["Automatisierung", "Elektromobilität", "Embedded Systems"], officialUrl: "https://www.hs-esslingen.de/mobilitaet-und-technik/studienangebote/bachelorstudiengaenge/elektrotechnik-beng", sourceLabel: "Hochschule Esslingen · offizielle Studiengangsseite",
    tags: ["tech", "math", "analytical", "build", "practical", "high", "high", "classic", "south"], challenges: "Mathematik, naturwissenschaftliches Verständnis und Problemlöseausdauer sind relevant.",
  },
  {
    id: "uni-hamburg-psychologie", name: "Psychologie", institution: "Universität Hamburg", field: "Wirtschaft & Gesellschaft", region: "Norden", mode: "classic",
    description: "Grundlagen der Psychologie wissenschaftlich erarbeiten und auf praktische Fragen beziehen.", contents: ["Grundlagenpsychologie", "Forschungsmethoden", "Statistik"], careers: ["Psychologische Forschung", "Beratung", "Personalentwicklung"], officialUrl: "https://www.psy.uni-hamburg.de/studium-neu/studiengaenge/bsc-psychologie-ab-wise-20-21.html", sourceLabel: "Universität Hamburg · offizielle Studiengangsseite",
    tags: ["people", "languages", "analytical", "research", "team", "medium", "low", "classic", "north"], challenges: "Statistik, wissenschaftliches Arbeiten und methodisches Denken spielen eine Rolle.",
  },
  {
    id: "th-koeln-soziale-arbeit", name: "Soziale Arbeit", institution: "TH Köln", field: "Wirtschaft & Gesellschaft", region: "Westen", mode: "classic",
    description: "Menschen in unterschiedlichen Lebenssituationen begleiten und professionelle Handlungskompetenz entwickeln.", contents: ["Sozialrecht", "Beratung", "Praxisstudium"], careers: ["Sozialberatung", "Jugendarbeit", "Bildungsarbeit"], officialUrl: "https://www.th-koeln.de/studium/soziale-arbeit-bachelor_259.php", sourceLabel: "TH Köln · offizielle Studiengangsseite",
    tags: ["people", "languages", "empathy", "help", "team", "low", "low", "classic", "west"], challenges: "Der Umgang mit emotional anspruchsvollen Situationen und viel Interaktion gehört dazu.",
  },
  {
    id: "uni-bremen-soziologie", name: "Soziologie", institution: "Universität Bremen", field: "Wirtschaft & Gesellschaft", region: "Norden", mode: "classic",
    description: "Gesellschaften, menschliches Handeln und soziale Strukturen wissenschaftlich erforschen.", contents: ["Sozialtheorien", "Empirische Forschung", "Statistik"], careers: ["Sozialforschung", "Beratung", "Personalmanagement"], officialUrl: "https://www.uni-bremen.de/studium/orientieren-bewerben/studienangebot/dbs/study/soziologie-bachelor", sourceLabel: "Universität Bremen · offizielle Studiengangsseite",
    tags: ["people", "languages", "analytical", "research", "independent", "medium", "low", "classic", "north"], challenges: "Theorie, Methoden und Statistik werden systematisch behandelt.",
  },
  {
    id: "uni-leipzig-kommunikationswissenschaft", name: "Kommunikations- und Medienwissenschaft", institution: "Universität Leipzig", field: "Kreativität & Medien", region: "Osten", mode: "classic",
    description: "Kommunikation, Medien und ihre Bedeutung für Gesellschaft und Öffentlichkeit untersuchen.", contents: ["Medienanalyse", "Kommunikationstheorien", "Empirische Methoden"], careers: ["Kommunikationsmanagement", "Medienanalyse", "Redaktion"], officialUrl: "https://www.cmgt.uni-leipzig.de/studium/ba_kmw.html?L=986", sourceLabel: "Universität Leipzig · offizielle Studiengangsseite",
    tags: ["creative", "languages", "ideas", "analysis", "research", "flexible", "medium", "low", "classic", "east"], challenges: "Interesse an Texten, wissenschaftlicher Analyse und gesellschaftlichen Fragen ist hilfreich.",
  },
  {
    id: "uni-potsdam-lehramt", name: "Lehramt (Bachelor)", institution: "Universität Potsdam", field: "Wirtschaft & Gesellschaft", region: "Osten", mode: "classic",
    description: "Bachelorstudium mit stufenbezogenen Lehramtsausrichtungen und Bildungswissenschaften.", contents: ["Fachwissenschaft", "Bildungswissenschaften", "Schulbezogene Praxis"], careers: ["Lehramt", "Bildungsarbeit", "Pädagogische Fachbereiche"], officialUrl: "https://www.uni-potsdam.de/de/studium/studienangebot/lehramt/bachelor", sourceLabel: "Universität Potsdam · offizielle Studiengangsseite",
    tags: ["people", "languages", "empathy", "help", "team", "low", "low", "classic", "east"], challenges: "Die konkrete Fächerkombination und die jeweilige Lehramtsausrichtung beeinflussen den Studienweg.",
  },
];

const weights = { interest: 2, subjects: 1.5, strength: 2, creativity: 1.5, analysis: 1.5, career: 2, environment: 1.5, math: 1, programming: 1, mode: 1, region: .75 };
const labels = { interest: "Interessen", subjects: "Schulfächer", strength: "Stärken", creativity: "Kreativität", analysis: "analytisches Denken", career: "Berufsziel", environment: "Arbeitsumgebung", math: "Mathematik", programming: "Programmierung", mode: "Studienform", region: "Region" };
let step = Number(localStorage.getItem(STORAGE.step) || 0);
let answers = readJson(STORAGE.answers, {});
let favorites = new Set(readJson(STORAGE.favorites, []));
let rankedResults = [];
const comparisonSelection = new Set();
const $ = (selector) => document.querySelector(selector);
function readJson(key, fallback) { try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch { return fallback; } }
function saveState() { localStorage.setItem(STORAGE.answers, JSON.stringify(answers)); localStorage.setItem(STORAGE.step, String(step)); }
function regionKey(value) { return ({ north: "Norden", west: "Westen", south: "Süden", east: "Osten" })[value] || value; }
function renderQuestion() {
  const question = questions[step];
  $("#current-step").textContent = step + 1; $("#total-steps").textContent = questions.length; $("#quiz-progress").style.width = `${((step + 1) / questions.length) * 100}%`; $("#back-button").hidden = step === 0; $("#next-button").innerHTML = step === questions.length - 1 ? "Auswertung ansehen <span aria-hidden=\"true\">→</span>" : "Weiter <span aria-hidden=\"true\">→</span>"; $("#form-error").hidden = true;
  $("#question-container").innerHTML = `<div class="question-kicker">Frage ${step + 1} von ${questions.length}</div><h3 class="question-title">${question.title}</h3><p class="question-hint">Wähle die Antwort, die sich aktuell am ehesten nach dir anfühlt.</p><div class="option-grid">${question.options.map(([value, label, description]) => `<label class="option ${answers[question.key] === value ? "selected" : ""}"><input type="radio" name="${question.key}" value="${value}" ${answers[question.key] === value ? "checked" : ""}><strong>${label}</strong><small>${description}</small></label>`).join("")}</div>`;
  $("#question-container").querySelectorAll(".option").forEach((option) => option.addEventListener("click", () => { $("#question-container").querySelectorAll(".option").forEach((item) => item.classList.remove("selected")); option.classList.add("selected"); answers[question.key] = option.querySelector("input").value; saveState(); $("#form-error").hidden = true; }));
}
function scoreProgramme(programme) {
  let earned = 0; let possible = 0; const matches = [];
  Object.entries(weights).forEach(([key, weight]) => {
    const answer = answers[key];
    if (!answer || answer === "unsure") return;
    possible += weight;
    const match = key === "region" ? programme.region === regionKey(answer) : key === "mode" ? programme.mode === answer : programme.tags.includes(answer);
    if (match) { earned += weight; matches.push(key); }
  });
  return { ...programme, score: possible ? Math.round((earned / possible) * 100) : 0, matches };
}
function sourceLink(programme) { return `<a class="source-link" href="${programme.officialUrl}" target="_blank" rel="noopener noreferrer">Offizielle Studiengangsseite <span aria-hidden="true">↗</span></a>`; }
function renderResults() {
  rankedResults = programmes.map(scoreProgramme).sort((a, b) => b.score - a.score);
  const top = rankedResults[0];
  $("#result-count").textContent = rankedResults.length;
  $("#results-summary").textContent = top ? `Dein stärkster Startpunkt ist ${top.name} bei ${top.institution} mit ${top.score}% Übereinstimmung innerhalb dieser Auswahl.` : "Deine Antworten ergeben ein erstes Profil.";
  $("#profile-summary").textContent = Object.entries(answers).filter(([, value]) => value && value !== "unsure").slice(0, 3).map(([key]) => labels[key]).join(" · ") || "Du bist noch offen – das ist ein guter Ausgangspunkt.";
  $("#strength-summary").textContent = [answers.strength, answers.creativity, answers.analysis].filter((value) => value && value !== "unsure").map((value) => value === "high" ? "hohe Ausprägung" : value).join(" · ") || "Noch keine klare Tendenz";
  $("#challenge-summary").textContent = top?.challenges || "Vergleiche mehrere Ideen und recherchiere die Inhalte.";
  $("#results-list").innerHTML = rankedResults.map((result) => `<article class="result-card"><div class="result-top"><div><div class="eyebrow">${result.field}</div><h3>${result.name}</h3><span class="institution-label">${result.institution}</span></div><div class="result-score">${result.score}%<small>Match</small></div></div><p>${result.description}</p><div class="result-reason"><strong>Warum das passen könnte:</strong> ${result.matches.length ? `Deine Antworten passen bei ${result.matches.slice(0, 3).map((key) => labels[key]).join(", ")}.` : "Dieses Profil ist ein weiterer Ausgangspunkt für deine Recherche."}</div><div class="career-tags">${result.careers.map((career) => `<span>${career}</span>`).join("")}</div><p class="challenge-note"><strong>Mögliche Herausforderung:</strong> ${result.challenges}</p><div class="result-actions"><label><input type="checkbox" class="compare-checkbox" value="${result.id}" ${comparisonSelection.has(result.id) ? "checked" : ""}> Vergleichen</label>${sourceLink(result)}</div></article>`).join("");
  $("#results-list").querySelectorAll(".compare-checkbox").forEach((box) => box.addEventListener("change", () => { if (box.checked && comparisonSelection.size < 3) comparisonSelection.add(box.value); else if (!box.checked) comparisonSelection.delete(box.value); else box.checked = false; updateCompareButton(); })); updateCompareButton();
}
function updateCompareButton() { const button = $("#compare-button"); button.disabled = comparisonSelection.size < 2; button.textContent = comparisonSelection.size < 2 ? "Mindestens 2 auswählen" : `Vergleich öffnen (${comparisonSelection.size}/3)`; }
function renderComparison() {
  const selected = rankedResults.filter((item) => comparisonSelection.has(item.id)); if (selected.length < 2) return;
  $("#comparison-head").innerHTML = `<tr><th>Merkmal</th>${selected.map((item) => `<th>${item.name}<small>${item.institution}</small></th>`).join("")}</tr>`;
  const rows = [["Match-Score", ...selected.map((item) => `<strong>${item.score}%</strong>`)], ["Fachbereich", ...selected.map((item) => item.field)], ["Studieninhalte", ...selected.map((item) => item.contents.join(", "))], ["Berufsfelder", ...selected.map((item) => item.careers.join(", "))], ["Studienform", ...selected.map((item) => item.mode === "dual" ? "Dual" : "Klassisch")], ["Offizielle Quelle", ...selected.map(sourceLink)]];
  $("#comparison-body").innerHTML = rows.map(([label, ...values]) => `<tr><td>${label}</td>${values.map((value) => `<td>${value}</td>`).join("")}</tr>`).join(""); $("#comparison-panel").hidden = false; $("#comparison-panel").scrollIntoView({ behavior: "smooth" });
}
function startFinder() { $(".finder-section").style.display = "block"; $("#results").hidden = true; renderQuestion(); $(".finder-section").scrollIntoView({ behavior: "smooth" }); }
function showResults() { renderResults(); $(".finder-section").style.display = "none"; $("#results").hidden = false; $("#results").scrollIntoView({ behavior: "smooth" }); }
function openDetail(id) { const item = programmes.find((programme) => programme.id === id); if (!item) return; $("#detail-content").innerHTML = `<div class="eyebrow">${item.field} · Verifiziertes Hochschulprofil</div><h2>${item.name}</h2><p><strong>${item.institution}</strong> · ${item.region} · ${item.mode === "dual" ? "Duales Studium" : "Klassisches Studium"}</p><p>${item.description}</p><h3>Typische Studieninhalte</h3><ul>${item.contents.map((content) => `<li>${content}</li>`).join("")}</ul><h3>Passende Berufsfelder</h3><p>${item.careers.join(" · ")}</p><p class="source-note">${item.sourceLabel}. Details und Aktualität bitte immer auf der offiziellen Seite prüfen.</p>${sourceLink(item)}`; $("#detail-dialog").showModal(); }
function renderExplorer() {
  const search = $("#explorer-search").value.toLowerCase(); const field = $("#field-filter").value; const state = $("#state-filter").value; const mode = $("#mode-filter").value; const sort = $("#sort-select").value;
  const filtered = programmes.filter((item) => (!search || `${item.name} ${item.institution} ${item.description}`.toLowerCase().includes(search)) && (!field || item.field === field) && (!state || item.region === state) && (!mode || item.mode === mode)).sort((a, b) => (sort === "field" ? a.field.localeCompare(b.field) : sort === "source" ? a.institution.localeCompare(b.institution) : a.name.localeCompare(b.name)));
  $("#explorer-empty").hidden = filtered.length > 0;
  $("#explorer-grid").innerHTML = filtered.map((item) => `<article class="explorer-card"><header><div><div class="eyebrow">${item.field}</div><h3>${item.name}</h3><span class="institution-label">${item.institution}</span></div><button class="favorite-button ${favorites.has(item.id) ? "active" : ""}" data-favorite="${item.id}" aria-label="${favorites.has(item.id) ? "Aus Favoriten entfernen" : "Als Favorit speichern"}">${favorites.has(item.id) ? "Favorit gespeichert" : "Favorit"}</button></header><p>${item.description}</p><div class="card-meta"><span>${item.contents[0]}</span><span>${item.region}</span><span>Offizielle Quelle</span></div><footer><button class="text-link detail-button" data-detail="${item.id}">Details ansehen ↗</button>${sourceLink(item)}</footer></article>`).join("");
  $("#favorite-count").textContent = favorites.size; $("#explorer-grid").querySelectorAll("[data-favorite]").forEach((button) => button.addEventListener("click", () => { if (favorites.has(button.dataset.favorite)) favorites.delete(button.dataset.favorite); else favorites.add(button.dataset.favorite); localStorage.setItem(STORAGE.favorites, JSON.stringify([...favorites])); renderExplorer(); })); $("#explorer-grid").querySelectorAll("[data-detail]").forEach((button) => button.addEventListener("click", () => openDetail(button.dataset.detail)));
}
function applyTheme(theme) { document.documentElement.dataset.theme = theme; localStorage.setItem(STORAGE.theme, theme); $("#theme-label").textContent = theme === "dark" ? "Light Mode" : "Dark Mode"; }

document.querySelectorAll("[data-start]").forEach((button) => button.addEventListener("click", startFinder));
$("#next-button").addEventListener("click", () => { if (!answers[questions[step].key]) { $("#form-error").hidden = false; return; } if (step === questions.length - 1) showResults(); else { step += 1; saveState(); renderQuestion(); } });
$("#back-button").addEventListener("click", () => { if (step > 0) { step -= 1; saveState(); renderQuestion(); } });
$("#restart-button").addEventListener("click", () => { answers = {}; step = 0; comparisonSelection.clear(); localStorage.removeItem(STORAGE.answers); localStorage.removeItem(STORAGE.step); $("#comparison-panel").hidden = true; startFinder(); });
$("#compare-button").addEventListener("click", renderComparison); $("#close-comparison").addEventListener("click", () => { $("#comparison-panel").hidden = true; }); $("#detail-close").addEventListener("click", () => $("#detail-dialog").close());
["explorer-search", "field-filter", "state-filter", "mode-filter", "sort-select"].forEach((id) => $(`#${id}`).addEventListener("input", renderExplorer));
$("#reset-filters").addEventListener("click", () => { $("#explorer-search").value = ""; $("#field-filter").value = ""; $("#state-filter").value = ""; $("#mode-filter").value = ""; $("#sort-select").value = "name"; renderExplorer(); });
$("#show-favorites").addEventListener("click", () => { $("#explorer-search").value = ""; $("#field-filter").value = ""; $("#state-filter").value = ""; $("#mode-filter").value = ""; renderExplorer(); document.querySelectorAll(".explorer-card").forEach((card) => { if (!favorites.has(card.querySelector("[data-favorite]").dataset.favorite)) card.hidden = true; }); $("#explorer").scrollIntoView({ behavior: "smooth" }); });
$("#mobile-menu-button").addEventListener("click", () => { const nav = $("#main-nav"); const open = nav.classList.toggle("open"); $("#mobile-menu-button").setAttribute("aria-expanded", String(open)); });
$("#main-nav").querySelectorAll("a").forEach((link) => link.addEventListener("click", () => { $("#main-nav").classList.remove("open"); $("#mobile-menu-button").setAttribute("aria-expanded", "false"); }));
const savedTheme = localStorage.getItem(STORAGE.theme); const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches; applyTheme(savedTheme || (systemDark ? "dark" : "light")); $("#theme-toggle").addEventListener("click", () => applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark")); renderExplorer();
