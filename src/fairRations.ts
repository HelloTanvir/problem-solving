// https://www.hackerrank.com/challenges/fair-rations/problem?isFullScreen=true

function fairRations(B: number[]): string {
  let count: number = 0;
  let result: string = "NO";

  for (let i = 0; i < B.length - 1; i++) {
    if (B[i] % 2 === 0) {
      continue;
    }

    B[i]++;
    B[i + 1]++;
    count += 2;
  }

  const hasOdd = !!B.filter((b) => b % 2 !== 0).length;

  if (!hasOdd) {
    result = count.toString();
  }

  return result;
}
