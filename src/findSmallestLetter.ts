// find the smallest letter greater than the target

const letters = ["c", "f", "j"];
const target = "a";

const findSmallestLetter = (letters: string[], target: string): string => {
  if (target >= letters[letters.length - 1]) {
    return letters[0];
  }

  let start = 0;
  let end = letters.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (target > letters[mid]) {
      start = mid + 1;
    } else if (target < letters[mid]) {
      end = mid - 1;
    } else {
      return letters[mid + 1];
    }
  }

  return letters[start];
};

console.log(findSmallestLetter(letters, target));

// smarter process

const findSmallestLetter2 = (letters: string[], target: string): string => {
  let start = 0;
  let end = letters.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (target < letters[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return letters[start % letters.length];
};

console.log(findSmallestLetter2(letters, target));
