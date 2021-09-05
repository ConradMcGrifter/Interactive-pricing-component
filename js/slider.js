const SLIDER = document.querySelector(".slider");
const FOCUS_ME = document.querySelector("#focusMe");
const SLIDER_PSEUDO = document.querySelector(".pricing-range");

SLIDER.addEventListener("focus", () => {
    SLIDER.classList.toggle("drag");
});

SLIDER.addEventListener("mouseout", () => {
    FOCUS_ME.focus();
});

// calculate the width of the background-image based on the value of the input range
const setWidth = () => {
    return SLIDER.value * 25 + "%";
};

SLIDER.addEventListener("input", () => {
    SLIDER.style.backgroundSize = setWidth() + " 100%";
});
