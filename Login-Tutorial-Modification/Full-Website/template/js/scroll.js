// scroll for translucent navbar
$(document).ready(function() {
  $(window).on('scroll', function() {
    if (Math.round($(window).scrollTop()) > 1) {
      $('.navbar').addClass('scrolled');
    } else {
      $('.navbar').removeClass('scrolled');
    }
  });
});
