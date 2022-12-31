var searchMatrix = (matrix, target) => {
  for (var i = 0; i < matrix.length; i++) {
    if (target >= matrix[i][0] && target <= matrix[i][matrix[i].length - 1]) {
      if (matrix[i].indexOf(target) >= 0) {
        return true;
      }
    }
  }
  return false;
}


var myMatrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
var myTarget = 12;
console.log(searchMatrix(myMatrix, myTarget));