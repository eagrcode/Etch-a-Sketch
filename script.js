const slider = document.getElementById("grid-slider");
const sliderLabel = document.getElementById("slider-label");
const defaultGridSize = 64;
let r = Math.floor(Math.random() * 255);
let g = Math.floor(Math.random() * 255);
let b = Math.floor(Math.random() * 255);

function defaultGrid(size) {
  const grid = document.getElementById("grid");
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < defaultGridSize * defaultGridSize; i++) {
    let square = document.createElement("div");
    square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    grid.insertAdjacentElement("beforeend", square);
  }
}

defaultGrid(defaultGridSize);

function displayOutput() {
  sliderLabel.innerHTML = `${slider.value} x ${slider.value}`;
}
