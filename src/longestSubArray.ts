// Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to 1.

const arr = [1, 2, 2, 3, 1, 2];

const findMaxLen = (arr: number[]): number => {
  let maxLen = 0;

  for (let i = 0; i < arr.length; i++) {
    const subArr: number[] = [];

    subArr.push(arr[i]);

    for (let j = 0; j < arr.length && i !== j; j++) {
      const matchCondition =
        subArr.filter((e) => Math.abs(e - arr[j]) > 1).length === 0;

      if (matchCondition) subArr.push(arr[j]);
    }

    if (subArr.length > maxLen) maxLen = subArr.length;
  }

  return maxLen;
};

console.log(findMaxLen(arr));
