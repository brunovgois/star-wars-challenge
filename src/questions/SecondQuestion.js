module.exports = class SecondQuestion {
  constructor() {}

  //Which species have the shortest lifespan in average?
  async answer(Parse) {
    const answerArray = [];
    const Specie = Parse.Object.extend("Specie");
    const shortestLifeSpanQuery = new Parse.Query(Specie);

    shortestLifeSpanQuery.ascending("averageLifespan");
    shortestLifeSpanQuery.greaterThan("averageLifespan", 0);
    shortestLifeSpanQuery.select("name");

    try {
      const results = await shortestLifeSpanQuery.find();
      const smallerAvgLifespan = results[0].get("averageLifespan");

      for (let i = 0; i < results.length; i++) {
        const object = results[i];

        if (object.get("averageLifespan") > smallerAvgLifespan) {
          break;
        } else {
          answerArray.push(object.get("name"));
        }
      }
      return answerArray;
    } catch (e) {
      console.log(e);
    }
  }
};
