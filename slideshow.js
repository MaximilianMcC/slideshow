console.log("Slideshow");

// Make the custom HTML elements
class SlideshowElement extends HTMLElement {
    constructor() {
        super();


        // Add the buttons and image
        this.innerHTML = `
        <img src="" alt="">
        <button id="slideshowLeft">⬅️</button>
        <button id="slideshowRight">➡️</button>
        `;
    }
}


// Make the custom HTML elements
class SlideshowDataElement extends HTMLElement {
    constructor() {
        super();

        // Hide all of the images
        this.style.display = "none";
    }
}

// Register the custom HTML
customElements.define("slide-show", SlideshowElement);
customElements.define("slide-show-data", SlideshowDataElement);