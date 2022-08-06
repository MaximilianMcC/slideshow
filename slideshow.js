// Send a message to check for if the script is working.
console.log("%c🥳 Slideshow has been enabled", "color: lime; font-weight: bold");


// Make the custom HTML elements
class SlideshowDataElement extends HTMLElement {
    constructor() {
        super();

        // Hide all of the images
        this.style.display = "none";
    }
}

// Make the custom HTML elements
class SlideshowElement extends HTMLElement {
    constructor() {
        super();

        // Add the buttons and image
        this.innerHTML += `<img id="slideshowImage" src="" alt="Loading..."><button id="slideshowLeft">⬅️</button><button id="slideshowRight">➡️</button>`;

        // Get all of the slideshow data
        let index = 0;
        const images = document.querySelectorAll("slide-show-data img");

        // Decrease the index
        this.querySelector("#slideshowLeft").addEventListener("click", () => {
            
            // Get the new index
            let newIndex = index - 1;
            if (newIndex < 0) newIndex = images.length - 1;
            else if (newIndex > images.length - 1) newIndex = 0;
            
            index = newIndex;
            updateImage();
        });

        // Increase the index
        this.querySelector("#slideshowRight").addEventListener("click", () => {

            // Get the new index
            let newIndex = index + 1;
            if (newIndex < 0) newIndex = images.length - 1;
            else if (newIndex > images.length - 1) newIndex = 0;

            index = newIndex;
            updateImage();
        });

        const slideshow = this;
        function updateImage() {
            const image = slideshow.querySelector("#slideshowImage");
            image.setAttribute("src", images[index].getAttribute("src"));
            image.setAttribute("alt", images[index].getAttribute("alt"));
        }

        // Add the first image
        updateImage();
    }
}



// Register the custom HTML
customElements.define("slide-show-data", SlideshowDataElement);
customElements.define("slide-show", SlideshowElement);