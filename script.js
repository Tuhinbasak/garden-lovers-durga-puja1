let currentSlide = 0; // Initialize the current slide index
const slides = document.querySelectorAll('.slide'); // Select all slide elements
const totalSlides = slides.length; // Get the total number of slides

// Function to show the current slide
function showSlide(index) {
    // Loop through all slides and toggle active class
    slides.forEach((slide, i) => {
        slide.classList.toggle('slide-active', i === index); // Add 'slide-active' to the current slide
        slide.style.zIndex = i === index ? 1 : -1; // Ensure correct stacking of slides
    });
}

// Function to go to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // Cycle to the next slide, loop back if last slide
    showSlide(currentSlide);
}

// Function to go to the previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Cycle to the previous slide, loop back if first
    showSlide(currentSlide);
}

// Event listeners for buttons
document.getElementById('next').addEventListener('click', nextSlide);
document.getElementById('prev').addEventListener('click', prevSlide);

// Initialize the first slide
showSlide(currentSlide);

// Auto Slide Feature (Optional)
let autoSlide = setInterval(nextSlide, 5000); // Automatically move to the next slide every 5 seconds

// Stop auto sliding when a button is clicked
document.getElementById('next').addEventListener('click', () => {
    clearInterval(autoSlide); // Stop auto slide on user interaction
    autoSlide = setInterval(nextSlide, 5000); // Restart auto slide after user interaction
});
document.getElementById('prev').addEventListener('click', () => {
    clearInterval(autoSlide); // Stop auto slide on user interaction
    autoSlide = setInterval(nextSlide, 5000); // Restart auto slide after user interaction
});
