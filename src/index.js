const Parse = require("parse/node");

Parse.initialize(
  "Jl21MbJjOzHoq3eNjK0dY1cuRyQnOeu1GNIGQpY3",
  "Aqy19HFsorwxIhCC3E9IYBQh8WBnkdoMGOdEaYPe"
);

Parse.serverURL = "https://parseapi.back4app.com/";

async function firstQuestion() {
  const Film = Parse.Object.extend("Film");
  const firstLaunchedMovieQuery = new Parse.Query(Film);

  firstLaunchedMovieQuery.ascending("releaseDate");

  try {
    const result = await firstLaunchedMovieQuery.first();

    console.log(result.get("title"));
  } catch (e) {
    console.log(e);
  }
}

firstQuestion();
