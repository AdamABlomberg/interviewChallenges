// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Example:

// solution(1000); // should return 'M'

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

function solution(number){
  var romanNumeralSymbolDictionary = {
    1000 : "M",
    900 : "CM",
    500 : "D",
    400 : "CD",
    100 : "C",
    90 : "XC",
    50 : "L",
    40 : "XL",
    10 : "X",
    9 : "IX",
    5 : "V",
    4 : "IV",
    1 : "I"
  }
  var romanNumeralValueArray = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  var result = "";
  while(number > 0){
    if(number >= romanNumeralValueArray[0]){
      number = number - romanNumeralValueArray[0];
      result = result + romanNumeralSymbolDictionary[romanNumeralValueArray[0]];
    } else {
      romanNumeralValueArray.shift();
    }
  }
  return result;
}

console.log(solution(2531)); // should return 'M'