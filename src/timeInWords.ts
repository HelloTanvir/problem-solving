// https://www.hackerrank.com/challenges/the-time-in-words/problem?isFullScreen=true

function timeInWords(h: number, m: number): string {
  const numWord = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "quarter",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
    "twenty one",
    "twenty two",
    "twenty three",
    "twenty four",
    "twenty five",
    "twenty six",
    "twenty seven",
    "twenty eight",
    "twenty nine",
    "half",
  ];

  if (m === 0) {
    return `${numWord[h]} o' clock`;
  }

  if (m === 30) {
    return `half past ${numWord[h]}`;
  }

  if (m < 30) {
    if (m === 15) {
      return `${numWord[m]} past ${numWord[h]}`;
    }

    return `${numWord[m]} ${m === 1 ? "minute" : "minutes"} past ${numWord[h]}`;
  }

  m = 60 - m;

  if (m === 15) {
    return `${numWord[m]} to ${numWord[h + 1]}`;
  }

  return `${numWord[m]} ${m === 1 ? "minute" : "minutes"} to ${numWord[h + 1]}`;
}

console.log(timeInWords(5, 31));
