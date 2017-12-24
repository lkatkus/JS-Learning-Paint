// VARIABLES

var numberCollums;
var numberRows;
var canvas = document.getElementById("canvas");

var screenWidth = document.documentElement.clientWidth;
var screenHeight = document.documentElement.clientHeight;

var drawingState = false;
var newColor;
var drawingColor;

var allPixel = document.getElementsByClassName("pixel");
var colorArray = document.getElementsByClassName("colorPicker");

// EVENT LISTENERS

document.addEventListener("mousedown", function(){
	drawingState = true;
	// console.log(drawingState);
});

document.addEventListener("mouseup", function(){
	drawingState = false;
	// console.log(drawingState);
});

canvas.addEventListener("mousemove", function(){
	if(drawingState){
		// console.log("mouse move");
		var elem = document.elementFromPoint(event.clientX, event.clientY);
		
		if(drawingColor){
		elem.style.backgroundColor = drawingColor;
		} else {
			drawingColor = "black";
		}
	}
})

// FUNCTIONS

function calculateGrid(){
	numberCollums = Math.round(screenWidth / 10);
	numberRows = Math.round(screenHeight / 10);
	numberPixels = numberCollums * numberRows;
	generateGrid(numberPixels);
}

function generateGrid(pixel){

	for(var i = 0; i < pixel; i++){
		var newPixel = document.createElement("div");
		canvas.appendChild(newPixel);
		newPixel.classList.add("pixel")
	};
}

for(var i=0; i<colorArray.length; i++) {
	var newColor = window.getComputedStyle(colorArray[i],null).getPropertyValue("background-color");
	colorArray[i].addEventListener('click', createHandler(newColor));
}

function createHandler(newColor) {
	return function() {
		console.log('you clicked ' + newColor);
		drawingColor = newColor;
	}
}

// FUNCTION CALLS

calculateGrid();




