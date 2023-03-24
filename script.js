function calculateGrade() {
    // Get input values
    const subject1 = parseFloat(document.getElementById("subject1").value);
    const subject2 = parseFloat(document.getElementById("subject2").value);
    const subject3 = parseFloat(document.getElementById("subject3").value);
    const subject4 = parseFloat(document.getElementById("subject4").value);
    const subject5 = parseFloat(document.getElementById("subject5").value);

    // Calculate total and average
    const total = subject1 + subject2 + subject3 + subject4 + subject5;
    const average = total / 5;
    
    // Determine grade
    let grade;
    if (average >= 90) {
    grade = "A+";
    } else if (average >= 80) {
    grade = "A";
    } else if (average >= 70) {
    grade = "B";
    } else if (average >= 60) {
    grade = "C";
    } else if (average >= 50) {
    grade = "D";
    } else {
    grade = "F";
    }
    
    // Display results
    document.getElementById("total").textContent = total;
    document.getElementById("average").textContent = average.toFixed(2);
    document.getElementById("grade").textContent = grade;
    }