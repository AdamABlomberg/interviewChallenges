var singleNumber = function(nums) {
  var obj = {};
  for(var i = 0; i < nums.length; i++) {
    if(obj[nums[i]]){
      obj[nums[i]]++
    }
    else {
      obj[nums[i]] = 1;
    }
  }
  for(key in obj) {
    if(obj[key] === 1) {
      return key;
    }
  }

};

console.log(singleNumber([4,1,2,1,2]));