import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const weights = { interest: 2, subjects: 1.5, strength: 2, creativity: 1.5, analysis: 1.5, career: 2, environment: 1.5, math: 1, programming: 1, mode: 1, region: 0.75 };

function calculateScore(answers, matchingKeys) {
  let earned = 0;
  let possible = 0;
  for (const [key, weight] of Object.entries(weights)) {
    if (!answers[key] || answers[key] === "unsure") continue;
    possible += weight;
    if (matchingKeys.has(`${key}:${answers[key]}`)) earned += weight;
  }
  return possible ? Math.round((earned / possible) * 100) : 0;
}

test("scores matching answers higher than non-matching answers", () => {
  const profile = new Set(["interest:tech", "strength:analytical", "career:build"]);
  const matching = calculateScore({ interest: "tech", strength: "analytical", career: "build" }, profile);
  const different = calculateScore({ interest: "people", strength: "empathy", career: "help" }, profile);
  assert.ok(matching > different);
});

test("unsure answers do not reduce the score", () => {
  const profile = new Set(["interest:tech", "strength:analytical"]);
  const certain = calculateScore({ interest: "tech", strength: "analytical" }, profile);
  const uncertain = calculateScore({ interest: "tech", strength: "unsure", career: "unsure" }, profile);
  assert.equal(certain, uncertain);
});

test("the app contains a curated set of official programme sources", () => {
  const source = fs.readFileSync(new URL("../app.js", import.meta.url), "utf8")
    + fs.readFileSync(new URL("../programmes-catalog.js", import.meta.url), "utf8");
  const links = source.match(/officialUrl:/g) || [];
  assert.ok(links.length >= 37);
  assert.doesNotMatch(source, /example\.com|wikipedia\.org/);
});

test("each expanded programme includes detail fields and an official source", () => {
  const source = fs.readFileSync(new URL("../programmes-catalog.js", import.meta.url), "utf8");
  assert.ok((source.match(/related:/g) || []).length >= 27);
  assert.ok((source.match(/requirements:/g) || []).length >= 27);
  assert.ok((source.match(/officialUrl:/g) || []).length >= 27);
  assert.doesNotMatch(source, /NC|Gehalt|Zulassungsvoraussetzung/);
});
