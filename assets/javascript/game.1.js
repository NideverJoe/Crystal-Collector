// Version without passing functions

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
    $("#GoalNumber").text(goalnumber);
}

//show Total, wins, and losses

function showinitialvalues () {
    $("#totalscore").text(crystaltotal);
    $("#Wins").text(wins);
    $("#Losses").text(losses);

    
}

// click commands to add value of each crystal to total and update screen with current crystal total
$("#firestone").on("click", function() {
    console.log(firevalue);
    crystaltotal += firevalue;
    console.log("Current Total = " + crystaltotal);
    $("#totalscore").text(crystaltotal);
    valuechecker();
})

$("#waterstone").on("click", function() {
    console.log(watervalue);
    crystaltotal += watervalue;
    console.log("Current Total = " + crystaltotal);
    $("#totalscore").text(crystaltotal);
    valuechecker();
})

$("#thunderstone").on("click", function() {
    console.log(thundervalue);
    crystaltotal += thundervalue;
    console.log("Current Total = " + crystaltotal);
    $("#totalscore").text(crystaltotal);
    valuechecker();
})

$("#leafstone").on("click", function() {
    console.log(leafvalue);
    crystaltotal += leafvalue;
    console.log("Current Total = " + crystaltotal);
    $("#totalscore").text(crystaltotal);
    valuechecker();
})
function valuechecker (){
if (crystaltotal===goalnumber) {
    wins++;
    $("#Wins").text(wins);
    gamereset();
}
else if (crystaltotal>goalnumber) {
    losses++;
    $("#Losses").text(losses);
    gamereset();
}
else {}
}

function gamereset () {
    randomizecrystalvalue();
    randomizegoalnumber();
    crystaltotal = 0;
    showinitialvalues();
}

gamereset ()
//if totalscore<goalnumber keep going
//else if totalscore = goalnumber win and increment wins count
//else if totalscore> goal number lose and increment losses count

