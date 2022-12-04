var threeSumClosest = function(nums, target) {
    var difference = Math.abs(nums[0]+nums[1]+ nums[2] - target);
    var sum = nums[0]+nums[1]+ nums[2]
    for(var i = 0; i<nums.length; i++) {
      for (var j = i+1; j<nums.length; j++) {
        for (var k = j+1; k<nums.length; k++) {
          //console.log(i,j,k);
          var currentDifference = Math.abs(nums[i]+nums[j]+nums[k] - target);
          if(Math.abs(difference) > Math.abs(currentDifference)) {
            difference = currentDifference;
            sum = nums[i]+nums[j]+nums[k];
            console.log(i,j,k)
          }
        }
      }
    }
    return sum;
};

console.log(threeSumClosest([4,0,5,-5,3,3,0,-4,-5],-2));
