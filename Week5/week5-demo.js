// WEEK 5 DEMO: 
/* 
Let's create a constructor for a Student, which takes in their first name, 
last name, university, major, and graduation year. 
*/ 

function Student(firstName, lastName, grade){
    this.firstName = firstName
    this.lastName = lastName
}
console.log('${aaron.firstName} ${aaron.lastName}')

/*
Now, create a constructor for a Course, which will take in a student taking the class, 
the class name, and the class location. 
*/ 

function Course (student, name, location){
    this.student = student;
    this.name = name;
    this.location = location;
}

var introToJS = new Course(vincent, "Intro to Javascript", "GDC 2.210");