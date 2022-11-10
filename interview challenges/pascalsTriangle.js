// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:



/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {

    if (numRows === 1) {
      return [[1]];
    }
    if (numRows === 2) {
      return [[1],[1,1]]
    }
    var result = [[1],[1,1]];

    for(var i = 3; i <= numRows; i++){
      var array =[1];
      var previousRow = result[result.length-1];
      for(var j=0; j < previousRow.length-1; j++) {
        array.push(previousRow[j]+previousRow[j+1]);
      }
      array.push(1);
      result.push(array);
    }
    return result;

};

var test = generate(5);
console.log(test);
debugger;