// find position of an element in a sorted array of infinite numbers

// @ts-ignore
const findPosition = (arr: number[], target: number): number => {
  let start = 0;
  let end = 1;

  while (target > arr[end]) {
    let newStart = end + 1;
    end = end + (end - start + 1) * 2;
    start = newStart;
  }

  console.log({ start, end });

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (target > arr[mid]) {
      start = mid + 1;
    } else if (target < arr[mid]) {
      end = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
};

// @ts-ignore
console.log(findPosition([3, 5, 7, 9, 10, 90, 100, 130, 140, 160, 170], 10));
