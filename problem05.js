const generateLeaderboard = (students) => {
  if (!Array.isArray(students)) {
    return "Invalid";
  }

  if (students.length === 0) {
    return "Invalid";
  }

  if (
    !students.every(
      (student) =>
        "name" in student &&
        "score" in student &&
        typeof student.score === "number",
    )
  ) {
    return "Invalid";
  }

  const qualified = students.filter((student) => student.score >= 70);
  const names = qualified.map((student) => student.name.toUpperCase());

  return names.slice(0, 3);
};

console.log(
  generateLeaderboard([
    { name: "Sumon", score: 90 },
    { name: "Karim", score: 65 },
    { name: "sadia", score: 85 },
    { name: "Nafis", score: 75 },
  ]),
);

console.log(
  generateLeaderboard([
    { name: "A", score: 70 },
    { name: "B", score: 71 },
  ]),
);

console.log(generateLeaderboard([]));
console.log(generateLeaderboard("students"));
console.log(generateLeaderboard([{ name: "sumon" }]));
console.log(generateLeaderboard([{ name: "Sumon", score: "90" }]));
