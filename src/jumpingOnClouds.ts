// A child is playing a cloud hopping game. In this game, there are sequentially numbered clouds that can be thunderheads or cumulus clouds. The character must jump from cloud to cloud until it reaches the start again.

// thunder cloud means 1, cumulus cloud means 0 in the array.

// energy decreases by 1 for each jump, if the character jumps into thunder cloud, extra 2 unit of energy will be decreases

const jumpingOnClouds = (c: number[], k: number): number => {
  let energy = 100;

  let index = 0;

  while (true) {
    index = (index + k) % c.length;

    energy--;

    if (c[index] === 1) {
      energy -= 2;
    }

    if (index === 0) {
      break;
    }
  }

  return energy;
};
