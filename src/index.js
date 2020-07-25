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
  const Film = Parse.Object.extend("Film");
  const firstLaunchedMovie = new Parse.Query(Film);

  firstLaunchedMovie.ascending("releaseDate")

  try {
    const result = await firstLaunchedMovie.first();    
    console.log(result.get("title"))
    res.json()

  } catch(e) {
    console.log(e);
  }
});

module.exports = app;
