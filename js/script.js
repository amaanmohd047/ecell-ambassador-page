const slider = document.querySelector(".slider");
const slide = document.querySelector(".slide");

let slidePosition = 0;
const totalSlides = slider.children.length;
const slideWidth = slide.offsetWidth;

function slideNext() {
  slidePosition -= slideWidth;
  if (slidePosition < -((totalSlides - 1) * slideWidth)) {
    slidePosition = 0;
  }
  slider.style.transform = `translateX(${slidePosition}px)`;
}

function autoSlide() {
  slideNext();
}

const slideInterval = setInterval(autoSlide, 5000);

// Stop automatic sliding on mouseenter
slider.addEventListener("mouseenter", function () {
  clearInterval(slideInterval);
});

slider.addEventListener("mouseleave", function () {
  slideInterval = setInterval(autoSlide, 5000);
});
