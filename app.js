const questions = [
  {
    key: "subjects",
    title: "Welche Themen ziehen dich an?",
    hint: "Wähle die Antwort, die am besten zu dir passt.",
    options: [
      ["tech", "Technik & Informatik", "Digitale Welten, Systeme und Innovation"],
      ["people", "Menschen & Gesellschaft", "Psychologie, Bildung und Zusammenleben"],
      ["creative", "Kreativität & Medien", "Design, Sprache und Geschichten"],
      ["nature", "Natur & Umwelt", "Biologie, Nachhaltigkeit und Forschung"],
    ],
  },
  {
    key: "strength",
    title: "Was ist eine deiner Stärken?",
    hint: "Es gibt keine falsche Antwort – was fühlt sich nach dir an?",
    options: [
      ["analytical", "Analytisch denken", "Ich erkenne Muster und löse gern Probleme"],
      ["empathy", "Gut zuhören", "Ich verstehe Menschen und kann sie unterstützen"],
      ["ideas", "Ideen entwickeln", "Ich denke gern neu und probiere Dinge aus"],
      ["organize", "Organisieren", "Ich bringe Struktur in komplexe Aufgaben"],
    ],
  },
  {
    key: "work",
    title: "Wie möchtest du später arbeiten?",
    hint: "Stell dir deinen idealen Arbeitsalltag vor.",
    options: [
      ["build", "Dinge gestalten", "Etwas entwickeln, bauen oder sichtbar machen"],
      ["help", "Menschen begleiten", "Beraten, lehren oder gemeinsam wachsen"],
      ["research", "Zusammenhänge erforschen", "Fragen stellen und Wissen vertiefen"],
      ["business", "Projekte bewegen", "Teams, Ideen und Ziele zusammenbringen"],
    ],
  },
  {
    key: "learning",
    title: "Wie lernst du am liebsten?",
    hint: "Wähle die Lernumgebung, in der du aufblühst.",
    options: [
      ["theory", "Theoretisch", "Ich tauche gern tief in Konzepte ein"],
      ["practice", "Praktisch", "Ich lerne am besten durch Ausprobieren"],
      ["creative", "Kreativ", "Ich möchte eigene Ideen umsetzen"],
      ["team", "Im Team", "Austausch bringt mich weiter"],
    ],
  },
  {
    key: "math",
    title: "Wie viel Mathe oder Programmierung darf es sein?",
    hint: "Deine persönliche Komfortzone ist ein guter Ausgangspunkt.",
    options: [
      ["high", "Gern viel davon", "Zahlen, Logik und Code machen mir Spaß"],
      ["medium", "Eine gute Mischung", "Etwas davon ist okay, aber nicht alles"],
      ["low", "Eher wenig", "Ich möchte mich auf andere Themen konzentrieren"],
    ],
  },
  {
    key: "region",
    title: "Welche Studienregion passt zu dir?",
    hint: "Wähle die Richtung, die du aktuell bevorzugst.",
    options: [
      ["north", "Norden", "Zum Beispiel Hamburg, Bremen oder Schleswig-Holstein"],
      ["west", "Westen", "Zum Beispiel Nordrhein-Westfalen oder Rheinland-Pfalz"],
      ["south", "Süden", "Zum Beispiel Bayern oder Baden-Württemberg"],
      ["east", "Osten oder offen", "Zum Beispiel Berlin, Sachsen oder flexibel"],
    ],
  },
  {
    key: "mode",
    title: "Welche Studienform interessiert dich?",
    hint: "Du kannst dich später immer noch neu entscheiden.",
    options: [
      ["dual", "Duales Studium", "Theorie und Berufspraxis verbinden"],
      ["classic", "Klassisches Studium", "Intensiv in ein Fachgebiet eintauchen"],
      ["flexible", "Noch offen", "Erst einmal verschiedene Wege kennenlernen"],
    ],
  },
];

