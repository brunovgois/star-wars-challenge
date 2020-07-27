const Parse = require("parse/node");
const firstQuestion = require("./questions/FirstQuestion");
const secondQuestion = require("./questions/SecondQuestion")
const thirdQUestion = require("./questions/ThirdQuestion")

Parse.initialize(
  "Jl21MbJjOzHoq3eNjK0dY1cuRyQnOeu1GNIGQpY3",
  "Aqy19HFsorwxIhCC3E9IYBQh8WBnkdoMGOdEaYPe"
);

Parse.serverURL = "https://parseapi.back4app.com/";

new firstQuestion().answer(Parse);
new secondQuestion().answer(Parse);
new thirdQUestion().answer(Parse)