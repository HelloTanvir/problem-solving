// peak index in a mountain array. mountain arrays arelike this (^).

const peakIndexInMountainArray = (arr: number[]): number => {
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

console.log(peakIndexInMountainArray([0, 1, 2, 3, 4, 7, 5, 3, 2, 1, 0]));
