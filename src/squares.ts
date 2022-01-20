// determine the number of square integers within a range

function squares(a: number, b: number): number {
  a = Math.ceil(Math.sqrt(a));
  b = Math.floor(Math.sqrt(b));

  return b - a + 1;
}
console.log(squares(3, 9));
