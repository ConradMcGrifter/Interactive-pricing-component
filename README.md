# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the app depending on their device's screen size
-   See hover states for all interactive elements on the page
-   Use the slider and toggle to see prices for different page view numbers

### Screenshot

![](./finalScreenshot.png)

### Links

-   Live Site URL: [Link](https://conradmcgrifter.github.io/Interactive-pricing-component/)

## My process

### Built with

-   Semantic HTML5 markup
-   Mobile-first workflow

### What I learned

```css
 > .slider {
        width: 100%;
        //  🔻🔻🔻  these styles are what makes the progress bar work on chrome ⚠
        -webkit-appearance: none;
        height: 0.9rem;
        background: color(neutral-empty-slider-bar);
        background-image: linear-gradient(color(primary-soft-cyan), color(primary-soft-cyan));
        background-repeat: no-repeat;
        background-size: 50% 100%;
        border-radius: 999px;
        // 🔺🔺🔺
```

```js
// calculate the width of the background-image based on the value of the input range
const setWidth = () => {
    return SLIDER.value * 25 + "%";
};

// when the input range is changed, calculate the size of the background-image and evaluate what the pageviews and price text should be
SLIDER.addEventListener("input", () => {
    SLIDER.style.backgroundSize = setWidth() + " 100%";
    viewsPrice();
});
```

### Useful resources

-   [styling range input progress](https://stackoverflow.com/questions/18389224/how-to-style-html5-range-input-to-have-different-color-before-and-after-slider)
-   [style lower and upper fill](https://stackoverflow.com/questions/28283332/style-lower-and-upper-fill-in-html5-range-input)
-   [styling input type range in chrome and firefox](https://coderwall.com/p/rw6i0q/styling-input-type-range-in-chrome-and-firefox)
-   [w3 schools - custom range sliders](https://www.w3schools.com/howto/howto_js_rangeslider.asp)
-   [css tricks](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)
-   [how to style input type range in chrome, firefox and IE](https://brennaobrien.com/blog/2014/05/style-input-type-range-in-every-browser.html)
-   [youtube video how to style range input](https://www.youtube.com/watch?v=BrpiNUf2XCk)

-   [how to style pseudo elements with css custom properties](https://css-irl.info/quick-tip-style-pseudo-elements-with-javascript-using-custom-properties/) this is how i did
-   [codepen range input](https://codepen.io/tippingpointdev/pen/bGgLqLY)
