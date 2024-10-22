// Lógica en JavaScript para controlar el carrusel
let currentSlide = 0;
const totalSlides = document.querySelectorAll('.carousel-item').length;
const carouselGroup = document.getElementById('carousel-group');

// Lógica para el botón "prev"
document.getElementById('prev').addEventListener('click', function () {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Ir a la diapositiva anterior
  carouselGroup.style.transform = `translateX(-${currentSlide * (100 / totalSlides)}%)`;
});

// Lógica para el botón "next"
document.getElementById('next').addEventListener('click', function () {
  currentSlide = (currentSlide + 1) % totalSlides; // Ir a la siguiente diapositiva
  carouselGroup.style.transform = `translateX(-${currentSlide * (100 / totalSlides)}%)`;
});
