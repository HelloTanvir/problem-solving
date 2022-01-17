// find the ceiling of a number (smallest greater than or equal number) from a given increasing order sorted array

const findCeiling = (numbers: number[], target: number): number => {
  let start = 0;
  let end = numbers.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (numbers[mid] < target) {
      start = mid + 1;
    } else if (numbers[mid] > target) {
      end = mid - 1;
    } else {
      return numbers[mid];
    }
  }

  return numbers[start];
};

const numbers = [2, 3, 5, 9, 14, 16, 18];

const targets = [...new Array(21)].map((e, i) => i);

targets.forEach((i) => {
  console.log({
    target: i,
    cheiling: findCeiling(numbers, i),
  });
});
