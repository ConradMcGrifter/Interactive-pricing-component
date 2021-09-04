const SLIDER = document.querySelector(".slider");
const TEST = document.querySelector("#focusMe");

SLIDER.addEventListener("focus", () => {
    SLIDER.classList.toggle("drag");
});

SLIDER.addEventListener("mouseout", () => {
    console.log("focused");
    TEST.focus();
});
