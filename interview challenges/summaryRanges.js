var summaryRanges = function(nums) {

  var result = [];
  var range = `${nums[0]}->`;
  var count = 0;
  for (var i = 0; i < nums.length; i++) {
    if(nums[i]+1 === nums[i+1]){
      count++;
      continue;
    } else if(count === 0) {
        range = `${nums[i]}`;
        result.push(range);
        range = `${nums[i+1]}->`;
        count = 0;
      } else {
      range = range + `${nums[i]}`;
      result.push(range);
      range = `${nums[i+1]}->`;
      count = 0;
    }
  }
  return result;

};


// nums1 = [0,1,2,4,5,7]
// console.log(summaryRanges(nums1));

// Output: ["0->2","4->5","7"]

nums2 = [0,2,3,4,6,8,9];
console.log(summaryRanges(nums2));
