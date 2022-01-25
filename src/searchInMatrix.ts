// search a target element in a row wise and column wise sorted matrix

const searchInMatrix = (
  matrix: number[][],
  target: number
): [number, number] => {
  let row = 0;
  let col = matrix.length - 1;

  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] > target) {
      col--;
    } else if (matrix[row][col] < target) {
      row++;
    } else {
      return [row, col];
    }
  }

  return [-1, -1];
};

console.log(
  searchInMatrix(
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ],
    8
  )
);
