// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

function generateHashtag (str) {
  if(str === ""){
    return "#";
  }

  var result = "#";
  var wordsArray = str.split(" ");
  for(var i = 0; i < wordsArray.length; i++){
    var word = wordsArray[i];
    if(word === ""){
      continue;
    }
    word = word[0].toUpperCase() + word.substring(1);
    result += word;
  }
  if(result.length <= 140){
    return result;
  }
  return false;
}

console.log(generateHashtag("hello world"));
console.log(generateHashtag("Expected an empty string to return false"));
console.log(generateHashtag("Still an empty string"));
console.log(generateHashtag("Do We have A Hashtag"));
console.log(generateHashtag("Codewars"));
console.log(generateHashtag("Codewars Is Nice"));
console.log(generateHashtag("Codewars is nice"));
console.log(generateHashtag("code" + " ".repeat(140) + "wars"));
console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"));