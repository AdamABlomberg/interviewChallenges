var permute = function(nums) {

   if(nums.length === 0) {
    return nums;
   }
   if(nums.length === 1) {
    return nums;
   }

  let result = [];

   for (let i = 0; i < nums.length; i++) {
    result.push([nums[i]]);
   }

   for(let i = 0; i < nums.length; i++) {
    var temp = nums.slice(0,i).concat(nums.slice(i+1));
    for(let j = 0; j < temp.length; j++) {
      result[i].push(temp[j]);
      temp2 = temp.slice(0,j).concat(temp.slice(j+1));
    }
   }

   return result;

};

console.log(permute([1,2,3]));
debugger;