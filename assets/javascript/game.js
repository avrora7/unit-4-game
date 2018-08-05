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
    displayValue("compChoice", compChoice);
    displayValue("wins", wins);
    displayValue("losses", losses);
    displayValue("totalScore", totalScore);
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





/*
    $("#compChoice").html(randomNumberGenerator(120, 19))
    $("#fox").on('click', function() {
        $("#fox").val(animalRandomNumber[0]);
        console.log(animalRandomNumber[0]);
    })*/

/*
function randomNumberGenerator(max, min) {
    return Math.floor(Math.random()*(max-min+1)+ min);
}

var animalRandomNumber = []
for (var i=0; i<5; i++) {
    var randNum = randomNumberGenerator(12, 1)
    if (animalRandomNumber.includes(randNum)) {
        console.log("Number already used");

    }
    else {
        animalRandomNumber.push(randNum)
    }
    console.log(animalRandomNumber);
}
*/
