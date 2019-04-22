$( function() {
    $( "#tabs" ).tabs();

    $(document).ready(function(){
        $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        });
    });
});
        
