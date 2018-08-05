var compChoice = 0;
var wins = 0;
var losses = 0;
var totalScore = 0;
var btnValues = [0, 0, 0, 0];

let randomNumberGenerator = function(max, min) {
    return Math.floor(Math.random()*(max-min+1)+ min);
}

let resetBtnValues = function() {
    for (var i=0; i<btnValues.length; i++) {
        btnValues[i] = randomNumberGenerator(12, 1);
    }
}

let resetGame = function() {
    compChoice = randomNumberGenerator(120, 19);
    totalScore = 0;
    resetBtnValues();
}

let play = function(btnIndex) {
   let randomBtnValue = btnValues[btnIndex];
    totalScore = totalScore + randomBtnValue;
    if (totalScore > compChoice) {
        losses++;
        resetGame();
    }
    else if(totalScore === compChoice) {
        wins++;
        resetGame();
    }
    else {

    }
    displayAllValues();
}

let displayValue = function(place, value) {
    $("#" + place).html(value)
}

let displayAllValues = function () {
    displayValue("screenScore", compChoice);
    displayValue("wins", wins);
    displayValue("losses", losses);
    displayValue("yourScore", totalScore);
}

$(document).ready(function() {
 
        $('#btn0').on('click', function() { 
            play(0);
        })
        $('#btn1').on('click', function() { 
            play(1);
        })
        $('#btn2').on('click', function() { 
            play(2);
        })
        $('#btn3').on('click', function() { 
            play(3);
        })
    resetGame();
    displayAllValues();
})




