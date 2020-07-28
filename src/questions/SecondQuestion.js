module.exports = class SecondQuestion {
  constructor() {}

  //Which species have the shortest lifespan in average?
  async answer(Parse) {
    const Specie = Parse.Object.extend("Specie");
    const shortestLifeSpanQuery = new Parse.Query(Specie);

    try {
      shortestLifeSpanQuery.ascending("averageLifespan");
      shortestLifeSpanQuery.greaterThan("averageLifespan", 0);

      const results = await shortestLifeSpanQuery.find();
      const smallerAvgLifespan = results[0].get("averageLifespan");

      for (let i = 0; i < results.length; i++) {
        var object = results[i];

        if (object.get("averageLifespan") > smallerAvgLifespan) {
          break;
        } else {
          console.log(object.get("name"));
        }
      }
    } catch (e) {
      console.log(e);
    }
  }
};
