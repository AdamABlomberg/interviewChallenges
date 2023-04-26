// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// function pigIt(str){
//   var words = str.split(' ');
//   var resultArray = [];
//   var reg = /^[a-z]+$/i;
//   for (var i = 0; i < words.length; i++) {
//     if (reg.test(words[i])) {
//       var word = words[i];
//       word = word + word[0];
//       word = word.substring(1);
//       resultArray.push(word);
//     } else {
//       resultArray.push(words[i]);
//     }
//   }
//   var resultString = "";
//   for (var i = 0; i < resultArray.length; i++) {
//     if (reg.test(words[i])) {
//       if (i < resultArray.length-1){
//         resultString += resultArray[i] + "ay ";
//       } else{
//         resultString += resultArray[i] + "ay";
//       }
//     } else {
//       if (i < resultArray.length-1){
//         resultString += resultArray[i] + " ";
//       } else {
//         resultString += resultArray[i];
//       }
//     }
//   }
//   return resultString;
// }

function pigIt(str){
  return str.replace(/[a-z]+/gi, word => word.slice(1) + word[0] + 'ay' );
}

console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt('Hello world !'));     // elloHay orldway !

