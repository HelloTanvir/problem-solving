// https://www.hackerrank.com/challenges/service-lane/problem?isFullScreen=true

function serviceLane(width: number[], cases: number[][]): number[] {
  const result: number[] = [];

  cases.forEach((c) => {
    result.push(Math.min(...width.slice(c[0], c[1] + 1)));
  });

  return result;
}

console.log(
  serviceLane(
    [2, 3, 1, 2, 3, 2, 3, 3],
    [
      [0, 3],
      [4, 6],
      [6, 7],
      [3, 5],
      [0, 7],
    ]
  )
);
