// a rabit climbs up 7 units at day and slip back 2 units at night. how many days it will take for a given height

const dayClimbUp = 7;
const nightSlipBack = 2;

const height = +process.argv[2];

let heightCovered = 0;

for (let day = 1; ; day++) {
  heightCovered += dayClimbUp;

  if (heightCovered >= height) {
    console.log(`day taken: ${day}`);
    break;
  }

  heightCovered -= nightSlipBack;
}
