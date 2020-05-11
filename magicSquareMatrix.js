const magicSquareMatrix = (arr) => {
  let sum = 0,
    sum2 = 0,
    row = 0,
    col = 0;
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
    }
    if (rowSum == sum) {
      row += sum;
    } else {
      row = 0;
    }
    for (var i = 0; i < n; i++) {
      var colSum = 0;
      for (var j = 0; j < n; j++) {
        colSum += arr[j][i];
      }
    }
    if (colSum == sum) {
      col += sum;
    } else {
      col = 0;
    }
  } else {
    return false;
  }

  if (row == col && row == sum && row == sum2) {
    console.log(`The given matrix is a magic square matrix`);
  } else {
    console.log(`The given matrix is not a magic square matrix`);
  }
};

let a = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
];
magicSquareMatrix(a);
