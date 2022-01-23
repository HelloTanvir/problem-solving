// find position of a target number from a rotated array using binary search
// this will not work if the array contains duplicate values

const binarySearch = (
  arr: number[],
  target: number,
  start: number,
  end: number
): number => {
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

const findPivot = (arr: number[]): number => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (mid < end && arr[mid] > arr[mid + 1]) {
      return mid;
    }

    if (mid > start && arr[mid] < arr[mid - 1]) {
      return mid - 1;
    }

    if (arr[mid] <= arr[0]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
};

const searchInRotatedArray = (arr: number[], target: number): number => {
  const pivot = findPivot(arr);

  if (pivot === -1) {
    return binarySearch(arr, target, 0, arr.length - 1);
  }

  if (arr[pivot] === target) {
    return pivot;
  }

  if (target < arr[0]) {
    return binarySearch(arr, target, pivot + 1, arr.length - 1);
  }

  return binarySearch(arr, target, 0, pivot - 1);
};

console.log(searchInRotatedArray([4, 5, 6, 7, 0, 1, 2], 1));
