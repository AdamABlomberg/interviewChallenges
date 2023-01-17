var hammingDistance = function (x, y) {
  var result = 0;
  var xBinArray = x.toString(2).split('');
  var yBinArray = y.toString(2).split('');
  var longArray;
  var shortArray;

  if (xBinArray.length > yBinArray.length){
    longArray = xBinArray;
    shortArray = yBinArray;
  } else {
    longArray = yBinArray;
    shortArray = xBinArray;
  }

  console.log(longArray, shortArray);

  while (longArray.length > shortArray.length) {
    shortArray.unshift('0');
    //console.log(shortArray);
  }

  console.log(longArray, shortArray);

  for(var i = 0; i < longArray.length; i++) {
    if(longArray[i] != shortArray[i]) {
      result++;
    }
  }
  return result;
  };

  console.log(hammingDistance(12, 125));