const slider = document.getElementById("grid-slider");
const sliderLabel = document.getElementById("slider-label");

sliderLabel.innerHTML = slider.value;

// use 'change' instead to see the difference in response
slider.addEventListener(
  "input",
  () => {
    sliderLabel.innerHTML = i.value;
  },
  false
);
