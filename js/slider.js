const SLIDER = document.querySelector(".slider");
const TEST = document.querySelector("#focusMe");
const SLIDER_PSEUDO = document.querySelector(".pricing-range");

SLIDER.addEventListener("focus", () => {
    SLIDER.classList.toggle("drag");
});

SLIDER.addEventListener("mouseout", () => {
    console.log("focused");
    TEST.focus();
});

const setWidth = () => {
    return SLIDER.value + "%";
};

SLIDER.addEventListener("input", () => {
    SLIDER_PSEUDO.style.setProperty("--width", setWidth());
});
