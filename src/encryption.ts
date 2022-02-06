// https://www.hackerrank.com/challenges/encryption/problem?isFullScreen=true

function encryption(s: string): string {
  s = s.replace(/ /g, "");

  const len = s.length;
  let row = Math.floor(Math.sqrt(len));
  let col = Math.ceil(Math.sqrt(len));

  if (row * col < len) {
    row++;
  }

  let textGrid: string[] = new Array(row).fill("");

  let start = 0;
  let end = col;

  for (let i = 0; i < textGrid.length; i++) {
    textGrid[i] = s.slice(start, end);
    start = end;
    end = Math.min(start + col, len);
  }

  let encrypted = "";

  for (let i = 0; i < col; i++) {
    let text = " ";

    for (let j = 0; j < textGrid.length; j++) {
      text += textGrid[j][i] || "";
    }

    encrypted += text;
  }

  return encrypted.trim();
}

console.log(
  encryption(
    "if man was meant to stay on the ground god would have given us roots"
  )
);

// output
// imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
