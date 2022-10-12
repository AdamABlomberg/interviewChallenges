//Given an integer array nums, return the largest perimeter of a triangle with a non-zero area,formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.
var largestPerimeter = function(nums) {
  nums.sort((a,b) => b-a)
  for(var i = 0; i < nums.length -2; i++){
    if(nums[i+2]+nums[i+1]>nums[i]) {
      return nums[i+2]+nums[i+1]+nums[i]
    }
  }
  return 0;
};

//console.log(largestPerimeter([2,1,2]));
//console.log(largestPerimeter([1,2,1]));
//console.log(largestPerimeter([3,2,3,4]));