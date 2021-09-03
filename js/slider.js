const SLIDER = document.querySelector(".slider");
const TEST = document.querySelector("#test");

SLIDER.addEventListener("focus", () => {
    SLIDER.classList.toggle("drag");
});

SLIDER.addEventListener("mouseout", () => {
    console.log("focused");
    TEST.focus();
});
