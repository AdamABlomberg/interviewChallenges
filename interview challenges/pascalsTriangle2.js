var getRow = function(rowIndex) {

  if (rowIndex === 0) {
    return [1]
  }

  if (rowIndex === 1) {
    return [1,1]
  }

  var array = [1,1];

  for( var i = 1; i < rowIndex; i++) {
    var newArray = [1];
    for(var j = 0; j < array.length-1; j++) {
      newArray.push(array[j]+array[j+1]);
    }
    newArray.push(1);
    array = newArray;
  }
  return array;
};
