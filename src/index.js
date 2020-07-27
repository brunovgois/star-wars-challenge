const Parse = require("parse/node");
const firstQuestion = require("./questions/firstQuestion");
const secondQuestion = require("./questions/secondQuestion")
const thirdQUestion = require("./questions/thirdQuestion")

Parse.initialize(
  "Jl21MbJjOzHoq3eNjK0dY1cuRyQnOeu1GNIGQpY3",
  "Aqy19HFsorwxIhCC3E9IYBQh8WBnkdoMGOdEaYPe"
);

Parse.serverURL = "https://parseapi.back4app.com/";

new firstQuestion().answer(Parse);
new secondQuestion().answer(Parse);
new thirdQUestion().answer(Parse)