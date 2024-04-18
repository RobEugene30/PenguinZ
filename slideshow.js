let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Automatic slideshow
function autoSlides() {
  plusSlides(1); // Move to the next slide
}

// Set interval for automatic slideshow (change the interval time as needed)
let slideInterval = setInterval(autoSlides, 3000); // Change slides every 3 seconds (3000 milliseconds)

// Pause the slideshow when the user hovers over the slideshow container
let slideshowContainer = document.querySelector('.slideshow-container');
slideshowContainer.addEventListener('mouseenter', function() {
  clearInterval(slideInterval); // Pause the slideshow
});

// Resume the slideshow when the user moves the mouse out of the slideshow container
slideshowContainer.addEventListener('mouseleave', function() {
  slideInterval = setInterval(autoSlides, 3000); // Resume the slideshow
});

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
}
