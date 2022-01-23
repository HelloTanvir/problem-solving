// https://www.hackerrank.com/challenges/equality-in-a-array/problem?isFullScreen=true

// Given an array of integers, determine the minimum number of elements to delete to leave only elements of equal value.

function equalizeArray(arr: number[]): number {
  const uniqueNums = [...new Set(arr)];
  const frequency = new Array(arr.length).fill(0);

  let maxCount = 0;

  uniqueNums.forEach((num) => {
    let count = 0;
    arr.forEach((n) => {
      if (num === n) {
        count++;
      }
    });

    maxCount = Math.max(maxCount, count);
  });

  return arr.length - maxCount;
}

console.log(equalizeArray([3, 3, 2, 1, 3]));
