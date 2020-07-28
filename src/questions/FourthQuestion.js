module.exports = class FourthQuestion {
  constructor() {}

  //What is the average height of the characters?
  async answer(Parse) {
    const Character = Parse.Object.extend("Character");
    const averageHeightQuery = new Parse.Query(Character);
    const characterHeights = [];

    averageHeightQuery.greaterThan("height", 0);
    averageHeightQuery.select("height");

    const results = await averageHeightQuery.find();
    for (let i = 0; i < results.length; i++) {
      const object = results[i];
      characterHeights.push(object.get("height"));
    }
    return this.average(characterHeights).toFixed(2);
  }

  average(nums) {
    return nums.reduce((a, b) => a + b) / nums.length;
  }
};
