function toggleSearchOverlay() {
    var overlay = document.getElementById('search-overlay');
    overlay.style.display = (overlay.style.display === 'none' || overlay.style.display === '') ? 'flex' : 'none';
}
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');

    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${100 * (i - index)}%)`;
        });
    }

    document.querySelector('.prev-slide').addEventListener('click', function() {
        currentSlide = Math.max(currentSlide - 1, 0);
        showSlide(currentSlide);
    });

    document.querySelector('.next-slide').addEventListener('click', function() {
        currentSlide = Math.min(currentSlide + 1, slides.length - 1);
        showSlide(currentSlide);
    });
});

