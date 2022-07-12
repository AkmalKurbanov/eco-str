$(document).ready(function () {
  $('.accordion__theme').on('click', function () {
    $(this).parent().find('.accordion__content').slideToggle();
    $(this).parent().find('.angle').toggleClass('open');
  });
});