// https://www.hackerrank.com/challenges/repeated-string/problem?isFullScreen=true&h_r=next-challenge&h_v=zen

// find count of a between a range of 0 to n from an infinite string s

function repeatedString(s: string, n: number): number {
  let countInS = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a") {
      countInS++;
    }
  }

  let count = countInS * Math.floor(n / s.length);

  const remainder = n % s.length;

  for (let i = 0; i < remainder; i++) {
    if (s[i] === "a") {
      count++;
    }
  }

  return count;
}