const studyProfiles = [
  {
    id: "medieninformatik",
    name: "Medieninformatik",
    description: "Die Verbindung aus digitalen Technologien, Gestaltung und Nutzererlebnis.",
    careers: ["UX / UI Design", "Webentwicklung", "Produktmanagement"],
    reason: "Deine Neugier für digitale Themen trifft auf kreative und praktische Interessen.",
    regions: ["north", "west", "south", "east"],
    modes: ["classic", "flexible"],
    facets: { subjects: ["tech", "creative"], strength: ["ideas"], work: ["build"], learning: ["practice", "creative"], math: ["medium"] },
  },
  {
    id: "wirtschaftspsychologie",
    name: "Wirtschaftspsychologie",
    description: "Menschen, Organisationen und wirtschaftliche Zusammenhänge gemeinsam verstehen.",
    careers: ["Personalentwicklung", "Marktforschung", "Beratung"],
    reason: "Deine Stärke im Umgang mit Menschen passt zu Interesse an Organisation und Wirkung.",
    regions: ["north", "west", "east"],
    modes: ["classic", "flexible"],
    facets: { subjects: ["people"], strength: ["empathy", "organize"], work: ["help", "business"], learning: ["team"], math: ["low", "medium"] },
  },
  {
    id: "umweltwissenschaften",
    name: "Umweltwissenschaften",
    description: "Wissenschaftliche Perspektiven auf Klima, Ökosysteme und nachhaltige Lösungen.",
    careers: ["Nachhaltigkeitsmanagement", "Umweltanalyse", "Forschung"],
    reason: "Deine Verbindung zu Natur und Forschung kann hier in konkrete Lösungen einfließen.",
    regions: ["north", "south", "east"],
    modes: ["classic", "flexible"],
    facets: { subjects: ["nature"], strength: ["analytical"], work: ["research"], learning: ["theory", "team"], math: ["medium"] },
  },
  {
    id: "wirtschaftsinformatik",
    name: "Wirtschaftsinformatik",
    description: "Digitale Systeme, Geschäftsprozesse und die Menschen dazwischen.",
    careers: ["IT-Projektmanagement", "Business Analyse", "Digital Consulting"],
    reason: "Du kannst analytisches Denken mit dem Wunsch verbinden, Projekte zu bewegen.",
    regions: ["west", "south", "east"],
    modes: ["dual", "classic"],
    facets: { subjects: ["tech"], strength: ["analytical", "organize"], work: ["business"], learning: ["practice", "team"], math: ["high", "medium"] },
  },
];

const questionWeights = { subjects: 2, strength: 2, work: 2, learning: 1.5, math: 1.5, region: 1, mode: 1 };
let currentStep = 0;
const answers = {};
let rankedResults = [];
const comparisonSelection = new Set();
const questionContainer = document.querySelector("#question-container");
const nextButton = document.querySelector("#next-button");
const backButton = document.querySelector("#back-button");
const quizSection = document.querySelector(".finder-section");
const resultsSection = document.querySelector("#results");
const formError = document.querySelector("#form-error");

function renderQuestion() {
  const question = questions[currentStep];
  document.querySelector("#current-step").textContent = currentStep + 1;
  document.querySelector("#total-steps").textContent = questions.length;
  document.querySelector("#quiz-progress").style.width = `${((currentStep + 1) / questions.length) * 100}%`;
  backButton.hidden = currentStep === 0;
  nextButton.innerHTML = currentStep === questions.length - 1 ? "Ergebnisse ansehen <span aria-hidden=\"true\">→</span>" : "Weiter <span aria-hidden=\"true\">→</span>";
  formError.hidden = true;
  questionContainer.innerHTML = `
    <div class="question-kicker">Frage ${currentStep + 1}</div>
    <h3 class="question-title">${question.title}</h3>
    <p class="question-hint">${question.hint}</p>
    <div class="option-grid">
      ${question.options.map(([value, label, description]) => `
        <label class="option ${answers[question.key] === value ? "selected" : ""}">
          <input type="radio" name="${question.key}" value="${value}" ${answers[question.key] === value ? "checked" : ""}>
          <strong>${label}</strong><small>${description}</small>
        </label>
      `).join("")}
    </div>
  `;
  questionContainer.querySelectorAll(".option").forEach((option) => {
    option.addEventListener("click", () => {
      questionContainer.querySelectorAll(".option").forEach((item) => item.classList.remove("selected"));
      option.classList.add("selected");
      answers[question.key] = option.querySelector("input").value;
      formError.hidden = true;
    });
  });
}

function scoreProfile(profile) {
  const maxScore = Object.values(questionWeights).reduce((sum, weight) => sum + weight, 0);
  let score = 0;
  const matchedDimensions = [];
  Object.entries(questionWeights).forEach(([key, weight]) => {
    if (key === "region" && profile.regions.includes(answers[key])) {
      score += weight;
      matchedDimensions.push(key);
    } else if (key === "mode" && profile.modes.includes(answers[key])) {
      score += weight;
      matchedDimensions.push(key);
    } else if (profile.facets[key]?.includes(answers[key])) {
      score += weight;
      matchedDimensions.push(key);
    }
  });
  return { ...profile, score: Math.round((score / maxScore) * 100), matchedDimensions };
}

