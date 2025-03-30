function getStudentGrade() {

    let marks =perseInt(prompt("Enter student marks (0-100):"));

    if(isNaN(marks) || marks < 0 ||marks > 100) {
        console.log("invalid input. Please enter a number between 0 and 100.");
        return;
    }

   let grade;
   if (marks > 79) {
    grade = 'A';
   } else if (marks >= 60) {
    grade = 'B';
   } else if (marks >= 50) {
    grade = 'C';
   } else if (marks >= 40) {
    grade = 'D';
   } else {
    grade = 'E';
   }
    // Output the grade
   console.log('The grade for &{marks} marks is: &{grade}');
}

// Call the function to test
getStudentGrade();