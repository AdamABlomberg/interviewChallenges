var longestPalindrome = function (s) {
  // if (s.length === 1) {
  //   return s;
  // }
  // var isPalindrome = (string) => {
  //   var array = string.split('');
  //   while (array.length > 1) {
  //     if (array.pop() !== array.shift()) {
  //       return false;
  //     }
  //   }
  //   return true;
  // }
  var palindrome = '';
  var count = 0;
  for(var m = 0; m < s.length; m++) {
    if(s[m+1] === s[m]){
      count++;
      if(count === 1 && palindrome.length <= 1) {
        palindrome = s.substring(m,m+2);
      }
      for(var i = 1; i < s.length/2; i++) {
        if(s[m-i] === undefined || s[m+i+1] === undefined || s[m-i] !== s[m+i+1]) {
          break;
        }
        if(s[m-i] === s[m+i+1] && palindrome.length < s.substring(m-i,m+i+2).length) {
          palindrome = s.substring(m-i,m+i+2);
        }
      }
    }
    for(var i = 1; i < s.length/2; i++) {
      if(s[m-i] === undefined || s[m+i] === undefined || s[m-i] !== s[m+i]) {
        break;
      }
      if(s[m-i] === s[m+i] && palindrome.length < s.substring(m-i,m+i+1).length) {
        palindrome = s.substring(m-i,m+i+1);
      }
    }
  }

  // for (var i = 0; i < s.length; i++) {
  //   for (var j = 1; j <= s.length; j++) {
  //     var currentString = s.substring(i, j);
  //     if (isPalindrome(currentString) && currentString.length > palindrome.length) {
  //       palindrome = currentString;
  //     }
  //   }
  // }



  return palindrome;
};
// var longestPalindrome = function (s) {
//   if (s.length === 1) {
//     return s;
//   }
//   var isPalindrome = (string) => {
//     var array = string.split('');
//     while (array.length > 1) {
//       if (array.pop() !== array.shift()) {
//         return false;
//       }
//     }
//     return true;
//   }
//   var palindrome = '';
//   for (var i = 0; i < s.length; i++) {
//     for (var j = 1; j <= s.length; j++) {
//       var currentString = s.substring(i, j);
//       if (isPalindrome(currentString) && currentString.length > palindrome.length) {
//         palindrome = currentString;
//       }
//     }
//   }
//   return palindrome;
// };

var test = longestPalindrome('cbbd');
console.log('test =', test);