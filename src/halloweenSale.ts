// https://www.hackerrank.com/challenges/halloween-sale/problem?isFullScreen=true

function howManyGames(p: number, d: number, m: number, s: number): number {
  let count = 0;

  while (s >= 0) {
    s -= Math.max(p, m);
    p -= d;
    count++;
  }

  return Math.max(0, count - 1);
}
