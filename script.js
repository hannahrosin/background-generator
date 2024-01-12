
var css = document.querySelector("h3");
var startUp1 = document.getElementById("startUp1");
var startUp2 = document.getElementById("startUp2");
var body = document.querySelector("body");
var heading1 = document.querySelector("h1");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var p = document.querySelector("p");


function startUp() {
	body.style.background = 
	"linear-gradient(to right, "
	+ startUp1.value
	+ ","
	+ startUp2.value
	+ ")";
	css.textContent = body.style.background + ";";
};

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, "
	+ color1.value
	+ ","
	+ color2.value
	+ ")";
	css.textContent = body.style.background + ";";
};


heading1.addEventListener("mouseenter", startUp);

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

















// function getRandomNumber(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min; 
// }

// function getRandomRGB() {
// 	var r = getRandomNumber(0, 255);
// 	var g = getRandomNumber(0, 255);
// 	var b = getRandomNumber(0, 255);
// 	return "(" + r + "," + g + "," + b + ")";
// }

// var randomColor1 = getRandomRGB();
// var randomColor2 = getRandomRGB();

// function setRandomGradient() {
// 	body.style.background = 
// 	"linear-gradient(to left, "
// 	+ randomColor1
// 	+ ","
// 	+ randomColor2
// 	+ ")";
// 	css.textContent = body.style.background + ";";
// };




// p.addEventListener("mouseenter", setRandomGradient) 
	













































// var randomGenerator = document.querySelector("button");


// 	var red1 = Math.floor(Math.random() * (225 - 0)) + 1;
// 	var blue1 = Math.floor(Math.random() * (225 - 0)) + 1;
// 	var green1 = Math.floor(Math.random() * (225 - 0)) + 1;
	

// 	var red2 = Math.floor(Math.random() * (225 - 0)) + 1;
// 	var blue2 = Math.floor(Math.random() * (225 - 0)) + 1;
// 	var green2 = Math.floor(Math.random() * (225 - 0)) + 1;



// var randomOne = "(" + red1 + "," + blue1 + "," + green1 + ")";
// console.log(randomOne);
// var randomTwo = "(" + red2 + "," + blue2 + "," + green2 + ")";
// console.log(randomTwo);



// function setRandomBackground() {
// 	body.style.background = 
// 	"linear-gradient(to left, "
// 	+ randomOne
// 	+ ","
// 	+ randomTwo
// 	+ ")";
// }




// can use switch statements to do color 



// randomGenerator.addEventListener("mouseclick", setRandomBackground)



// var randomOne = "#" + red1 + blue1 + green1;
// console.log(randomOne);
// var randomTwo = "#" + red2 + blue2 + green2;
// console.log(randomTwo);




// document.getElementById('square').style.backgroundColor = '#FF0000';




// maybe try to have 

// when button is pressed have the two random generated codes outlined on screen then have another button which says go and that changes the background 









