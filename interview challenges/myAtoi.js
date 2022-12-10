var myAtoi = function (s) {
  var num = {0:1,1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:1,9:1,'-':1,'+':1};
  firstChar = s.charAt(0);
  while(firstChar === ' '){
    s = s.substring(1,s.length)
    firstChar = s.charAt(0);
  }
  if(!num[firstChar]) {
    return 0;
  }
  var result = parseInt(s, 10);
  if (result < -2147483648) {
    return -2147483648;
  }
  if (result > 2147483647) {
    return 2147483647;
  }
  if (!result && result !== 0) {
    return 0;
}
  return result;
};

console.log(myAtoi("+-12"));