$(document).ready(function () {

  let menuSlide = true;
  $("#slideTopMenu").on('click', function () {
    if (menuSlide) {
      $('.top-header').css('top','0');
      menuSlide = false;
    } else {
      $('.top-header').css('top','-20.5rem');
      menuSlide = true;
    }
  });
});
