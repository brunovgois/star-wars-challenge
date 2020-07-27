module.exports = class FourthQuestion {
  constructor() {}

  async answer(Parse) {
    const Character = Parse.Object.extend("Character");
    const averageHeightQuery = new Parse.Query(Character);
    const characterHeights = []
  
    averageHeightQuery.greaterThan("height", 0);
  
    const results = await averageHeightQuery.find();
    for (let i = 0; i < results.length; i++) {
      var object = results[i];
      characterHeights.push(object.get("height"))
    }
    console.log(this.average(characterHeights).toFixed(2));
  }

  average(nums) {
    return nums.reduce((a, b) => (a + b)) / nums.length;
  }
}