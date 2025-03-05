// WEEK 2 DEMO: Values, Variables, Functions
// Task: Write a function to calculate the area of a triangle


// Write function here
function calculateTriangleArea(base, height){
    return 0.5 * base * height;
}

// Define some variables to test it here
base1 = 4;
height1 = 6;

// Call your function here!
console.log(calculateTriangleArea(base1, height1));



// Write your function here
function calculateTriangleArea(base, height) {
    return (base * height) / 2;
    // console.log(base);   <- unreachable code! 
} 

// console.log(base);  <- cannot access parameters outside of function! 

// Define some variables to test it here
var b = 5;
let h = 3;

// Able to reassign
b = 10;
h = 6;

// Call your function here!
var area;
area = calculateTriangleArea(b, h);
console.log(area);      // should print 30.

