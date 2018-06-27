$(document).ready (function() {
    //Scroll to
    $('a.scroll').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 1000);
        return false;
    });

    //Back to top
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 200) {     // If page is scrolled more than 200px
            $('#back-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#back-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#back-to-top').click(function() {      // When arrow is clicked
        $('html, body').animate({
            scrollTop : 0                     // Scroll to top of body
        }, 500);
    });
});