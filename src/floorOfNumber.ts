// find the floor of a number (largest smaller than or equal number) from a given increasing order sorted array

const findfloor = (numbers: number[], target: number): number => {
  let start = 0;
  let end = numbers.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (target > numbers[mid]) {
      start = mid + 1;
    } else if (target < numbers[mid]) {
      end = mid - 1;
    } else {
      return numbers[mid];
    }
  }

  return numbers[end];
};

const numbers = [2, 3, 5, 9, 14, 16, 18];

const targets = [...new Array(25)].map((e, i) => i);

targets.forEach((i) => {
  console.log({
    target: i,
    cheiling: findfloor(numbers, i),
  });
});
