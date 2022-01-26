// https://www.hackerrank.com/challenges/kaprekar-numbers/problem?isFullScreen=true

// print kaprekar numbers of a given range

function kaprekarNumbers(p: number, q: number): void {
  let count = 0;

  for (let i = p; i <= q; i++) {
    const sq = i * i;
    const str = sq.toString();
    const l = +str.slice(0, str.length - i.toString().length);
    const r = +str.slice(l.toString().length);

    if (l + r === i || i === 1) {
      count++;
      //   console.log(i);
      process.stdout.write(i.toString() + " ");
    }
  }

  if (count === 0) {
    console.log("INVALID RANGE");
  }
}

kaprekarNumbers(1, 1000);
