let currentIndex = {};

function moveSlide(carouselId, direction) {
    const carousel = document.getElementById(carouselId);
    const slides = carousel.querySelectorAll('img');
    const totalSlides = slides.length;
    const slideWidth = slides[0].clientWidth;

    // Inicializar el índice si no existe aún
    if (!currentIndex[carouselId]) {
        currentIndex[carouselId] = 0;
    }

    // Actualizar el índice
    currentIndex[carouselId] += direction;

    // Volver al principio si pasamos el último slide
    if (currentIndex[carouselId] >= totalSlides) {
        currentIndex[carouselId] = 0;
    }

    // Volver al último slide si estamos en el primero y presionamos "prev"
    if (currentIndex[carouselId] < 0) {
        currentIndex[carouselId] = totalSlides - 1;
    }

    // Mover el carrusel
    const offset = -slideWidth * currentIndex[carouselId];
    carousel.style.transform = `translateX(${offset}px)`;
    carousel.style.transition = 'transform 0.5s ease';
}