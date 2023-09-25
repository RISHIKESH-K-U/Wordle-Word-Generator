import express from "express";

const app = express();

app.use(express.static("public"));

const words = [
  "apple",
  "beach",
  "cabin",
  "dance",
  "eagle",
  "fable",
  "grape",
  "happy",
  "icing",
  "jolly",
  "kings",
  "llama",
  "mango",
  "nexus",
  "ocean",
  "pizza",
  "quick",
  "radio",
  "sound",
  "table",
  "unity",
  "villa",
  "whale",
  "xylo",
  "yacht",
  "zebra",
  "abode",
  "bison",
  "camel",
  "daisy",
  "foggy",
  "giddy",
  "happy",
  "icily",
  "jolly",
  "karma",
  "liver",
  "mango",
  "nexus",
  "olive",
  "piano",
  "quilt",
  "rally",
  "sunny",
  "table",
  "unity",
  "viper",
  "waltz",
  "xenon",
  "yacht",
  "zebra",
  "acorn",
  "blind",
  "climb",
  "decal",
  "evoke",
  "flask",
  "grind",
  "haste",
  "icicle",
  "jokes",
  "kiosk",
  "lemma",
  "mirth",
  "nymph",
  "otter",
  "pound",
  "quack",
  "ruler",
  "sheep",
  "trace",
  "umbra",
  "vivid",
  "wager",
  "xerox",
  "yodel",
  "zoned",
  "adore",
  "blitz",
  "crane",
  "demon",
  "elope",
  "fable",
  "grape",
  "hatch",
  "irate",
  "jelly",
  "keeps",
  "lemon",
  "music",
];

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const rn = Math.floor(Math.random() * 100);
  const w = words[rn];
  res.render("index.ejs", { word: w });
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});
