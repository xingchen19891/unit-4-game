


var yourScore;
var blueVal = Math.floor(Math.random() * 12) + 1;
var greenVal = Math.floor(Math.random() * 12) + 1;
var pinkVal = Math.floor(Math.random() * 12) + 1;
var yellowVal = Math.floor(Math.random() * 12) + 1;
// assign each crystal a value between 1-12

$("#green").on("click", function() {
  yourScore += greenVal;
  $("#guess").text(yourScore);
});
$("#blue").on("click", function() {
  yourScore += blueVal;
  $("#guess").text(yourScore);
});
$("#pink").on("click", function() {
  yourScore += pinkVal;
  $("#guess").text(yourScore);
});
$("#yellow").on("click", function() {
  yourScore += yellowVal;
  $("#guess").text(yourScore);
});
// add the value of the crystal to the score, and pop current guess to designated div

var wins = 0;
var loses = 0;

var random = Math.floor(Math.random() * 102) + 19;
$("#target").text(random);
// generate the goal number;

if (yourScore === random){
  wins++;
  $("#win").text("win: "+ wins);
  alert("you win!");
} else if (yourScore === random){
  loses++;
  $("#lose").text("lose: "+ loses);
  alert("you lose!");
}
