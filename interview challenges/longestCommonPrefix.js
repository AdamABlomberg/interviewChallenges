// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function(strs) {
  //I array of strings
  //O string - longest common prefix

  // variable prefix to return

  var prefix = '';

  // consider the first letter in the first word
  var firstWord = strs[0];
  var firstWordArray = firstWord.split('');
  for (var i = 0; i < firstWordArray.length; i++) {
    for (var j = 0; j < strs.length; j++) {
      if(firstWordArray[i] !== strs[j][i]) {
        return prefix
      }
    }
    prefix = prefix + firstWordArray[i];
  }
  // if all the words in the array have this letter then consider the next letter, else return  prefix


  return prefix

};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log('the longestCommonPrefix is ',longestCommonPrefix(["dog","racecar","car"]));

