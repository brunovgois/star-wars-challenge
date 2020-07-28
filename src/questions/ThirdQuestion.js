module.exports = class ThirdQuestion {
  constructor() {}

  //How many males and females characters exists
  async answer(Parse) {
    const Character = Parse.Object.extend("Character");
    const charactersPerGenderQuery = new Parse.Query(Character);
    charactersPerGenderQuery.select("gender");
    let males = 0;
    let females = 0;

    try {
      const results = await charactersPerGenderQuery.find();
      for (let i = 0; i < results.length; i++) {
        const object = results[i];
        if (object.get("gender") === "male") males++;
        else if (object.get("gender") === "female") females++;
      }

      return `M:${males}, F:${females}`;
    } catch (e) {
      console.log(e);
    }
  }
};
