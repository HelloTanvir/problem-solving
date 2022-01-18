// find first and last index of a target number in a given ascending order array

const findPosition = (
  arr: number[],
  target: number,
  searchFor: "firstIndex" | "lastIndex"
): number => {
  let index = -1;

  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (target < arr[mid]) {
      end = mid - 1;
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else {
      index = mid;

      if (searchFor === "firstIndex") {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }

  return index;
};

const findFirstAndLastPosition = (arr: number[], target: number): number[] => {
  let firstIndex = findPosition(arr, target, "firstIndex");
  let lastIndex = findPosition(arr, target, "lastIndex");

  return [firstIndex, lastIndex];
};

console.log(findFirstAndLastPosition([5, 7, 7, 7, 7, 8, 8, 10], 8));
