var reverse = function(x) {

  let isNegative = false;
  if (x<0) {
    x=Math.abs(x);
    isNegative = true;
  }
  var result = 0;
  var exponent = 1;
  while(x>0) {
    var currentDigit = x%10**exponent;
    x = x-currentDigit;
    while(currentDigit > 9) {
      currentDigit = currentDigit / 10;
    }
    result = result * 10 + currentDigit;
    exponent++;
  }
  if(isNegative) {
    result = -1*result;
  }
  if(result > 2**31 - 1 || result < -1*2**31) {
    return 0
}
  return result;
};

console.log(reverse(1534236469));