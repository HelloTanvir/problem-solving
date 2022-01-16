// An arcade game player wants to climb to the top of the leaderboard and track their ranking. The game uses Dense Ranking, so its leaderboard works like this:

// 1.) The player with the highest score is ranked number  on the leaderboard.
// 2.) Players who have equal scores receive the same ranking number, and the next player(s) receive the immediately following ranking number.

// process-1
const climbingLeaderboard = (ranked: number[], player: number[]): number[] => {
  const leaderBoard: { rank: number; score: number }[] = [];

  let rank = 0;

  ranked.forEach((score) => {
    rank++;

    const sameScores = leaderBoard.filter((e) => e.score === score);

    if (sameScores.length > 0) rank = sameScores[0].rank;

    leaderBoard.push({ rank, score });
  });

  const reankings: number[] = [];

  player.forEach((score) => {
    rank++;

    [...leaderBoard].reverse().forEach((entry) => {
      if (score > entry.score || score === entry.score) {
        rank = entry.rank;
      }
    });

    reankings.push(rank);
  });

  return reankings;
};

console.log(climbingLeaderboard([100, 90, 90, 80], [70, 80, 105]));

// process-2
const climbingLeaderboard2 = (ranked: number[], player: number[]): number[] => {
  ranked = [...new Set(ranked)];

  const rankings: number[] = [];

  for (let p = 0; p < player.length; p++) {
    rankings[p] = ranked.length + 1;

    let r = 0;
    while (r < ranked.length) {
      if (player[p] >= ranked[r]) {
        rankings[p] = r + 1;
        break;
      }
      r++;
    }
  }

  return rankings;
};

console.log(climbingLeaderboard2([100, 90, 90, 80], [70, 80, 105]));

// process-3
function climbingLeaderboard3(scores: number[], alice: number[]): number[] {
  // get the unique ranks sorted descending
  scores = Array.from(new Set(scores));

  const player_ranks = [];
  for (const score of alice) {
    while (scores && score >= scores[scores.length - 1]) scores.pop();
    player_ranks.push(scores.length + 1);
  }

  return player_ranks;
}

console.log(climbingLeaderboard3([100, 90, 90, 80], [70, 80, 105]));
