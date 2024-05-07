var slideIndex = 0;
showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("slide");
  
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].style.transform = "scale(1)"; // Reset scale for all slides
  }
  
  slideIndex++;
  
  if (slideIndex > slides.length) { 
    slideIndex = 1;
  }    
  
  var currentSlide = slides[slideIndex - 1];
  currentSlide.style.display = "block";
  
  // Zoom in animation
  currentSlide.style.transform = "scale(1.1)"; // Zoom in to 110% of original size
  
  // Delay for 0.5 seconds to show zoomed-in image
  setTimeout(function() {
    // Zoom out animation
    currentSlide.style.transition = "transform 3s cubic-bezier(0.22, 0.61, 0.36, 1)"; // Smooth zoom out transition
    currentSlide.style.transform = "scale(1)"; // Zoom out to original size
  }, 500); // Start zoom out animation after 0.5 second
  
  // Change slide after zoom out animation
  currentSlide.addEventListener("transitionend", function() {
    // Change slide immediately after transition ends
    setTimeout(showSlides, 0); // Change image immediately
  });
}



document.addEventListener("DOMContentLoaded", function() {
    // Trigger zooming animation for images in the zooming-images-section
    var slides = document.querySelectorAll(".zooming-images-section .slide");
  
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
  