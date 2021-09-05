import { viewsPrice } from "./priceOutput.js";

export const SLIDER = document.querySelector(".slider");
const FOCUS_ME = document.querySelector("#focusMe");

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

// when the input range is changed, calculate the size of the background-image and evaluate what the pageviews and price text should be
SLIDER.addEventListener("input", () => {
    SLIDER.style.backgroundSize = setWidth() + " 100%";
    viewsPrice();
});
