/*
Let’s put these concepts into practice!

First, we’ll write code using an interval to count
one by one every second starting from 1.

Then, we’ll impose a limit on the time we want to count
for by using a timeout. Let’s limit the counting to only last 15 seconds.
*/

var currentTime = 1; // global variable

function printNumber()
{
    //prints current time then add one
    console.log(currentTime);
    currentTime++;
}

//use interval to count one
var intervalID = setInterval(printNumber, 1000);

// limit the interval to just 15 seconds
setTimeout(clearInterval, 16000, intervalID)