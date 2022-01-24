// https://www.hackerrank.com/challenges/acm-icpc-team/problem?isFullScreen=true&h_r=next-challenge&h_v=zen

function acmTeam(topic: string[]): number[] {
  let maxTopics = 0;
  let teams = 0;

  for (let i = 0; i < topic.length - 1; i++) {
    for (let j = i + 1; j < topic.length; j++) {
      const currentStr = topic[i];
      const nextStr = topic[j];
      const newStr: string[] = new Array(currentStr.length).fill("0");

      for (let k = 0; k < currentStr.length; k++) {
        if (currentStr[k] === "1" || nextStr[k] === "1") {
          newStr[k] = "1";
        } else {
          newStr[k] = "0";
        }
      }

      let count = 0;
      for (let k = 0; k < nextStr.length; k++) {
        if (newStr[k] === "1") {
          count++;
        }
      }

      if (count > maxTopics) {
        maxTopics = count;
        teams = 1;
      } else if (count === maxTopics) {
        teams++;
      }
    }
  }

  return [maxTopics, teams];
}

console.log(acmTeam(["10101", "11100", "11010", "00101"]));
