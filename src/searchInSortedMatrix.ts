// seacrh a target element in a sorted matrix

const binarySearch = (
  matrix: number[][],
  target: number,
  row: number,
  cStart: number,
  cEnd: number
): [number, number] => {
  while (cStart <= cEnd) {
    let cMid = Math.floor(cStart + (cEnd - cStart) / 2);

    if (target > matrix[row][cMid]) {
      cStart = cMid + 1;
    } else if (target < matrix[row][cMid]) {
      cEnd = cMid - 1;
    } else {
      return [row, cMid];
    }
  }

  return [-1, -1];
};

const searchInSortedMatrix = (
  matrix: number[][],
  target: number
): [number, number] => {
  let rows = matrix.length;
  let cols = matrix[0].length;

  if (rows === 1) {
    return binarySearch(matrix, target, 0, 0, cols - 1);
  }

  const col = Math.floor((cols - 1) / 2);

  let rStart = 0;
  let rEnd = rows - 1;

  while (rStart < rEnd - 1) {
    let rMid = rStart + Math.floor((rEnd - rStart) / 2);

    if (matrix[rMid][col] > target) {
      rEnd = rMid - 1;
    } else if (matrix[rMid][col] < target) {
      rStart = rMid;
    } else {
      return [rMid, col];
    }
  }

  if (matrix[rStart][col] === target) {
    return [rStart, col];
  } else if (matrix[rStart + 1][col] === target) {
    return [rStart + 1, col];
  }

  if (matrix[rStart][col] < target && matrix[rStart + 1][0] > target) {
    return binarySearch(matrix, target, rStart, col + 1, cols - 1);
  } else if (matrix[rStart][col] > target) {
    return binarySearch(matrix, target, rStart, 0, col - 1);
  } else if (matrix[rStart + 1][col] > target) {
    return binarySearch(matrix, target, rStart + 1, 0, col - 1);
  } else {
    return binarySearch(matrix, target, rStart + 1, col + 1, cols - 1);
  }
};

console.log(
  searchInSortedMatrix(
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ],
    12
  )
);
