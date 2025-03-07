$(document).ready(function(){

    // Header slider
    $('.home__slider').slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.home__arrow-left'),
        nextArrow: $('.home__arrow-right'),
        //autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    arrows: false
                }
            }
        ]
    });
})