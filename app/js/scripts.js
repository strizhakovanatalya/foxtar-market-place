$( function() {
    $( "#tabs" ).tabs();
    $( "#product-details-tabs" ).tabs();

    $(document).ready(function(){
        $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,

        responsive: [{
            breakpoint: 1440,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 780,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]

        });
    });
    $('#menu').slicknav({
        appendTo: '#header .header_menu',
        label: ''
    });
});

$(function () {
    $('#menu').slicknav({
        appendTo: '#header .header_menu',
        label: ''
    });
});
        
