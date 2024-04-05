// Define the current slide index
let currentSlideIndex = 0;

// Initialize the gallery
function initGallery() {
    const slides = document.getElementsByClassName("gallery-image");
    // Initially hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // Show the first slide
    if(slides.length > 0) {
        slides[currentSlideIndex].style.display = "block";
    }
    updateDots(currentSlideIndex);
    updateArrows(); // Call updateArrows here
}

// Update the navigation dots based on the active slide
function updateDots(activeIndex) {
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (dots.length > 0) {
        dots[activeIndex].className += " active";
    }
}

// Show a specific slide
function showSlide(n) {
    const slides = document.getElementsByClassName("gallery-image");
    if (n >= slides.length) { n = 0; }
    if (n < 0) { n = slides.length - 1; }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[n].style.display = "block";
    currentSlideIndex = n;
    updateDots(n);
    updateArrows(); // Call updateArrows every time a slide is shown
}

// Move to the next or previous slide
function moveSlide(n) {
    let newIndex = currentSlideIndex + n;
    showSlide(newIndex);
}

// Move to a slide selected via dots
function currentSlide(n) {
    showSlide(n);
}

// New function to update the visibility of arrows based on slide position
function updateArrows() {
    const slides = document.getElementsByClassName("gallery-image");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    // Hide left arrow if on the first slide, otherwise show it
    leftArrow.style.display = currentSlideIndex === 0 ? "none" : "block";
    
    // Hide right arrow if on the last slide, otherwise show it
    rightArrow.style.display = currentSlideIndex === slides.length - 1 ? "none" : "block";
}

// Attach the initGallery function to window's load event
window.addEventListener('load', initGallery);
