let student = {
  firstName: "",
  lastName: "",
  grades: [],
  inputNewGrade: function (newGrade) {

    this.grades.push(newGrade);
  },
  computeAverageGrade: function () {
    return this.grades.reduce((a, b) => a + b) / this.grades.length
  }
};


let st1 = Object.create(student);
st1.firstName = "f1";
st1.lastName = "l1";
st1.grades = [60, 87, 90, 60];

let st2 = Object.create(student);
st2.firstName = "f2";
st2.lastName = "s2";
st2.grades = [88, 90, 75, 55];

let students = [stu1, stu2];
let  average = students.reduce(
  (average, student, index, array) =>
    average + student.computeAverageGrade() / array.length,
  0
);
console.log(result);
