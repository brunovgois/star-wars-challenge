module.exports = class FifthQuestion {
  constructor() {}

  // How many characters speak the language "Gungan basic"?
  async answer(Parse) {
    const Character = Parse.Object.extend("Character");
    const Specie = Parse.Object.extend("Specie");

    const innerQuery = new Parse.Query(Specie);
    innerQuery.equalTo("language", "Gungan basic");

    const query = new Parse.Query(Character);
    query.select("name");
    query.matchesQuery("species", innerQuery);
    try {
      const results = await query.find();
  
      for (let i = 0; i < results.length; i++) {
        var object = results[i];
        console.log(object.get("name"))
      }
    } catch(e) {
      console.log(e);
    }
  }
};
