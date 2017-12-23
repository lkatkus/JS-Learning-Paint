document.addEventListener("click", function(){
	console.log("click");
	var elem = document.elementFromPoint(event.clientX, event.clientY);
	elem.classList.toggle("red");
})

var numberCollums;
var numberRows;
var canvas = document.getElementById("container");

var screenWidth = document.documentElement.clientWidth;
var screenHeight = document.documentElement.clientHeight;

function calculateGrid(){
	numberCollums = Math.round(screenWidth / 10);
	numberRows = Math.round(screenHeight / 10);

	console.log(numberCollums);
	console.log(numberRows);

	numberPixels = numberCollums * numberRows;

	generateGrid(numberPixels);
}

function generateGrid(pixel){

	for(var i = 0; i < pixel; i++){
		var newPixel = document.createElement("div");
		canvas.appendChild(newPixel);
	};
}

calculateGrid();