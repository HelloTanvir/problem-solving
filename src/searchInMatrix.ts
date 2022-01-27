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
      [10, 20, 30, 40],
      [15, 25, 35, 45],
      [28, 29, 37, 49],
      [33, 34, 38, 50],
    ],
    8
  )
);
