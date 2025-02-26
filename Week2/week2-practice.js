// WEEK 2 PRACTICE: 
// Task: Write a function named convertFeetToInches that takes in a parameter named "length" that represents the length of an object in feet and returns the length converted to inches.
// After writing the function, add code that calls the function with lengths of 1 foot, 3 feet, and 30 feet and outputs these lengths converted to inches to the console.
function convertFeetToInches(length){
    return length * 12;
}

length1 = 1;
length2 = 3;
length3 = 30;

inches = convertFeetToInches(1)

console.log("Inches per one foot " + convertFeetToInches(length1));
console.log(convertFeetToInches(length2));
console.log(`Inches per 30 feet: ${convertFeetToInches(length3)}`);

