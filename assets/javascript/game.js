var firevalue = 0;
var watervalue = 0;
var thundervalue = 0;
var leafvalue = 0;
var goalnumber = 0;
var wins = 0;
var losses = 0;
var crystaltotal = 0;

//game start - display wins and losses

// assign random value to each stone and generate the goal score
function randomizecrystalvalue (){
    firevalue = Math.floor(Math.random() * 12) + 1;
    watervalue = Math.floor(Math.random() * 12) + 1;
    thundervalue = Math.floor(Math.random() * 12) + 1;
    leafvalue = Math.floor(Math.random() * 12) + 1;
    console.log("Values in order: Fire, water, thunder, leaf");
    console.log(firevalue, watervalue, thundervalue, leafvalue);
};

function randomizegoalnumber () {
    goalnumber = Math.floor(Math.random() * 102) + 19;
    console.log("Goal number is...")
    console.log(goalnumber)
    $("#GoalNumber").append(goalnumber);
}
//if totalscore<goalnumber keep going
//else if totalscore = goalnumber win and increment wins count
//else if totalscore> goal number lose and increment losses count

//if crystal clicked, add the value of the stone chosen and display the total score