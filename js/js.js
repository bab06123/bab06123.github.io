function j_test(n){
    $('html, body').stop().animate({
        scrollTop : $('section span.about').eq(n).offset().top
    });
}