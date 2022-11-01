// Given a positive integer n, find the smallest integer which has exactly the same digits existing in the integer n and is greater in value than n. If no such positive integer exists, return -1.

// Note that the returned integer should fit in 32-bit integer, if there is a valid answer but it does not fit in 32-bit integer, return -1.

var nextGreaterElement = function (n) {
  //I integer
  //O integer

  //pseudocode
  // change the integer to a string
  // change the string to an array
  // create all possible combinations of the number
  // select the first number push to a temp array
  // loop through the other options adding each digit to a new array
  var string = n.toString();
  console.log(n);
  var array = string.split('');
  console.log(array);
  var results = [];
  for(var i = 0; i < array.length; i++) {
    var temp = array;
    var firstDigit = temp.splice(i,1);

  }

};

console.log(nextGreaterElement(21));

