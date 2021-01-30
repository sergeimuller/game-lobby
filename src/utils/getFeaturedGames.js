export function getFeaturedGames(dataSet = [], featureAmount = 5) {
  if (!dataSet || dataSet.length === 0) return [];
  let featuresToGet = featureAmount;

  if (featureAmount > dataSet.length) featuresToGet = 1;
  let results = new Array(featuresToGet),
    len = dataSet.length,
    taken = new Array(len),
    filterList = [];

  while (featuresToGet--) {
    var x = Math.floor(Math.random() * len);
    results[featuresToGet] = dataSet[x in taken ? taken[x] : x];
    filterList.push(results[featuresToGet].name);
    taken[x] = --len in taken ? taken[len] : len;
  }
  return [results, dataSet.filter((item) => !filterList.includes(item.name))];
}