function renderResults() {
  rankedResults = studyProfiles.map(scoreProfile).sort((a, b) => b.score - a.score);
  document.querySelector("#result-count").textContent = rankedResults.length;
  document.querySelector("#results-list").innerHTML = rankedResults.map((result) => `
    <article class="result-card">
      <div class="result-top">
        <div><div class="eyebrow">Studienidee</div><h3>${result.name}</h3></div>
        <div class="result-score">${result.score}%<small>Übereinstimmung</small></div>
      </div>
      <p>${result.description}</p>
      <div class="result-reason"><strong>Warum das passen könnte:</strong> ${result.reason}</div>
      <div class="career-tags">${result.careers.map((career) => `<span>${career}</span>`).join("")}</div>
      <div class="result-actions">
        <label><input type="checkbox" class="compare-checkbox" value="${result.id}" aria-label="${result.name} zum Vergleich auswählen"> Für Vergleich auswählen</label>
        <span class="eyebrow">${result.matchedDimensions.length} passende Bereiche</span>
      </div>
    </article>
  `).join("");
  document.querySelectorAll(".compare-checkbox").forEach((checkbox) => {
    checkbox.checked = comparisonSelection.has(checkbox.value);
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) comparisonSelection.add(checkbox.value);
      else comparisonSelection.delete(checkbox.value);
      updateCompareButton();
    });
  });
  updateCompareButton();
}

function updateCompareButton() {
  const compareButton = document.querySelector("#compare-button");
  compareButton.disabled = comparisonSelection.size < 2;
  compareButton.innerHTML = comparisonSelection.size < 2
    ? "Mindestens 2 auswählen"
    : `Vergleich öffnen (${comparisonSelection.size}) <span aria-hidden="true">→</span>`;
}

function renderComparison() {
  const selected = rankedResults.filter((result) => comparisonSelection.has(result.id));
  if (selected.length < 2) return;
  document.querySelector("#comparison-head").innerHTML = `<tr><th>Merkmal</th>${selected.map((result) => `<th>${result.name}</th>`).join("")}</tr>`;
  const rows = [
    ["Übereinstimmung", ...selected.map((result) => `<strong>${result.score}%</strong>`)],
    ["Beschreibung", ...selected.map((result) => result.description)],
    ["Berufsfelder", ...selected.map((result) => result.careers.join(", "))],
    ["Studienform", ...selected.map((result) => result.modes.map((mode) => mode === "dual" ? "dual" : mode === "classic" ? "klassisch" : "offen").join(", "))],
    ["Beispielregionen", ...selected.map((result) => result.regions.map((region) => region === "north" ? "Norden" : region === "west" ? "Westen" : region === "south" ? "Süden" : "Osten").join(", "))],
  ];
  document.querySelector("#comparison-body").innerHTML = rows.map(([label, ...values]) => `<tr><td>${label}</td>${values.map((value) => `<td>${value}</td>`).join("")}</tr>`).join("");
  document.querySelector("#comparison-panel").hidden = false;
  document.querySelector("#comparison-panel").scrollIntoView({ behavior: "smooth", block: "start" });
}

function showResults() {
  renderResults();
  quizSection.style.display = "none";
  resultsSection.hidden = false;
  resultsSection.scrollIntoView({ behavior: "smooth" });
}

function startFinder() {
  quizSection.style.display = "block";
  resultsSection.hidden = true;
  renderQuestion();
  quizSection.scrollIntoView({ behavior: "smooth" });
}

document.querySelectorAll("[data-start]").forEach((button) => button.addEventListener("click", startFinder));
nextButton.addEventListener("click", () => {
  if (!answers[questions[currentStep].key]) {
    formError.hidden = false;
    return;
  }
  if (currentStep === questions.length - 1) showResults();
  else { currentStep += 1; renderQuestion(); }
});
backButton.addEventListener("click", () => {
  if (currentStep > 0) { currentStep -= 1; renderQuestion(); }
});
document.querySelector("#restart-button").addEventListener("click", () => {
  currentStep = 0;
  comparisonSelection.clear();
  Object.keys(answers).forEach((key) => delete answers[key]);
  document.querySelector("#comparison-panel").hidden = true;
  startFinder();
});
document.querySelector("#compare-button").addEventListener("click", renderComparison);
document.querySelector("#close-comparison").addEventListener("click", () => {
  document.querySelector("#comparison-panel").hidden = true;
});
