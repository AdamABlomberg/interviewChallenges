// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

var threeSum = function (nums) {
  var i;
  var j;
  var k;
  var result = [];
  var breakLoop = false;
  nums = nums.sort(function(a, b){return a-b});
  for(i = 0; i < nums.length-2; i++) {
    for(j = 1; j < nums.length-1; j++) {
      for(k = 2; k < nums.length; k++) {
        if(i >= j || i >= k || j >= k) {
          continue;
        }
        var sumString = JSON.stringify([nums[i],nums[j],nums[k]]);
        for(var a = 0; a < result.length; a++) {
          if(JSON.stringify(result[a]) === sumString) {
            breakLoop = true;
            continue;
          }
        }
        if(breakLoop) {
          breakLoop = false;
          continue;
        }
        if(nums[i] + nums[j] + nums[k] === 0) {
          result.push([nums[i],nums[j],nums[k]]);
        }
      }
    }
  }
  return result;
}

console.log(threeSum([-1,0,1,2,-1,-4]));
debugger;