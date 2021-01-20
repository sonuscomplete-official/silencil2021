jQuery('#educators_list').owlCarousel({
    loop: true,
    margin: 40,
    responsiveClass: true,
     nav: true,
     autoplay:true,
    autoplayTimeout:5000,
    responsive: {
        0: {
            items: 1,
            loop: true,
            nav: true,
           
        },
        600: {
            items: 3,
            loop: true,
            nav: true,
           
        },
        1000: {
            items: 5,
            loop: true,
            nav: true,
           
        }
    }
})