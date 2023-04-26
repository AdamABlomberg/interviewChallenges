// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"

function solution(input, markers) {
  var linesArray = input.split("\n");
  console.log(linesArray);
  var result = "";
  linesArray.forEach((line) => {
    var isWhiteSpace = false;
    if(line[line.length-1] === " ") {
      isWhiteSpace = true;
      var whiteSpaceIndex = line.indexOf(" ");
      for(var i = whiteSpaceIndex; i < line.length; i++){
        if(line[i] != " ") {
          whiteSpaceIndex = i;
        }
      }
    }
    line = line.substring(0, whiteSpaceIndex-1);
    for (var i = 0; i < line.length; i++) {
      if (markers.includes(line[i])) {
        result = result + line.substring(0,i) + "\n";
        break;
      }
      if(i === line.length - 1) {
        result = result + line + "\n";
      }
    }
  });
  return result;
};

console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]));
