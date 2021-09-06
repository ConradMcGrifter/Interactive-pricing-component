import { SLIDER } from "./slider.js";
export const SWITCH_CHECKBOX = document.querySelector("#switch");

export const viewsPrice = () => {
    const PAGEVIEWS = document.querySelector(".pageviews");
    const PRICE = document.querySelector(".price");

    let x = SLIDER.value;

    switch (x) {
        case "0":
            PAGEVIEWS.innerText = "10K PAGEVIEWS";

            if (SWITCH_CHECKBOX.checked) {
                PRICE.innerHTML = "$6.00 <span>/ month</span>";
            } else {
                PRICE.innerHTML = "$8.00 <span>/ month</span>";
            }

            break;

        case "1":
            PAGEVIEWS.innerText = "50K PAGEVIEWS";

            if (SWITCH_CHECKBOX.checked) {
                PRICE.innerHTML = "$9.00 <span>/ month</span>";
            } else {
                PRICE.innerHTML = "$12.00 <span>/ month</span>";
            }

            break;

        case "2":
            PAGEVIEWS.innerText = "100K PAGEVIEWS";

            if (SWITCH_CHECKBOX.checked) {
                PRICE.innerHTML = "$12.00 <span>/ month</span>";
            } else {
                PRICE.innerHTML = "$16.00 <span>/ month</span>";
            }

            break;

        case "3":
            PAGEVIEWS.innerText = "500K PAGEVIEWS";

            if (SWITCH_CHECKBOX.checked) {
                PRICE.innerHTML = "$18.00 <span>/ month</span>";
            } else {
                PRICE.innerHTML = "$24.00 <span>/ month</span>";
            }

            break;

        case "4":
            PAGEVIEWS.innerText = "1M PAGEVIEWS";

            if (SWITCH_CHECKBOX.checked) {
                PRICE.innerHTML = "$27.00 <span>/ month</span>";
            } else {
                PRICE.innerHTML = "$36.00 <span>/ month</span>";
            }
    }
};

// when the switch is toggled, evaluate the price to be displayed
SWITCH_CHECKBOX.addEventListener("change", () => {
    viewsPrice();
});
