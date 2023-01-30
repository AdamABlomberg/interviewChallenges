var fourSum = function(nums, target) {
  var result = [];
  if(nums.length < 4) {
    return result;
  }
  nums.sort((a,b)=>{return a-b});

  //remove duplicates beyond 4
  var i = 0;
  var j = 4;
  while(i<nums.length-3) {
    if(nums[i] === nums[i+3]) {
      while(nums[i] === nums[i+4]) {
        nums.splice(i+4,1);
      }
    }
    i++;
  }

  //loop through all combinations of 4 numbers
  for(var i = 0; i < nums.length-3; i++) {
    for(var j = 1; j < nums.length-2; j++) {
      for(var k = 2; k < nums.length-1; k++){
        for (var h = 3; h < nums.length; h++) {
          if(i>=j || j>=k || k>=h){
            continue;
          }
          // if sum to target
          if (nums[i]+nums[j]+nums[k]+nums[h] === target) {
            let tempArray = [];
            tempArray.push(nums[i]);
            tempArray.push(nums[j]);
            tempArray.push(nums[k]);
            tempArray.push(nums[h]);
            let isDuplicate = false;
            //check that the tempArray is unique compared to the arrays in the result array
            for(var x = 0; x < result.length; x++) {
              if(JSON.stringify(tempArray) === JSON.stringify(result[x])) {
                isDuplicate = true;
                break;
              }
            }
            if(!isDuplicate){
              result.push(tempArray);
            }
          }
        }
      }
    }
  }
    return result;
};
console.log(fourSum([1,0,-1,0,-2,2], 0));
//[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
console.log(fourSum([2,2,2,2,2],8));
//[[2,2,2,2]]

