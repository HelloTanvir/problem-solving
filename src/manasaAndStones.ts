// https://www.hackerrank.com/challenges/manasa-and-stones/problem?isFullScreen=true

function stones(n: number, a: number, b: number): number[] {
  let s: Set<number> = new Set();
  for (let i = 0; i < n; i++) {
    s.add(i * a + (n - i - 1) * b);
  }
  return [...s].sort((a, b) => a - b);
}
