// https://www.hackerrank.com/challenges/organizing-containers-of-balls/problem?isFullScreen=true

function organizingContainers(container: number[][]): string {
  const capacities = container
    .map((box) => box.reduce((p, c) => p + c, 0))
    .sort();

  let totalOfTypes: number[] = new Array(container.length).fill(0);

  for (let i = 0; i < container.length; i++) {
    for (let j = 0; j < container.length; j++) {
      totalOfTypes[i] += container[j][i];
    }
  }

  totalOfTypes = totalOfTypes.sort();

  const isMatch = totalOfTypes.toString() === capacities.toString();

  if (isMatch) {
    return "Possible";
  }

  return "Impossible";
}

console.log(
  organizingContainers([
    [0, 2],
    [1, 1],
  ])
);
