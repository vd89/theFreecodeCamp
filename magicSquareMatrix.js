const magicSquareMatrix = (arr) => {
  let sum = 0,
    sum2 = 0;
  let n = arr.length;
  for (var i = 0; i < n; i++) {
    sum += arr[i][i];
  }
  for (var i = 0; i < n; i++) {
    sum2 += arr[i][n - 1 - i];
  }
  if (sum == sum2) {
    for (var i = 0; i < n; i++) {
      var rowSum = 0;
      for (var j = 0; j < n; j++) {
        rowSum += arr[i][j];
      }
      if (rowSum !== sum) {
        console.log(`This is row = sum`);
      } else {
        console.log(`the sum of row is eqal to diagnol`);
      }
    }
    for (var i = 0; i < n; i++) {
      var colSum = 0;
      for (var j = 0; j < n; j++) {
        colSum += arr[j][i];
      }
      if (colSum !== sum) {
        console.log(`The col is not equal to sum`);
      } else {
        console.log(`The col is Equal to sum`);
      }
    }
  } else {
    return false;
  }
};

let a = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
];
magicSquareMatrix(a)
