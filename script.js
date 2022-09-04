const slider = document.getElementById("grid-slider");
const sliderLabel = document.getElementById("slider-label");

function displayOutput() {
  sliderLabel.innerHTML = `${slider.value} x ${slider.value}`;
}
