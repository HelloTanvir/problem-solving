// https://www.hackerrank.com/challenges/cavity-map/problem?isFullScreen=true

// Conditions: right,left,top,down < center

function cavityMap(grid: string[]): string[] {
  for (let i = 1; i < grid.length - 1; i++) {
    const arr = [...grid[i]];

    for (let j = 1; j < grid.length - 1; j++) {
      if (
        grid[i][j] > grid[i][j + 1] &&
        grid[i][j] > grid[i][j - 1] &&
        grid[i][j] > grid[i + 1][j] &&
        grid[i][j] > grid[i - 1][j]
      ) {
        arr[j] = "X";
      }

      grid[i] = arr.join("");
    }
  }

  return grid;
}
