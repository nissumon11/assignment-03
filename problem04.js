const bonusScore = (scores) => {
  if (!Array.isArray(scores)) {
    return "Invalid";
  }

  if (scores.length === 0) {
    return "Invalid";
  }

  if (!scores.every((score) => typeof score === "number")) {
    return "Invalid";
  }

  const updatScore = scores.map((score) => score + 10);
  const total = updatScore.reduce((sum, score) => sum + score, 0);

  return total;
};

console.log(bonusScore([80, 65, 90, 75]));
console.log(bonusScore([100]));
console.log(bonusScore([0, 10]));
console.log(bonusScore([]));
console.log(bonusScore("scores"));
console.log(bonusScore([80, "90", 70]));
