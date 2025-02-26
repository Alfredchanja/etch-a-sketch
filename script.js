const container = document.querySelector(".container");
const userInput = document.querySelector("#gridSize");
const resetBtn = document.querySelector("#reset");

let i = 0;
let j = 0;

let numPixels = 16;

// Add event listener to the reset button.
resetBtn.addEventListener("click", () => {
	numPixels = userInput.value;

	userInput.value = "";
	userInput.focus();
});

// Create 17 divs for the grid.
while(i < numPixels) {
	while(j < numPixels) {
		const divElement = document.createElement("div");
		divElement.id = `pixel-${i * 16+ j + i}`;
		container.appendChild(divElement);
		j++;
	}
	j = 0;
	i++;
}

// Random color generator.
function getRandomColor() {
	var num = Math.round(0xfffff * Math.random());
	var red = num >> 16;
	var green = num >> 8 & 255;
	var blue = num & 255;
	return `rgb(${red}, ${green}, ${blue})`;
};

// Add event listener to each div.
const pixels = document.querySelectorAll(".container div");
pixels.forEach(pixel => {
	pixel.addEventListener("mouseover", () => {
	pixel.style.backgroundColor = getRandomColor();
	});
});