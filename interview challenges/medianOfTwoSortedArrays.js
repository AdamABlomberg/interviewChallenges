var findMedianSortedArrays = function(nums1, nums2) {
  var combinedArray = [...nums1, ...nums2];
  combinedArray.sort((a,b)=>(a-b));
  console.log(combinedArray);
  if(combinedArray.length%2 === 0){
    return (combinedArray[Math.floor(combinedArray.length/2)-1] + combinedArray[Math.floor(combinedArray.length/2)])/2;
  } else {
    return (combinedArray[Math.floor(combinedArray.length/2)]);
  }
}

// var findMedianSortedArrays = function(nums1, nums2) {
//   var combinedArray = [];
//   nums1.forEach((number)=>(combinedArray.push(number)));
//   nums2.forEach((number)=>(combinedArray.push(number)));
//   combinedArray.sort((a,b)=>(a-b));
//   console.log(combinedArray);
//   while(combinedArray.length>=3){
//     combinedArray.shift();
//     combinedArray.pop();
//   }
//   console.log(combinedArray);
//   if(combinedArray.length === 1){
//     return combinedArray[0];
//   } else {
//     return ((combinedArray[0]+combinedArray[1])/2);
//   }
// }

var test = findMedianSortedArrays([1,2,3],[9,8]);
console.log(test);
