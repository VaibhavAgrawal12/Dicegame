var randomnumber1 = Math.random();
randomnumber1 = Math.floor(randomnumber1 * 6) + 1;
var random = 'images/dice'+randomnumber1+'.png';
document.querySelector("img.img1").setAttribute("src",random);

var randomnumber2 = Math.random();
randomnumber2= Math.floor(randomnumber2 * 6) + 1;
var random2 = 'images/dice'+randomnumber2+'.png';
document.querySelector("img.img2").setAttribute("src",random2);

if(randomnumber1 > randomnumber2)
{
var flag = "<link href='https://css.gg/flag-alt.css' rel='stylesheet'>";
document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
}
else if(randomnumber1 < randomnumber2)
{
var flag = "<link href='https://css.gg/flag-alt.css' rel='stylesheet'>";
document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
}
else
{
document.querySelector("h1").innerText = "Draw";
}
