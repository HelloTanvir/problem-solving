// https://www.hackerrank.com/challenges/cut-the-sticks/problem?isFullScreen=true&h_r=next-challenge&h_v=zen

const getMin = (arr: number[]): number => {
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
};

function cutTheSticks(arr: number[]): number[] {
  const sticks: number[] = [];

  while (arr.length > 0) {
    sticks.push(arr.length);
    let min = getMin(arr);
    arr = arr.filter((e) => e > min);
  }

  return sticks;
}

console.log(cutTheSticks([5, 4, 4, 2, 2, 8]));
