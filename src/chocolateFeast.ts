// https://www.hackerrank.com/challenges/chocolate-feast/problem?isFullScreen=true

function chocolateFeast(n: number, c: number, m: number): number {
  // n is initial amount
  // c is cost of a chocolate
  // m is number of wrappers he can turn in for a free bar

  let chocolateCount = 0;

  while (n >= c) {
    n -= c;
    chocolateCount++;

    if (chocolateCount % m === 0) {
      n += c;
    }
  }

  return chocolateCount;
}

console.log(chocolateFeast(10, 2, 5));
console.log(chocolateFeast(12, 4, 4));
console.log(chocolateFeast(6, 2, 2));
