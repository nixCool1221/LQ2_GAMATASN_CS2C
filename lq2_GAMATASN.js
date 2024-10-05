// Instantiate Five (5) Variables
let name = prompt("Enter your Name: ");
let address = prompt("Enter your Address: ");
let age = parseInt(prompt("Enter your Age: "));
let course = prompt("Enter your Course (BSCS, BSM, BAEL): ");
let classRole = prompt("Enter your Class Role (OFFICER, STUDENT, TEACHER): ");

// Conditional statement to detect the "Course"
if (course === "BSCS") {
  // Conditional statement to check the class role of the user
  if (classRole === "OFFICER") {
    for (let i = 0; i < age / 4; i++) {
      console.log(`Name: ${name}, Age: ${age}, Course: ${course}, Class Role: ${classRole}`);
    }
  } else if (classRole === "STUDENT") {
    for (let i = 0; i < age / 4; i++) {
      console.log(`Name: ${name}, Age: ${age}, Course: ${course}, Class Role: ${classRole}`);
    }
  } else if (classRole === "TEACHER") {
    for (let i = 0; i < age / 4; i++) {
      console.log(`Name: ${name}, Age: ${age}, Course: ${course}, Class Role: ${classRole}`);
    }
  } else {
    alert("Invalid Class Role. Defaulting to Student.");
    for (let i = 0; i < age / 4; i++) {
      console.log(`Name: ${name}, Age: ${age}, Course: ${course}, Class Role: Student`);
    }
  }
} else if (course === "BSM") {
  // Conditional statement to check the class role of the user
  if (classRole === "Officer") {
    for (let i = 0; i < age / 4; i++) {
      console.log(`Name: ${name}, Age: ${age}, Course: ${course}, Class Role: ${classRole}`);
    }
  } else if (classRole === "STUDENT") {
    for (let i = 0; i < age / 4; i++) {
      console.log(`Name: ${name}, Age: ${age}, Course: ${course}, Class Role: ${classRole}`);
    }
  } else if (classRole === "TEACHER") {
    for (let i = 0; i < age / 4; i++) {
      console.log(`Name: ${name}, Age: ${age}, Course: ${course}, Class Role: ${classRole}`);
    }
  } else {
    alert("Invalid Class Role. Defaulting to Student.");
    for (let i = 0; i < age / 4; i++) {
      console.log(`Name: ${name}, Age: ${age}, Course: ${course}, Class Role: Student`);
    }
  }
} else if (course === "BAEL") {
  // Conditional statement to check the class role of the user
  if (classRole === "Officer") {
    for (let i = 0; i < age / 4; i++) {
      console.log(`Name: ${name}, Age: ${age}, Course: ${course}, Class Role: ${classRole}`);
    }
  } else if (classRole === "STUDENT") {
    for (let i = 0; i < age / 4; i++) {
      console.log(`Name: ${name}, Age: ${age}, Course: ${course}, Class Role: ${classRole}`);
    }
  } else if (classRole === "TEACHER") {
    for (let i = 0; i < age / 4; i++) {
      console.log(`Name: ${name}, Age: ${age}, Course: ${course}, Class Role: ${classRole}`);
    }
  } else {
    alert("Invalid Class Role. Defaulting to Student.");
    for (let i = 0; i < age / 4; i++) {
      console.log(`Name: ${name}, Age: ${age}, Course: ${course}, Class Role: Student`);
    }
  }
} else {
  alert("Invalid Course. Please try again.");
}