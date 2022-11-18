// var isPalindrome = (string) => {
//   var array = string.split('');
//   while (array.length > 1) {
//     if (array.pop() !== array.shift()) {
//       return false;
//     }
//   }
//   return true;
// }

// var test = isPalindrome('ab');
// console.log(test);

var longestPalindrome = function (s) {
  if(s.length === 1) {
    return s;
  }
  var isPalindrome = (string) => {
    var array = string.split('');
    while (array.length > 1) {
      if (array.pop() !== array.shift()) {
        return false;
      }
    }
    return true;
  }
  var palindrome = '';
  for (var i = 0; i < s.length; i++) {
    for (var j = 1; j <= s.length; j++) {
      var currentString = s.substring(i, j);
      if (isPalindrome(currentString) && currentString.length > palindrome.length) {
        palindrome = currentString;
      }
    }
  }
  return palindrome;
};

var test = longestPalindrome('bb');
console.log(test);