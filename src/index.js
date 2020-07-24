const Parse = require("parse/node");
const express = require("express");

Parse.initialize(
  "Jl21MbJjOzHoq3eNjK0dY1cuRyQnOeu1GNIGQpY3",
  "Aqy19HFsorwxIhCC3E9IYBQh8WBnkdoMGOdEaYPe"
);
Parse.serverURL = "https://parseapi.back4app.com/";

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  const Character = Parse.Object.extend("Character");
  const query = new Parse.Query(Character);

  try {
    const results = await query.find();
    res.json(results);
  } catch (e) {
    console.log(e);
  }
});

module.exports = app;
