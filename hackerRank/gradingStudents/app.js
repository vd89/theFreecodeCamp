function gradingStudents(grades) {
  return (grades || []).reduce((target, grade) => {
    let finalGrade = Math.ceil(grade / 5) * 5;

    target.push(finalGrade - grade >= 3 || grade < 38 ? grade : finalGrade);

    return target;
  }, []);
}
console.log(gradingStudents([38]));
console.log(gradingStudents([4]));
console.log(gradingStudents([73]));
console.log(gradingStudents([73]));
