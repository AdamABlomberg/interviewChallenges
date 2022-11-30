var threeSum = function (nums) {

  var result = [];
  var uniqueArray = [];

  for (var i = 0; i < nums.length - 2; i++) {
    for (var j = i + 1; j < nums.length - 1; j++) {
      for (var k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          console.log(i, j, k);
          var tempArray = [nums[i], nums[j], nums[k]];
          tempArray.sort((a, b) => a - b)
          var duplicate = false;
          for (var l = 0; l <= result.length; l++) {
            if (JSON.stringify(result[l]) === JSON.stringify(tempArray)) {
              duplicate = true;
              break;
            }
          }
          if (!duplicate) {
            result.push(tempArray);
          }
        }
      }
    }
  }
  return result;
};


console.log(threeSum([-1, 0, 1, 2, -1, -4]));
debugger;