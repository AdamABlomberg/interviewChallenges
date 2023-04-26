function sortArray(array) {
  var evenObject = {};
  var oddArray = [];
  for(var i = 0; i < array.length; i++){
    if(array[i]%2){
      oddArray.push(array[i]);
    } else {
      evenObject[i] = array[i];
    }
  }
  oddArray.sort(function(a, b) {
    return a - b;
  });
  for(key in evenObject){
    oddArray.splice(key,0,evenObject[key]);
  }
  return oddArray;
}
console.log(sortArray([5, 3, 2, 8, 1, 4]));
console.log(sortArray([5, 3, 1, 8, 0]));
console.log(sortArray([]));