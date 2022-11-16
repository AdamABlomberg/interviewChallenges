var merge = function (nums1, m, nums2, n) {
  var np1 = m - 1;
  var np2 = n - 1;
  for (var i = m + n -1; i >= 0; i--) {
    if(np2 < 0 || nums1[np1] > nums2[np2]) {
      nums1[i] = nums1[np1];
      np1--
    } else {
      nums1[i] = nums2[np2];
      np2--
    }
  }
  console.log(nums1);
  return nums1;
}


// var merge = function (nums1, m, nums2, n) {
//   while (nums1.length !== m) {
//     for (var i = 0; i < nums1.length; i++) {
//       if (nums1[i] === 0) {
//         nums1.splice(i, 1);
//         break;
//       }
//     }
//     nums1.sort((a,b) => (a-b));
//   }
//   var j = 0;
//   for (var i = 0; i < nums2.length; i++) {
//     while (nums2[i] > nums1[j]) {
//       j++;
//     }
//     nums1.splice(j, 0, nums2[i]);

//   }
// };



// var merge = function(nums1, m, nums2, n) {
//   var resultArray = [];
//   for (var i = 0; i < nums1.length; i++) {
//     if (nums1[i] === 0) {
//       continue;
//     }
//     resultArray.push(nums1[i]);
//   }
//   for (var i = 0; i < nums2.length; i++) {
//     if (nums2[i] === 0) {
//       continue;
//     }
//     resultArray.push(nums2[i]);
//   }
//   resultArray.sort((a,b)=>(a-b));
//   return resultArray;
// };

merge([1, 2, 3, 0, 0], 3, [2, 5, 6], 3);

