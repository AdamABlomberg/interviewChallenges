var generateParenthesis = function(n) {
  if (n === 0) return [];
  var result = ["()"];

  var x = 1;

  while(x < n) {
    var tempArray = [];
    for(var i = 0; i < result.length; i++) {
      var tempVal1 = result[i]+"()";
      tempArray.push(tempVal1);
      var tempVal2 = "()"+result[i];
      if(tempVal1 != tempVal2) {tempArray.push(tempVal2)};
      tempArray.push("("+result[i]+")");
    }
    x++;
    result = [];
    result = [...tempArray];
  }
  return result;
};

//console.log(generateParenthesis(0)); //[]
//console.log(generateParenthesis(1)); //["()"]
//console.log(generateParenthesis(2)); //["(())", "()()"]
var test = generateParenthesis(4); //["((()))","(()())","(())()","()(())","()()()"]
//console.log(generateParenthesis(4)); //[]
//console.log(generateParenthesis(5));
console.log(test);
var answerArray = ["(((())))","((()()))","((())())","((()))()","(()(()))","(()()())","(()())()","(())(())","(())()()","()((()))","()(()())","()(())()","()()(())","()()()()"];

var findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index);

var arrayChecker= function(generatedArray, answer) {
  if(generatedArray.length != answer.length) {
    return false;
  }
  var isSame = true;
  for (var i = 0; i < answer.length; i++) {
    if(!generatedArray.includes(answer[i])) {
      isSame = false;
      console.log("generatedArray is missing this one:" + answer[i]);
    }
  }
  for (var i = 0; i < generatedArray.length; i++) {
    if(!answer.includes(generatedArray[i])) {
      console.log("generatedArray has extra:" + generatedArray[i]);
    }
  }
  console.log("These are the duplicates:" + findDuplicates(generatedArray));

  return isSame;
}

console.log(arrayChecker(test, answerArray));
