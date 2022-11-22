// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);

var convert = function (s, numRows) {
  //var matrix = new Array(numRows).fill([]);
  var matrix = Array();
  for(var m = 0; m < numRows; m++) {
    matrix[m] = Array();
  }
  console.log(matrix);
  var arrayS = s.split('');
  console.log(arrayS);
  //initialize i and j
  var i = 0;
  var j = 0;
  while (arrayS.length) {
    if (i === 0) {
      while (i < numRows && arrayS.length) {
        matrix[i][j] = arrayS.shift();
        i++;
      }
      i--;
      i--;
      j++;
    } else {
      while(i > 0 && arrayS.length) {
        matrix[i][j] = arrayS.shift();
        i--;
        j++;
      }
    }
  }
  console.log(matrix);
  var returnString = '';
  var returnMatrix = [];
  for(var i = 0; i < matrix.length; i++) {
    for(var j = 0; j < matrix[i].length; j++){
      if(matrix[i][j]){
        returnMatrix.push(matrix[i][j]);
      }
    }
  }
  returnString = returnMatrix.join("");
  return returnString;
};
console.log(convert('PAYPALISHIRING', 3));
debugger;

  // var column = 0;
  // var j=0;
  // while (j <= arrayS.length){
  //   // the first column is filled, place 1,1 then 2,1 then 3,1 until the first number is equal to numRows
  //   for(var i = 0; i < numRows; i++) {
  //     if (arrayS[j]) {
  //       var currentArray = matrix[0];
  //       console.log(currentArray);
  //      currentArray[column] = arrayS[j];
  //       j++;
  //     }
  //   }
  //   // then create the zigzag but increasing the row number and decreasing the column number until the row number hits 1
  //   for (var i = 1; i < numRows; i++) {
  //     if (arrayS[j]) {
  //       matrix[numRows-i-1][column+i]=arrayS[j];
  //       j++;
  //     }
  //   }
  //   // continue until there are no letters left
  // }
  // console.log(matrix);
  //   //join array into 1 string with no spaces
