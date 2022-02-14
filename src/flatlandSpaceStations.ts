// https://www.hackerrank.com/challenges/flatland-space-stations/problem?isFullScreen=true

function flatlandSpaceStations(n: number, c: number[]) {
  const distances: number[] = [];

  for (let i = 0; i < n; i++) {
    let minDis = Math.abs(i - c[0]);

    c.forEach((dis) => {
      minDis = Math.min(minDis, Math.abs(i - dis));
    });

    distances.push(minDis);
  }

  return Math.max(...distances);
}
