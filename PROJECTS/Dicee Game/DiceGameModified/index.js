
var Uname = window.prompt("Hi! Welcome to Dice game 😁 Enter your name: ");

var Fname = window.prompt("Now Enter your Friend's name: ");





document.querySelectorAll("p")[0].innerHTML=Uname;
document.querySelectorAll("p")[1].innerHTML=Fname;


var count = 0;
var point1 = 0;
var point2 = 0;


function play(){

count++;

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
point1=point1+randomNumber1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
point2=point2+randomNumber2;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2) {
  document.querySelector("#emoji1").innerHTML="😛";
    document.querySelector("#emoji2").innerHTML="😑";
document.querySelector("#thisround").innerHTML = "Winner of this round is "+Uname+" 😎";

}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("#emoji2").innerHTML="😝";
    document.querySelector("#emoji1").innerHTML="😭";
  document.querySelector("#thisround").innerHTML = "Winner of this round is "+Fname+" 😎";
}
else {
  document.querySelector("h4").innerHTML = "It's Draw!";
}

document.querySelector("#totalpoint1").innerHTML="Total Points = "+point1+"";
document.querySelector("#totalpoint2").innerHTML="Total Points = "+point2+"";


if (point1 > point2) {
  document.querySelector("h3").innerHTML = "🚩"+Uname+" Winning!";
}
else if (point2 > point1) {
  document.querySelector("h3").innerHTML = Fname +" Winning! 🚩";
}
else {
  document.querySelector("h3").innerHTML = "🚩Draw!🚩";
}

document.querySelector("h5").innerHTML="Total rounds = "+count+"";


}
