$(document).ready(function() {
    let currentIndex = 0;
    const cards = $('.slider-card');
    const totalCards = cards.length;

    $('.next').click(function() {
        if (currentIndex < totalCards - 1) {
            currentIndex++;
            updateSlider();
        }
    });

    $('.prev').click(function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    function updateSlider() {
        const offset = -currentIndex * 100 + '%';
        $('.slider-wrapper').css('transform', 'translateX(' + offset + ')');
    }
});