var yourScore;
var blueVal = Math.floor(Math.random() * 12) + 1;
var greenVal = Math.floor(Math.random() * 12) + 1;
var pinkVal = Math.floor(Math.random() * 12) + 1;
var yellowVal = Math.floor(Math.random() * 12) + 1;
// assign each crystal a value between 1-12

$("#green").on("click", function() {
  yourScore += greenVal;
});
$("#blue").on("click", function() {
  yourScore += blueVal;
});
$("#pink").on("click", function() {
  yourScore += pinkVal;
});
$("#yellow").on("click", function() {
  yourScore += yellowVal;
});
// add the value of the crystal to the score

var wins = 0;
var loses = 0;

var random = Math.floor(Math.random() * 102) + 19;
// generate the goal number;

if (yourScore === random){
  wins++;
} else if (yourScore === random){
  loses++
}
