// Select Items
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

slides.forEach(function(slide,index) {
    slide.style.left = `${index * 100}%`;

});

let counter = 0;

// Set Up Event Listeners
nextBtn.addEventListener('click',function() {
    counter++;
    carousel();
});

prevBtn.addEventListener('click',function() {
    counter--;
    carousel();
});

// Function to Provide Carousel
function carousel() {
    slides.forEach(function(slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}

