$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        appendArrows:$('.arrows'),
        adaptiveHeight:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centereMode: true,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 1000,
        cssEase: 'linear',
        pauseOnFocuse: true,
        veriableWidth:true,
    });
});

$(document).ready(function(){
    $('.header__burger').click(function(){
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});