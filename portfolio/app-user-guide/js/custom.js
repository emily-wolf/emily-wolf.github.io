//Sticky nav after scroll
  // When the user scrolls the page, execute scrollStickyNav 
window.onscroll = function() {scrollStickyNav()};

  // Get the navbar
var navbar = $("#topics");

  // Get the offset position of the navbar
var sticky = navbar.offset().top;

  // Get the navbar images
var navicons = $(".nav-icon");

  // Get the navbar text
var navtext = $(".nav-text")

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scrollStickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.addClass("navbar-fixed-top");
    navicons.addClass("shrink-img");
    navtext.addClass("shrink-text");

  } else {
    navbar.removeClass("navbar-fixed-top");
    navicons.removeClass("shrink-img");
    navtext.removeClass("shrink-text");
  }
}

//Scroll to
$('a.scroll').click(function() {
    $('html, body').animate({
        scrollTop: $($(this).attr("href")).offset().top
    }, 1000);
});

//Back to top
$(window).scroll(function() {
    if ($(this).scrollTop() >= 200) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

//Expand images
$(".btn-expand").click(function() {
    var imagetitle = $(this).attr("data-title");
    $("#modal-img-expand-title").html(imagetitle);
    var image = $(this).attr("data-object");
    var imagepath = $(image).attr("src");
    $("#modal-img-expand-body").html("<img src='" + imagepath + "' class='img-responsive center-block'>");
});