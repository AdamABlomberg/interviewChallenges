function sumFactorial(arr){
  if(arr.length === 0){
    return 0;
  }
  var result = 0;
  for(var i = 0; i < arr.length; i++){
    if(arr[i] === 0){
      continue;
    }
    var number = 1;
    for(var j = 1; j <= arr[i]; j++){
      number = number*j;
    }
    result = result + number;
  }
  return result;
}

console.log(sumFactorial([3,2,0]));