// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// ================== Data Structure STACK =========================
const isValid = (s) => {
  const stack = [];

  for (let i = 0; i < s.length; i += 1) {
    const top = stack[stack.length - 1];
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i]);
    } else if (s[i] === ')' && top === '(' && stack.length !== 0) {
      stack.pop();
    } else if (s[i] === ']' && top === '[' && stack.length !== 0) {
      stack.pop();
    } else if (s[i] === '}' && top === '{' && stack.length !== 0) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
};

// ============ First Attempt ===============================
// var isValid = function (s) {
//   //I string
//   //O boolean
//   //C parentheses may be () or {} or []
//   //E no parentheses
//   if(s === ''){
//     return true;
//   }
//   var findAndRemove = function (array, parenthesis) {
//     var parenthesesObject = {
//       '(':')',
//       '[':']',
//        '{':'}'
//     }
//   var boundary = array.length-1;
//   for (var x = i; x < array.length; x++) {

//   }
//   for (var j = boundary; j>= i; j--) {
//     if (array[j] === parenthesesObject[parenthesis]) {
//       array.splice(j, 1)
//       if(isValid(array.slice(i+1,j).join(''))){
//         return true;
//       } else
//       return false;
//     }
//   }
//   return false;
//   }
// var arrayString = s.split('');
// for (var i = 0; i < arrayString.length; i++) {
//   if (arrayString[i] === '(') {
//     if (!findAndRemove(arrayString, '(')) {
//       return false;
//     }
//   }
//   if (arrayString[i] === '[') {
//     if (!findAndRemove(arrayString, '[')) {
//       return false;
//     }
//   }
//   if (arrayString[i] === '{') {
//     if (!findAndRemove(arrayString, '{')) {
//       return false;
//     }
//   }
//   if (arrayString[i] === ')' || arrayString[i] === ']' || arrayString[i] === '}') {
//     return false;
//   }
// }
// return true;
// };

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(('));
console.log(isValid('([)]'));
console.log(isValid('{[]}'));
console.log(isValid('(([]){})'));

console.log(isValid("[({(())}[()])]"));  //false should be true