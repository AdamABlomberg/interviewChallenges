//Given a string s, find the length of the longest substring without repeating characters.

var nonRepeatingSubstringLength = function (string) {
    var subString = '';
    for (let i = 0; i < string.length; i++) {
        if (subString.includes(string[i])){
            return subString.length;
        } else {
            subString = subString + string[i];
            //console.log(subString);
        }
    }
    return subString.length;
}

var lengthOfLongestSubstring = function(s) {
    //I string s
    //O integer
    //C the length of the string is between 0 and 50000, the string consists of English letters, digits, symbols, and spaces
    //E string length is 0

    // create a variable for current substring
    // create a variable for the maximum substring length
    //loop through the string
    // if the current string value repeats, then start over

    if(s === '') {
        return 0;
    }
    var subStringLength = 1;
    for(var i = 0; i < s.length; i++) {
        //find longest substring to next repeat from this letter
        var length = nonRepeatingSubstringLength(s.substring(i,s.length));
        //console.log(length);
        if (length > subStringLength) {
            subStringLength = length;
        }
    }
    return subStringLength;

};

// console.log(lengthOfLongestSubstring('pwwkew'));
// console.log(lengthOfLongestSubstring('c'));
// console.log(lengthOfLongestSubstring(' '));
console.log(lengthOfLongestSubstring('au'));