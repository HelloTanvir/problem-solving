// https://www.hackerrank.com/challenges/queens-attack-2/problem?isFullScreen=true

function queensAttack(
  n: number,
  k: number,
  r_q: number,
  c_q: number,
  obstacles: number[][]
): number {
  let l = c_q - 1;
  let r = n - c_q;
  let t = n - r_q;
  let b = r_q - 1;

  let tr = Math.min(t, r);
  let tl = Math.min(t, l);
  let br = Math.min(b, r);
  let bl = Math.min(b, l);

  obstacles.forEach((obstacle) => {
    const [row, col] = obstacle;

    if (row === r_q) {
      if (col < c_q) {
        l = Math.min(l, c_q - 1 - col);
      } else {
        r = Math.min(r, col - c_q - 1);
      }
    } else if (col === c_q) {
      if (row < r_q) {
        b = Math.min(b, r_q - 1 - row);
      } else {
        t = Math.min(t, row - r_q - 1);
      }
    } else if (Math.abs(row - r_q) === Math.abs(col - c_q)) {
      if (col > c_q) {
        if (row > r_q) {
          tr = Math.min(tr, col - c_q - 1);
        } else {
          br = Math.min(br, col - c_q - 1);
        }
      } else {
        if (row > r_q) {
          tl = Math.min(tl, c_q - 1 - col);
        } else {
          bl = Math.min(bl, c_q - 1 - col);
        }
      }
    }
  });

  return l + r + t + b + tr + tl + br + bl;
}

console.log(
  queensAttack(6, 6, 4, 3, [
    [6, 5],
    [6, 1],
    [5, 3],
    [4, 6],
    [2, 1],
    [2, 5],
  ])
);
