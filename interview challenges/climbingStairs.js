// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?


// var climbStairs = function(n) {
//     var result = 0;
//     var recursiveHelper = (x) => {
//       if(x>1) {
//         recursiveHelper(x-1);
//         recursiveHelper(x-2);
//       }
//       else if (x===1) {
//         recursiveHelper(x-1);
//       }
//       else {
//         return result++;
//       }
//     }
//     recursiveHelper(n);
//   return result;
// };


var climbStairs = function (n) {
  function product_Range(a, b) {
    var prd = a, i = a;
    while (i++ < b) {
      prd *= i;
    }
    return prd;
  }
  function combinations(n, r) {
    if (n == r || r == 0) {
      return 1;
    }
    else {
      r = (r < n - r) ? n - r : r;
      return product_Range(r + 1, n) / product_Range(1, n - r);
    }
  }
  var result = 0;
  var maxTwos = Math.floor(n / 2);
  for (var i = 0; i <= maxTwos; i++) {
    result = result + combinations(n - i, i)
  }
  return result;
};

console.log(climbStairs(6));