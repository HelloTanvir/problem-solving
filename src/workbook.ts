// https://www.hackerrank.com/challenges/lisa-workbook/problem?isFullScreen=true

function workbook(n: number, k: number, arr: number[]): number {
  let count = 0;

  let page = 0;

  for (let i = 0; i < arr.length; i++) {
    page++;

    for (let prob = 1; prob <= arr[i]; prob++) {
      if (prob === page) {
        count++;
      }

      if (prob !== arr[i] && prob % k === 0) {
        page++;
      }
    }
  }

  return count;
}
