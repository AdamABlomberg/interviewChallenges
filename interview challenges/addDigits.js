// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2
// Since 2 has only one digit, return it.

var addDigits = function(num) {
  count = 0;
  var tempNum = num;
  while(tempNum >= 10) {
    tempNum = tempNum/10;
    count++;
  }
  var numSum = 0;
  while(num > 9) {
    var firstDigit = (num - Math.floor(num%10**count))/(10**count);
    numSum = numSum + firstDigit;
    num = num - (firstDigit*(10**count));
    count--;
  }
  numSum = numSum + num;
  console.log("numSum =", numSum);
  if (numSum < 10) {
    return numSum;
  }
    return addDigits(numSum);
};




console.log(addDigits(38));


