module.exports = class SixthQuestion {
  constructor() {}

  // How many character live on the most populous planet?
  async answer(Parse) {
    const Character = Parse.Object.extend("Character");
    const Planet = Parse.Object.extend("Planet");

    const query = new Parse.Query(Character);
    const innerQuery = new Parse.Query(Planet);

    let characterCount = 0;
    let mostPopulousPlanetId = "";

    innerQuery.descending("population");
    innerQuery.limit(1);

    try {
      const innerQueryResults = await innerQuery.find();
      mostPopulousPlanetId = innerQueryResults[0].id;

      const results = await query.find();

      for (let i = 0; i < results.length; i++) {
        var object = results[i];
        if (object.get("homeworld").id == mostPopulousPlanetId) {
          characterCount++;
        }
      }
      console.log(characterCount);
    } catch (e) {
      console.log(e);
    }
  }
};
