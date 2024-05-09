var slideIndex = 0;
var transitionDuration = 3000; // Adjust this value for transition duration in milliseconds

// Start slideshow
showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("slide");
  
  // Hide all slides and remove the .active class
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    slides[i].style.display = "none";
    slides[i].style.transform = "scale(1)";
  }
  
  // Increment slideIndex
  slideIndex++;
  
  // Reset slideIndex if it exceeds the length of slides
  if (slideIndex > slides.length) { 
    slideIndex = 1;
  }
  
  // Get the current slide based on slideIndex
  var currentSlide = slides[slideIndex - 1];
  
  // Display the current slide and add the .active class
  currentSlide.style.display = "block";
  currentSlide.classList.add("active");
  
  // Zoom in animation
  currentSlide.style.transform = "scale(1.1)";
  
  // Delay for 0.5 seconds to show zoomed-in image
  setTimeout(function() {
    // Zoom out animation
    currentSlide.style.transition = "transform " + transitionDuration/1000 + "s cubic-bezier(0.22, 0.61, 0.36, 1)";
    currentSlide.style.transform = "scale(1)";
    
    // Call animateText for text animation
    var text = currentSlide.querySelector(".text");
    animateText(text);
    
    // Call showSlides recursively after transition duration
    setTimeout(showSlides, transitionDuration);
  }, 500); // Start zoom out animation after 0.5 second
}

// Function to animate text
function animateText(text) {
  text.style.top = "100%"; // Initially position the text below the slide
  text.style.opacity = "0"; // Initially hide the text

  // Animate text appearance
  setTimeout(function () {
    text.style.transition = "top 2s ease, opacity 2s ease";
    text.style.top = "50%"; // Move the text to the center
    text.style.opacity = "1"; // Make the text visible
  }, 1000); // Start text animation after 1 second

  // Animate text disappearance
  setTimeout(function () {
    text.style.transition = "top 2s ease, opacity 2s ease";
    text.style.top = "0%"; // Move the text up to the top
    text.style.opacity = "0"; // Hide the text
  }, 2400); // Start text animation after 5 seconds
}
document.addEventListener("DOMContentLoaded", function() {
  var imageContainer = document.querySelector(".full-width-section .image-container");
  var blackSquare = imageContainer.querySelector(".black-square");

  // Create an intersection observer instance
  var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      // Check if the black square is intersecting the viewport
      if (entry.isIntersecting) {
        blackSquare.classList.add("show"); // Trigger the animation
        observer.unobserve(blackSquare); // Stop observing once animation is triggered
      }
    });
  });

  // Start observing the black square
  observer.observe(blackSquare);
});


// Create an intersection observer instance
var observer = new IntersectionObserver(function(entries, observer) {
  // Iterate over the observed entries
  entries.forEach(function(entry) {
    // Check if the entry is intersecting (i.e., visible)
    if (entry.isIntersecting || entry.intersectionRatio > 0) {
      // Add a class to trigger the animation
      entry.target.classList.add('reveal-animation');
      
      // Stop observing this entry
      observer.unobserve(entry.target);
      
      // Set flag to indicate image has been loaded (optional)
      localStorage.setItem('imageLoaded', true);
    }
  });
}, { threshold: 0 }); // Trigger when any part of the image is visible

// Select the images to observe
var images = document.querySelectorAll('.column img');

// Start observing each image
images.forEach(function(image) {
  observer.observe(image);
});
document.addEventListener("DOMContentLoaded", function() {
  var imageContainer = document.querySelector(".full-width-section .image-container");
  var blackSquare = imageContainer.querySelector(".black-square");

  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function showBlackSquare() {
    if (isInViewport(imageContainer)) {
      blackSquare.classList.add("show");
    }
  }

  showBlackSquare();

  window.addEventListener("scroll", showBlackSquare);
});




document.addEventListener("DOMContentLoaded", function() {
    // Trigger zooming animation for images in the zooming-images-section
    var slides = document.querySelectorAll(".zooming-images-section ");
  
    slides.forEach(function(slide) {
      slide.addEventListener("mouseenter", function() {
        this.querySelector("img").classList.add("animate");
      });
  
      slide.addEventListener("mouseleave", function() {
        this.querySelector("img").classList.remove("animate");
      });
    });
  
    // Trigger animation for revealing the black square in full-width-section
    var imageContainer = document.querySelector(".full-width-section .image-container");
    var blackSquare = document.querySelector(".full-width-section .black-square");
    var image = imageContainer.querySelector("img");
  
    image.onload = function() {
      var rect = image.getBoundingClientRect();
      var windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
      if (rect.top < windowHeight) {
        image.classList.add("animate");
        setTimeout(function() {
          blackSquare.style.display = "block";
        }, 1000); // Adjust delay as needed to match the duration of the zoom-out animation
      }
    };
  });

  document.addEventListener("DOMContentLoaded", function() {
    var hamburger = document.querySelector(".hamburger");
    var navbarMobile = document.querySelector(".navbar-mobile");
  
    hamburger.addEventListener("click", function() {
      navbarMobile.classList.toggle("active");
    });
  });
  