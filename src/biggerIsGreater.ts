// https://www.hackerrank.com/challenges/bigger-is-greater/problem?isFullScreen=true

const findPeakIndex = (word: string): number => {
  let i = word.length - 1;

  while (i > 0) {
    if (word[i] <= word[i - 1]) {
      i--;
    } else {
      return i;
    }
  }

  return i;
};

const findMin = (w: string, target: string, peakIndex: number): number => {
  // filter out chars less than the char before peak index
  const word = [...w.slice(peakIndex)].filter((char) => char > target);

  // find min of them, here min > target
  const min = word.sort()[0];

  // return index of the min char
  return w.indexOf(min, peakIndex);
};

function biggerIsGreater(w: string): string {
  const word = [...w];

  const peakIndex = findPeakIndex(w);

  if (peakIndex === 0) {
    return "no answer";
  } else if (w[peakIndex] <= w[peakIndex - 1]) {
    return "no answer";
  }

  const indexOfMin = findMin(w, w[peakIndex - 1], peakIndex);

  // swap chars
  [word[peakIndex - 1], word[indexOfMin]] = [
    word[indexOfMin],
    word[peakIndex - 1],
  ];

  return (
    word.slice(0, peakIndex).join("") + word.slice(peakIndex).sort().join("")
  );
}
