const SLIDER = document.querySelector(".slider");
const FOCUS_ME = document.querySelector("#focusMe");
const SLIDER_PSEUDO = document.querySelector(".pricing-range");

SLIDER.addEventListener("focus", () => {
    SLIDER.classList.toggle("drag");
});

SLIDER.addEventListener("mouseout", () => {
    FOCUS_ME.focus();
});

const setWidth = () => {
    return SLIDER.value * 16.5 + "%";
};

SLIDER.addEventListener("input", () => {
    SLIDER.style.setProperty("--width", setWidth());
});
