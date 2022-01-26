// https://www.hackerrank.com/challenges/minimum-distances/problem?isFullScreen=true&h_r=next-challenge&h_v=zen

function minimumDistances(a: number[]): number {
  const dis: number[] = [];

  for (let i = 0; i < a.length - 1; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] === a[j]) {
        dis.push(j - i);
      }
    }
  }

  if (dis.length === 0) {
    return -1;
  }

  return Math.min(...dis);
}
