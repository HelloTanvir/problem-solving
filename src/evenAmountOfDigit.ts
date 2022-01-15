// print how many numbers conatains even amount of digits

const nums = [12, 345, 2, 6, 7896];

// process-1
const getCount = (arr: number[]): number => {
  let count = 0;

  arr.forEach((i) => {
    if (i.toString().length % 2 === 0) count += 1;
  });

  return count;
};

// process-2
const getCount2 = (arr: number[]): number =>
  arr.reduce(
    (prev, curr) => (curr.toString().length % 2 === 0 ? prev + 1 : prev),
    0
  );

console.log(getCount(nums));
console.log(getCount2(nums));
