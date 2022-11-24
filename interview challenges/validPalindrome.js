var isPalindrome = function(s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi,'');
  var reverse = s.split('').reverse().join('');
  if(s === reverse) {
    return true;
  }
  return false;
};

//console.log(isPalindrome('A man, a plan, a canal: Panama'));
