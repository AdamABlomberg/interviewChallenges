//Given an integer array nums, return the largest perimeter of a triangle with a non-zero area,formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.
var largestPerimeter = function(nums) {
  nums.sort((a,b) => a-b)
  if(nums[0]+nums[1]<=nums[2]) {
      return 0;
  }
  return nums.reduce((partialSum, a) => partialSum + a, 0);
};

// console.log(largestPerimeter([2,1,2]));
// console.log(largestPerimeter([1,2,1]));