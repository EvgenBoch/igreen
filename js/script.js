$(document).ready(function(){

    // Header slider
    $('.presentation__slider').slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.presentation__arrow-left'),
        nextArrow: $('.presentation__arrow-right'),
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    arrows: false,
                }
            },

            {
                breakpoint: 800,
                settings: {
                    arrows: false,
                    autoplay: false,
                }
            }
        ]
    });
})