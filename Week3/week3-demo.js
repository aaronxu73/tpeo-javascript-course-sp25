// WEEK 3 DEMO: 
/*
Task: write a function, walkToTreasure, that takes in x and y coordinates on a beach 
and “walks” to the location of the treasure buried in the sand. 
*/

function walkToTreasure(x, y){
    var treasureX = 3;
    var treasureY = 9;

    while (x != treasureX){
        if(x < treasureX){
            console.log("Going right");
            x++;
        } else{
            console.log("Going left");
            x--;
        }
    }

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

