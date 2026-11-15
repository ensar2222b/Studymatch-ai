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
    key: "study",
    title: "Was ist dir beim Studium wichtig?",
    hint: "Wähle, was am besten zu deinen Plänen passt.",
    options: [
      ["flexible", "Flexibilität", "Region und Studienform sollen offen bleiben"],
      ["dual", "Praxisnähe", "Ich möchte Theorie direkt anwenden"],
      ["classic", "Vertiefung", "Ich möchte mich intensiv mit einem Thema beschäftigen"],
      ["region", "Eine bestimmte Region", "Nähe zu meinem Zuhause ist mir wichtig"],
    ],
  },
];

const studyProfiles = [
  {
    name: "Medieninformatik",
    description: "Die Verbindung aus digitalen Technologien, Gestaltung und Nutzererlebnis.",
    careers: ["UX / UI Design", "Webentwicklung", "Produktmanagement"],
    reason: "Deine Neugier für digitale Themen trifft auf kreative und praktische Interessen.",
    tags: ["tech", "creative", "ideas", "build", "practice", "medium", "classic"],
  },
  {
    name: "Wirtschaftspsychologie",
    description: "Menschen, Organisationen und wirtschaftliche Zusammenhänge gemeinsam verstehen.",
    careers: ["Personalentwicklung", "Marktforschung", "Beratung"],
    reason: "Deine Stärke im Umgang mit Menschen passt zu Interesse an Organisation und Wirkung.",
    tags: ["people", "empathy", "business", "organize", "team", "low", "classic"],
  },
  {
    name: "Umweltwissenschaften",
    description: "Wissenschaftliche Perspektiven auf Klima, Ökosysteme und nachhaltige Lösungen.",
    careers: ["Nachhaltigkeitsmanagement", "Umweltanalyse", "Forschung"],
    reason: "Deine Verbindung zu Natur und Forschung kann hier in konkrete Lösungen einfließen.",
    tags: ["nature", "analytical", "research", "theory", "team", "medium", "classic"],
  },
  {
    name: "Wirtschaftsinformatik",
    description: "Digitale Systeme, Geschäftsprozesse und die Menschen dazwischen.",
    careers: ["IT-Projektmanagement", "Business Analyse", "Digital Consulting"],
    reason: "Du kannst analytisches Denken mit dem Wunsch verbinden, Projekte zu bewegen.",
    tags: ["tech", "analytical", "business", "organize", "practice", "high", "dual"],
  },
];

let currentStep = 0;
const answers = {};
const questionContainer = document.querySelector("#question-container");
const nextButton = document.querySelector("#next-button");
const backButton = document.querySelector("#back-button");
const quizSection = document.querySelector(".finder-section");
const resultsSection = document.querySelector("#results");

function renderQuestion() {
  const question = questions[currentStep];
  document.querySelector("#current-step").textContent = currentStep + 1;
  document.querySelector("#quiz-progress").style.width = `${((currentStep + 1) / questions.length) * 100}%`;
  backButton.hidden = currentStep === 0;
  nextButton.innerHTML = currentStep === questions.length - 1 ? "Ergebnisse ansehen <span>→</span>" : "Weiter <span>→</span>";
  questionContainer.innerHTML = `
    <div class="question-kicker">Frage ${currentStep + 1}</div>
    <h3 class="question-title">${question.title}</h3>
    <p class="hero-text">${question.hint}</p>
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
    });
  });
}

function showResults() {
  const ranked = studyProfiles.map((profile) => {
    const matches = profile.tags.filter((tag) => Object.values(answers).includes(tag)).length;
    return { ...profile, score: Math.round(55 + (matches / questions.length) * 42) };
  }).sort((a, b) => b.score - a.score);

  document.querySelector("#results-list").innerHTML = ranked.map((result) => `
    <article class="result-card">
      <div class="result-top">
        <div><div class="eyebrow">Studienidee</div><h3>${result.name}</h3></div>
        <div class="result-score">${result.score}%<small>Übereinstimmung</small></div>
      </div>
      <p>${result.description}</p>
      <div class="result-reason"><strong>Warum das passen könnte:</strong> ${result.reason}</div>
      <div class="career-tags">${result.careers.map((career) => `<span>${career}</span>`).join("")}</div>
    </article>
  `).join("");
  quizSection.style.display = "none";
  resultsSection.hidden = false;
  resultsSection.scrollIntoView({ behavior: "smooth" });
}

document.querySelectorAll("[data-start]").forEach((button) => {
  button.addEventListener("click", () => {
    quizSection.style.display = "block";
    resultsSection.hidden = true;
    quizSection.scrollIntoView({ behavior: "smooth" });
    renderQuestion();
  });
});

nextButton.addEventListener("click", () => {
  if (!answers[questions[currentStep].key]) {
    questionContainer.classList.add("shake");
    setTimeout(() => questionContainer.classList.remove("shake"), 350);
    return;
  }
  if (currentStep === questions.length - 1) showResults();
  else { currentStep += 1; renderQuestion(); }
});

backButton.addEventListener("click", () => { if (currentStep > 0) { currentStep -= 1; renderQuestion(); } });
document.querySelector("#restart-button").addEventListener("click", () => {
  currentStep = 0;
  Object.keys(answers).forEach((key) => delete answers[key]);
  resultsSection.hidden = true;
  quizSection.style.display = "block";
  renderQuestion();
  quizSection.scrollIntoView({ behavior: "smooth" });
});
