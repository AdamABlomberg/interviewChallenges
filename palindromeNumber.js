// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is a palindrome while 123 is not.

var isPalindrome = function(x) {
  if(x<0){
    return false;
  }
  var string = x.toString();

  if(string.length === 1) {
    return true;
  }
  if(string.length === 2 && string[0] === string[1]) {
    return true;
  } else if (string.length === 2 && string[0] !== string[1]){
    return false;
  }
var string = x.toString();
var middle = Math.floor(string.length/2);
var start = string.substring(0,middle);
if(string.length%2 === 0) {
  var end = string.substring(middle,string.length).split('').reverse().join('');
} else {
  var end = string.substring(middle+1,string.length).split('').reverse().join('');
}
if(start === end) {
  return true;
} else {
  return false;
}
};

// console.log(isPalindrome(123568));
// console.log(isPalindrome(23468));
// console.log(isPalindrome(123454321));
// console.log(isPalindrome(11));
// console.log(isPalindrome(1001));