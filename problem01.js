const studentIntroduction = (student) => {
  if (typeof student !== "object" || student === null) {
    return "Invalid";
  }
  if (!("name" in student) || !("age" in student) || !("course" in student)) {
    return "Invalid";
  }

  return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`;
};

console.log(
  studentIntroduction({ name: "Rafi", age: 18, course: "JavaScript" }),
);

console.log(studentIntroduction({}));

console.log(studentIntroduction("student"));
