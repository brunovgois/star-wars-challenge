const firstQuestion = require("./questions/FirstQuestion");
const secondQuestion = require("./questions/SecondQuestion");
const thirdQuestion = require("./questions/ThirdQuestion");
const fourthQuestion = require("./questions/FourthQuestion");
const fifthQuestion = require("./questions/FifthQuestion");
const sixthQuestion = require("./questions/SixthQuestion");

const Parse = require("parse/node");
const fs = require("fs");
const csv = require("fast-csv");

const answerArray = [];

Parse.initialize(
  "Jl21MbJjOzHoq3eNjK0dY1cuRyQnOeu1GNIGQpY3",
  "Aqy19HFsorwxIhCC3E9IYBQh8WBnkdoMGOdEaYPe"
);
Parse.serverURL = "https://parseapi.back4app.com/";

async function getAnswers() {
  const result = await Promise.all([
    new firstQuestion().answer(Parse),
    new secondQuestion().answer(Parse),
    new thirdQuestion().answer(Parse),
    new fourthQuestion().answer(Parse),
    new fifthQuestion().answer(Parse),
    new sixthQuestion().answer(Parse),
  ]);
  return result;
}

(async () => {
  const result = await getAnswers();
  const [
    firstAnswer,
    secondAnswer,
    thirdAnswer,
    fourthAnswer,
    fifthAnswer,
    sixthAnswer,
  ] = result;

  console.log(result);
  writeCsv(
    firstAnswer,
    secondAnswer,
    thirdAnswer,
    fourthAnswer,
    fifthAnswer,
    sixthAnswer
  );
})();

function writeCsv(
  firstAnswer,
  secondAnswer,
  thirdAnswer,
  fourthAnswer,
  fifthAnswer,
  sixthAnswer
) {

  if (fs.existsSync("answers.csv")) {
    fs.unlink("answers.csv", (e) => {
      if(e !== null)
        console.log(e);
    });
  }

  const ws = fs.createWriteStream("answers.csv");
  csv
    .write(
      [
        ["Pergunta 1", "Pergunta 2", "Pergunta 3", "Pergunta 4", "Pergunta 5", "Pergunta 6"],
        [firstAnswer, secondAnswer, thirdAnswer, fourthAnswer, fifthAnswer, sixthAnswer]
      ],
      { header: false, delimiter: ";" }
    )
    .pipe(ws);
}
