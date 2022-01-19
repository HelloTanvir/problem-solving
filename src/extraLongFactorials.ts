const factorial = function (n: number): number {
  // @ts-ignore
  n = BigInt(n);
  // @ts-ignore
  return n == 0n || n == 1n ? 1n : factorial(n - 1n) * n;
};

const extraLongFactorials = (n: number): void => {
  console.log(factorial(n).toString());
};

extraLongFactorials(25);
