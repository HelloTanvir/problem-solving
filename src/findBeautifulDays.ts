// find beautiful days in a range.
// start, end, factor is given
// if the reverse number of the day is divisible by factor k, then the day is counted as beautiful day

const isBeautifulDay = (day: number, factor: number): boolean => {
  const actualDay = day;
  let reversedDay = 0;

  while (day > 0) {
    const lastDigit = day % 10;

    reversedDay = reversedDay * 10 + lastDigit;

    day = Math.floor(day / 10);
  }

  const diff = Math.abs(actualDay - reversedDay);

  if (diff % factor === 0) {
    return true;
  }

  return false;
};

function beautifulDays(i: number, j: number, k: number): number {
  let beautifulDays = 0;

  for (let day = i; day <= j; day++) {
    const isBeautiful = isBeautifulDay(day, k);

    if (isBeautiful) {
      beautifulDays++;
    }
  }

  return beautifulDays;
}

console.log(beautifulDays(20, 23, 6));
