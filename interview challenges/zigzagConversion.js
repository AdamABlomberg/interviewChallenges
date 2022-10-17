// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);

var convert = function(s, numRows) {
    //I string phrase to zigzag and integer numRows which means number of rows
    //O string in zigzag order
    //C length between 1 and 1000, english letters comma and . rows between 1 and 1000
    //E

    //create an array of numRows length
  var matrix = new Array(numRows).fill([]);
    //assign the letters to the matrix such that the motion is defined by the following pattern
  //console.log(matrix);
  var arrayS = s.split('');
  console.log(arrayS);
  var column = 0;
  var j=0;
  while (j <= arrayS.length){
    // the first column is filled, place 1,1 then 2,1 then 3,1 until the first number is equal to numRows
    for(var i = 0; i < numRows; i++) {
      if (arrayS[j]) {
        var currentArray = matrix[0];
        console.log(currentArray);
       currentArray[column] = arrayS[j];
        j++;
      }
    }
    // then create the zigzag but increasing the row number and decreasing the column number until the row number hits 1
    for (var i = 1; i < numRows; i++) {
      if (arrayS[j]) {
        matrix[numRows-i-1][column+i]=arrayS[j];
        j++;
      }
    }
    // continue until there are no letters left
  }
  console.log(matrix);
    //join array into 1 string with no spaces

};
console.log(convert('helloworld', 3));
debugger;
