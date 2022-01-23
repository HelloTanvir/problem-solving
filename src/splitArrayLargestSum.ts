// given an array nums which consists of non-negative integers and an integer m, you can split the array into m non-empty continuous subarrays

// write an algorithm to minimize the largest sum among these m subarrays

const splitArrayLargestSum = (nums: number[], m: number): number => {
  let start = 0;
  let end = 0;

  nums.forEach((num) => {
    start = Math.max(start, num);
    end += num;
  });

  while (start < end) {
    let mid = start + Math.floor((end - start) / 2);

    let sum = 0;
    let piece = 1;

    nums.forEach((num) => {
      if (sum + num > mid) {
        sum = num;
        piece++;
      } else {
        sum += num;
      }
    });

    if (piece > m) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return end;
};

console.log(splitArrayLargestSum([7, 2, 5, 10, 8], 2));
