var divide = function(dividend, divisor) {
  var negatives = 0;
  if(divisor === 0) {
    return undefined;
  }
  if(dividend < 0) {
    negatives++;
    dividend = -dividend;
  }
  if(divisor < 0) {
    negatives++;
    divisor = -divisor;
  }
  var count = 0;
  while(dividend >= divisor) {
    dividend = dividend - divisor;
    count++;
    if(count > 2147483648) {
      break;
    }
  }
  if (negatives === 1) {
    count = -count;
  }
  if(count > 2147483647) {
    return 2147483647;
  }
  if(count <  -2147483648) {
    return -2147483648;
  }
  return count;
};

console.log(divide(10,3));
console.log(divide(10,2));
console.log(divide(7,-3));
console.log(divide(-7,3));
console.log(divide(-10,-3));
console.log(divide(10,0));
console.log(divide(0,10));
console.log(divide(-2147483648,-1));
console.log(divide(-2147483648,1));