// You have two strings of lowercase English letters. You can perform two types of operations on the first string:

// Append a lowercase English letter to the end of the string.
// Delete the last character of the string. Performing this operation on an empty string results in an empty string.

// Given an integer and two strings s1, s2. Determine whether or not you can convert s1 to s2 by performing exactly  of the above operations on . If it's possible, print Yes. Otherwise, print No.

// s > t
// s = t
// s < t

// s = pran
// t = pranto
// k = 3 | 2 | 4 | 5

function appendAndDelete(s: string, t: string, k: number): string {
  if (k >= s.length + t.length) {
    return "Yes";
  }

  if (s === t) {
    return k % 2 === 0 ? "Yes" : "No";
  }

  let lastCommonIndex = 0;

  while (true) {
    if (s[lastCommonIndex] !== t[lastCommonIndex]) {
      lastCommonIndex--;
      break;
    }

    lastCommonIndex++;
  }

  if (lastCommonIndex > -1) {
    const commonLetters = lastCommonIndex + 1;
    const leastReqStep = s.length - 2 * commonLetters + t.length;

    if (k >= leastReqStep && (k - leastReqStep) % 2 === 0) {
      return "Yes";
    }
  }

  return "No";
}

console.log(appendAndDelete("peek", "paak", 4));
