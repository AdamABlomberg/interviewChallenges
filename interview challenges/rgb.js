// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:



// function rgb(r, g, b){

//   if(r > 255) {
//     r = "FF";
//   } else if(r < 0) {
//     r = 0;
//   } else {
//     r = r.toString(16).toUpperCase();
//   }
//   if(g > 255) {
//     g = "FF";
//   } else if(g < 0) {
//     g = 0;
//   }else {
//     g = g.toString(16).toUpperCase();
//   }
//   if(b > 255) {
//     b = "FF";
//   } else if(b < 0) {
//     b = 0;
//   }else {
//     b = b.toString(16).toUpperCase();
//   }
//   if(r.length < 2) {
//     r = "0" + r;
//   };
//   if(g.length < 2) {
//     g = "0" + g;
//   }
//   if(b.length < 2) {
//     b = "0" + b;
//   };
//   return r + g + b;
// }

function rgb(r, g, b){
  var hexConversion = (num) => {
    if (num > 255) {
      num = "FF";
    } else if (num < 0) {
      num = "00";
    } else {
      num = num.toString(16).toUpperCase();
    }
    if(num.length < 2) {
      return "0"+num;
    } else {
      return num;
    }
  }
  return hexConversion(r)+hexConversion(g)+hexConversion(b);
}

console.log(rgb(255, 255, 255)); // returns FFFFFF
console.log(rgb(255, 255, 300)); // returns FFFFFF
console.log(rgb(0,0,0)); // returns 000000
console.log(rgb(148, 1, 211)); // returns 9400D3

