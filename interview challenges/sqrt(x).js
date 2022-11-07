// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

// var mySqrt = (x) => {
//   //I non negative integer
//   //O integer, nearest rounded down integer
//   //C can't use a square root function
//   //E

//   if(x === 1 || x === 2 || x === 3) {
//     return 1;
//   }
//     var half = Math.floor(x/2);
//     if(half*half === x) {
//       return half;
//     } else {
//       for (var i = half; i > 1; i--) {
//         if (i*i <= x) {
//           return i;
//         }
//       }
//     }
//   }

  var mySqrt = (x) => {
    //I non negative integer
    //O integer, nearest rounded down integer
    //C can't use a square root function
    //E

    if(x === 1 || x === 2 || x === 3) {
      return 1;
    }

    var start = x;
    var determineStart = (int) => {
      var half = Math.floor(int/2);
      if(half*half > x) {
        determineStart(half);
      } else {
        start = half;
      }
      return;
    }

    determineStart(x);

      if(start*start === x) {
        return start;
      } else {
        for (var i = start; i > 0; i++) {
          let sqr = i*i;
          if (sqr > x) {
            return i-1;
          }
          if (sqr === x) {
            return i;
          }
        }
      }
    }



var test = mySqrt(9);
console.log(test);



//psuedocode

//cut number in half go up from there checking the squares to match

//recursive helper function that checks a number smallest sqrt
  //I number
  //O boolean
  //C
  //E

  //if the number times itself is greater than x then cut in half again
  //if the number times itself is less than x then cut the upper quartile in half and check it
  //if the new number is right next to the old number then
  //base case