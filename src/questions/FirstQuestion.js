module.exports = class FirstQuestion {
  constructor() {}

  //What is the name of the first launched movie?
  async answer(Parse) {
    const Film = Parse.Object.extend("Film");
    const firstLaunchedMovieQuery = new Parse.Query(Film);

    firstLaunchedMovieQuery.ascending("releaseDate");
    firstLaunchedMovieQuery.select("title");

    try {
      const result = await firstLaunchedMovieQuery.first();
      return result.get("title");
      
    } catch (e) {
      console.log(e);
    }
  }
};
