var greatestDistance = function(data) {
  var dataObject = {};
  var result = 0;
  for(var i=0; i<data.length; i++) {
    if (!dataObject[data[i]]){
      dataObject[data[i]] = 1;
    } else {
      dataObject[data[i]]++;
    }
  }
  var dataReverse = [...data].reverse();
  for(key in dataObject) {
    if(dataObject[key] > 1) {
      var first = data.indexOf(parseInt(key));
      var last = data.length - 1 - dataReverse.indexOf(parseInt(key));
      if(last-first > result){
        result = last-first;
      }
    }
  }
  return result;
};

console.log(greatestDistance([9,7,1,2,3,7,0,-1,-2]));
console.log(greatestDistance([3,4,-1,0,5,-3,-4,-3,1,-3,-2,4]));