
var randomNumber1 = Math.floor(Math.random() * 6) + 1;        //For generating a random number in btwn 1-6.

var randomDiceImage = "dice" + randomNumber1 + ".png";        //For accessing dice image according to the random number obtained.

var randomImageSource = "images/" + randomDiceImage;         //For accessing random source image from the dice image folder .

var image1 = document.querySelectorAll("img")[0];           //For changing first image attribute

image1.setAttribute("src", randomImageSource);


 //For changing second image attribute

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);         


// Winning Condition
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Shan wins! 😎";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Naincy Wins! 😎";
}
else {
  document.querySelector("h1").innerHTML = "The game was Draw! 😅";
}
