// Your friend is typing his name into a keyboard. Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.

// You examine the typed characters of the keyboard. Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.

// var isLongPressedName = function(name, typed) {
//   let i = 0;
//   while(i < name.length){
//     if(name[i] === typed[i] && name[i+1] === typed[i+1]) {
//       i++;
//       continue;
//     }
//     if(typed[i] === typed[i+1] && name[i] != name[i+1]){
//       typed = typed.substring(0,i)+typed.substring(i+1);
//       continue;
//     }
//     if(name[i] != typed[i] || typed.length < name.length){
//       return false;
//     }
//     i++;
//   }
//   if(name.length != typed.length){
//     return false;
//   }
//   return true;
// };

var isLongPressedName = (name, typed) => {
  let i = 0;
  let j = 0;
  while (i<name.length){
    if (name[i] )
  }
}

console.log(isLongPressedName("alex","aaleex"));
console.log(isLongPressedName("alex","alexa"));
console.log(isLongPressedName("saeed","ssaaedd"));
console.log(isLongPressedName("a","aaaaaaaaaaaaaaaaa"));