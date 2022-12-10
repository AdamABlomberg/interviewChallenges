// var isMatch = function(s, p) {

//   // if(p.indexOf("*") != -1 && p.indexOf(p.substring(0,p.length-2)) != -1) {
//   //   return true;
//   // }

//   if(p.indexOf(".*") != -1) {
//     return true;
//   }

//   // if(s == p) {
//   //   return true;
//   // }

//   for(var i = 0; i < s.length; i++) {
//     if(p[i] === ".") {
//       continue;
//     }
//     if(p[i] === "*" && s[i] === p[i-1] ) {
//       continue;
//     }
//     if(s[i] != p[i]) {
//       return false;
//     }
//   }

//   return true;
// };

//not sure about this one!

var isMatch = function(s, p) {
if (!p.match(/\.|\*/)) {
  return s === p;
}
var regResult = s.match(new RegExp(p));
return regResult !== null && regResult[0] === regResult['input'];
};


console.log(isMatch("aa","a"));
console.log(isMatch("aa","a*"));
console.log(isMatch("aa",".*"));