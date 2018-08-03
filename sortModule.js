module.exports = {};

var numList = [];

module.exports.makeNumList = function(num){
  numList.push(num);
  return numList;
};

var sortList = function(numList){
  numList.sort(function(a, b) {
    return a - b;
  });
  return numList;
};

module.exports.makeSortedList = function(unsortedList){
  return sortList(unsortedList);
}