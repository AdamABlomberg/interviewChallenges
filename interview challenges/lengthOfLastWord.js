// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

var lengthOfLastWord = function(s) {
    //I string of words
    //O integers representing the length of the last word

    var arrayOfWords = s.split(' ');
    var lastWordIndex = arrayOfWords.length-1;
    var lastWord = arrayOfWords[lastWordIndex];
    while(!lastWord){
      lastWordIndex--
      lastWord = arrayOfWords[lastWordIndex];
    }
    return lastWord.length
};

console.log(lengthOfLastWord("luffy is still joyboy"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
