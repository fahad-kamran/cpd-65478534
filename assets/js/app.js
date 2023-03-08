$(document).ready(function () {
    // target owl-carousel class/id name and start
    $('.related-journal-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            992: {
                items: 6
            }
        },
    })
})