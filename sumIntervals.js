// function sumIntervals(intervals) {
//   var firstNumber = intervals[0][0];
//   var lastNumber = intervals[0][1];
//   for (var i = 0; i < intervals.length; i++) {
//     if (firstNumber > intervals[i][0]){
//       firstNumber = intervals[i][0];
//     }
//     if(lastNumber < intervals[i][1]){
//       lastNumber = intervals[i][1];
//     }
//   }
//   var result = 0;
//   for (var i = firstNumber+1; i <= lastNumber; i++){
//     for (var j = 0; j < intervals.length; j++){
//       if(i <= intervals[j][1] && i > intervals[j][0]){
//         result++;
//         break;
//       }
//     }
//   }
//   return result;
// }


    const test1 = [[1,5]];
    const test2 = [[1,5],[6,10]];
    console.log(sumIntervals(test1));
    console.log(sumIntervals(test2));

    const test3 = [[1,5],[1,5]];
    const test4 = [[1,4],[7, 10],[3, 5]];
    console.log(sumIntervals(test3));
    console.log(sumIntervals(test4));
