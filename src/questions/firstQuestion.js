module.exports = class firstQuestion {
  constructor() {}

  async answer(Parse) {
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
};