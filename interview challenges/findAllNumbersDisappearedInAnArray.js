var findDisappearedNumbers = function(nums) {
  nums.sort((a,b) => (a-b));
  var outputArray = [];
  index = 0;
  value = 1;
  while(value <= nums.length) {

    if(value === nums[index]) {
      value++;
      index++;
    } else if(value > nums[index]) {
      index++;
    } else {
      outputArray.push(value);
      value++;
    }
  }
  return outputArray;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));