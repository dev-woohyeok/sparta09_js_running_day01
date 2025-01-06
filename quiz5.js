const scores = [36, 62, 72, 55, 86, 95, 92, 48, 81];

function addScores(scores) {
    return scores.map((score) => score + 3);
}

addScores(scores);
console.log(scores);