var rand1 = Math.floor(Math.random()*6)+1;

var picUrl1 = "images/" + "dice" + rand1 + ".png";

var image0 = document.querySelectorAll("img")[0];

image0.setAttribute("src",picUrl1);
var rand2 = Math.floor(Math.random()*6)+1;

var picUrl2 = "images/" + "dice" + rand2 + ".png";

var image1 = document.querySelectorAll("img")[1];

image1.setAttribute("src",picUrl2);

if(rand1>rand2)
{
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}else if(rand2>rand1)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}else{
    document.querySelector("h1").innerHTML = "Draw!";
}