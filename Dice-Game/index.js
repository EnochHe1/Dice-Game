const button1 = document.querySelector("button.First");
const button2 = document.querySelector("button.Second");
var count1 = 0;
var count2 = 0;
var isClicked1 = false;
var isClicked2 = false;
var number1;
var number2;

button1.addEventListener("click", function(){
    number1 = Math.floor(Math.random()*6)+1;
    isClicked1 = true;
    count1 = count1 + number1;
    document.querySelector(".count1").innerHTML = count1;
    document.querySelector(".img1").setAttribute("src", "./images/dice" + number1 + ".png");
    if (count1 > count2 && isClicked1 && isClicked2){
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    } else if (count1 < count2){
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    } else if (count1 === count2) {
        document.querySelector("h1").innerHTML = "Tie!"
    }
});

button2.addEventListener("click", function(){
    number2 = Math.floor(Math.random()*6)+1;
    isClicked2 = true;
    count2 = count2 + number2;
    document.querySelector(".count2").innerHTML = count2;
    document.querySelector(".img2").setAttribute("src", "./images/dice" + number2 + ".png");
    if (count1 > count2 && isClicked1 && isClicked2){
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    } else if (count1 < count2){
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    } else if (count1 === count2) {
        document.querySelector("h1").innerHTML = "Tie!"
    }
});



