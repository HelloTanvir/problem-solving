// https://www.hackerrank.com/challenges/non-divisible-subset/problem?isFullScreen=true

// Given a set of distinct integers, print the size of a maximal subset of S where the sum of any 2 numbers in S' is not evenly divisible by k.

function nonDivisibleSubset(k: number, s: number[]): number {
  let f: number[] = new Array(k).fill(0);

  for (let i = 0; i < s.length; i++) {
    f[s[i] % k]++;
  }

  let result = Math.min(f[0], 1);

  for (let i = 1; i <= Math.floor(f.length / 2); i++) {
    if (i === k - i) {
      result += Math.min(f[i], 1);
    } else {
      result += Math.max(f[i], f[f.length - i]);
    }
  }

  return result;
}

console.log(nonDivisibleSubset(4, [19, 10, 12, 10, 24, 25, 22]));
