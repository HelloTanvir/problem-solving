// find how many times an array has been rotated

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

const findPivotWithDuplicates = (arr: number[]): number => {
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

    // if elements at start, mid, end are same then try to reduce the target area from both side to ignore those duplicates
    if (arr[mid] === arr[start] && arr[mid] === arr[end]) {
      if (arr[start] > arr[start + 1]) {
        return start;
      }

      start++;

      if (arr[end] < arr[end - 1]) {
        return end - 1;
      }

      end--;
    } else if (
      arr[start] < arr[mid] ||
      (arr[start] === arr[mid] && arr[mid] > arr[end])
    ) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
};

const rotationCountOfArray = (arr: number[]): number => {
  // if the array contains no duplicate values
  const pivot = findPivot(arr);

  //   if the array contains duplicate values
  //   const pivot = findPivotWithDuplicates(arr);

  return pivot + 1;
};

console.log(rotationCountOfArray([4, 5, 6, 7, 0, 1, 2]));
