// find the minimum cost to convert a 3x3 square into a magic square

const formingMagicSquare = (s: number[][]): number => {
  let minCost = Number.MAX_VALUE;

  const magicSquares = [
    [
      [8, 1, 6],
      [3, 5, 7],
      [4, 9, 2],
    ],
    [
      [6, 1, 8],
      [7, 5, 3],
      [2, 9, 4],
    ],
    [
      [4, 9, 2],
      [3, 5, 7],
      [8, 1, 6],
    ],
    [
      [2, 9, 4],
      [7, 5, 3],
      [6, 1, 8],
    ],
    [
      [8, 3, 4],
      [1, 5, 9],
      [6, 7, 2],
    ],
    [
      [4, 3, 8],
      [9, 5, 1],
      [2, 7, 6],
    ],
    [
      [6, 7, 2],
      [1, 5, 9],
      [8, 3, 4],
    ],
    [
      [2, 7, 6],
      [9, 5, 1],
      [4, 3, 8],
    ],
  ];

  magicSquares.forEach((square) => {
    let cost = 0;

    square.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        cost += Math.abs(col - s[rowIndex][colIndex]);
      });
    });

    if (cost < minCost) {
      minCost = cost;
    }
  });

  return minCost;
};

console.log(
  formingMagicSquare([
    [2, 7, 6],
    [7, 5, 2],
    [4, 3, 8],
  ])
);
