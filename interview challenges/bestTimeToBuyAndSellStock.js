var maxProfit = function(prices) {
 let minprice = prices[0];
 let profit = 0;
 for (let i = 0; i < prices.length; i++) {
     if (prices[i] < minprice) {
         minprice = prices[i];
     } else if (prices[i] - minprice > profit) {
         profit = prices[i] - minprice;
     }
 }
  return profit
};


//   var result = 0;
//   var smallest = prices[0];

//   var max = Math.max(...prices);
//   if (max - prices[0] > result) {
//     result = max - prices[0]
//   }

//   for (var i = 1; i < prices.length; i++) {
//     if(prices[i] < smallest) {
//       smallest = prices[i];
//     } else {
//       continue;
//     }
//     var remainingPrices = prices.slice(i,prices.length)
//     var max = Math.max(...remainingPrices);
//     if(max - prices[i] > result) {
//       result = max - prices[i];
//     }
//   }
//   return result;
// };

console.log(maxProfit([7,1,5,3,6,4]));