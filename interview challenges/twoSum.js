// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

var twoSum = function (nums, target) {
  var result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && !(i === j)) {
        result.push(i);
        result.push(j);
        return result;
      }
    }
  }
};

//Elegant Solution
// const twoSum = function(nums, target) {
//   const comp = {};
//   for(let i=0; i<nums.length; i++){
//     if(comp[nums[i] ]>=0){
//       return [ comp[nums[i] ] , i]
//     }
//     comp[target-nums[i]] = i
//   }
// };

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3, 3], 6));