// find the minimum index of a target in a mountain array. if there isn't any such target, return -1

const findPeakIndex = (arr: number[]): number => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] > arr[mid + 1]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return end; // or return start as they both are pointing at the peak element
};

const search = (
  arr: number[],
  start: number,
  end: number,
  target: number
): number => {
  const isAscending = arr[start] < arr[end];

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] > target) {
      if (isAscending) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else if (arr[mid] < target) {
      if (isAscending) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    } else {
      return mid;
    }
  }

  return -1;
};

const findInMountainArray = (arr: number[], target: number): number => {
  const peakIndex = findPeakIndex(arr);

  if (arr[peakIndex] === target) {
    return peakIndex;
  }

  let index = search(arr, 0, peakIndex - 1, target);

  if (index === -1) {
    index = search(arr, peakIndex + 1, arr.length, target);
  }

  return index;
};

console.log(findInMountainArray([1, 2, 3, 5, 7, 9, 7, 5, 3, 2, 1], 7));
