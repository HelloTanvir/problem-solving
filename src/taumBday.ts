// https://www.hackerrank.com/challenges/taum-and-bday/problem?isFullScreen=true

function taumBday(
  b: number,
  w: number,
  bc: number,
  wc: number,
  z: number
): number | bigint {
  const costForB = BigInt(b * Math.min(bc, wc + z));
  const costForW = BigInt(w * Math.min(wc, bc + z));

  return costForB + costForW;
}

console.log(taumBday(3, 6, 9, 1, 1));
