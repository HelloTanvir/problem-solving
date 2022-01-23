// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?isFullScreen=true

function jumpingOnClouds(c: number[]): number {
  let jump = 0;

  let start = 0;
  let end = c.length - 1;

  while (start < end) {
    jump++;
    start += 2;

    if (c[start] === 1) {
      start--;
    }
  }

  return jump;
}
