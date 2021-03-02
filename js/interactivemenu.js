

$(function() {
    let about = $('#aboutid').offset().top,
        portfolio = $('#portfolioid').offset().top,
        contact = $('#contactid').offset().top;

    window.addEventListener('resize', function(){
        let about1 = $('#aboutid').offset().top,
        portfolio1 = $('#portfolioid').offset().top,
        contact1 = $('#contactid').offset().top;

        about = about1;
        portfolio = portfolio1;
        contact = contact1;
    });

    $('#about-link').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: about - 49
        }, 600);
    });

    $('#portfolio-link').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: portfolio - 49
        }, 600);
    });

    $('#contact-link').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contact - 49
        }, 600);
    });
});