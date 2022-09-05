const slider = document.getElementById("grid-slider");
const sliderLabel = document.getElementById("slider-label");
const defaultGridSize = 64;

function defaultGrid(size) {
  let grid = document.getElementById("grid");
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < 128; i++) {
    let square = document.createElement("div");
    square.style.backgroundColor = "green";
    grid.insertAdjacentElement("beforeend", square);
  }
}

defaultGrid(defaultGridSize);

function displayOutput() {
  sliderLabel.innerHTML = `${slider.value} x ${slider.value}`;
}
