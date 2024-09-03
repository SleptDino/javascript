const student = {
    id : "S0659",
    name : "Sarah Brightman",
    old_grade : 2.95,
    new_grade : 3.14,
    isActive: [Function (anonymous)]
};
// Answer 4.11 EX.2
function student(id, name, old_grade, new_grade) {
    this.id = id;
    this.name = name;
    this.old_grade = old_grade;
    this.new_grade = new_grade;
    this.isActive = function(){
        return(this.old_grade + this.new_grade) / 2 >= 2.0;
    }
}

// Test
student_1 = new student("S0783", "Tim Horton", 2.15, 1.32);
console.log(student_1.name, "is", student_1.isActive() ? "active" : "inactive");

student_2 = new student("S0847", "Jessy Jackson", 3.07, 2.76);
console.log("Student with ID", student_2.id, "is", student_2.isActive() ? "active" : "inactive");