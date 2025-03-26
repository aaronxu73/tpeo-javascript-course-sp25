// WEEK 3 DEMO: 
/*
Task: write a function, walkToTreasure, that takes in x and y coordinates on a beach 
and “walks” to the location of the treasure buried in the sand. 
*/

<<<<<<< HEAD
function walkToTreasure(x, y){
    var treasureX = 3;
    var treasureY = 9;

    while (x != treasureX){
        if(x < treasureX){
            console.log("Going right");
            x++;
        } else{
=======
function walkToTreasure(x, y, treasureX, treasureY) {

    // Find x ccordinate
    while (x != treasureX) {
        if (x < treasureX) {
            console.log("Going right");
            x++;
        } else {
>>>>>>> upstream/main
            console.log("Going left");
            x--;
        }
    }

<<<<<<< HEAD
    while (y != treasureY){
        if(y < treasureY){
            console.log("Going up");
            y++;
        } else{
            console.log("Going down");
            y--;
        }
    }
    console.log("Found Treasure!")
}

walkToTreasure(0,0);

=======
    // Find y coordinate
    while (y != treasureY) {
        if (y < treasureY) {
            console.log("Going forward");
            y++;
        } else {
            console.log("Going backward");
            y--;
        }
    }

    console.log("Found treasure!");
}

walkToTreasure(0, 0, );
>>>>>>> upstream/main
