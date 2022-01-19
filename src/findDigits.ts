// check if each digit of a number is a divisor of that number

const findDigits = (n: number): number => {
  let count = 0;
  let num = n;

  while (num !== 0) {
    let digit = num % 10;

    if (n % digit === 0) {
      count++;
    }

    num = Math.floor(num / 10);
  }

  return count;
};
