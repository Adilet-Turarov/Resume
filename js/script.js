$(document).ready(function(){
    $('ul.menu a[href^="#"').on('click', function(){
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 600);
        $('ul.menu a[href^="#"').css({'color': 'white'})
        $(this).css({'color':''})
        return false
    });

    $(window).scroll(function (){
        if($(this).scrollTop() !=0)
            $('.toTop').fadeIn();
        else
            $('.toTop').fadeOut();
    });
    $('.toTop').on('click', function(){
        $('html, body').animate({
            scrollTop:0
        }, 600);
    })


})