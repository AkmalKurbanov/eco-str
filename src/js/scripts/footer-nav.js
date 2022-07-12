$(document).ready(function () {
  $('.footer__title').on('click', function () {
    $(this).parent().find('ul').slideToggle();
    $(this).find('.angle').toggleClass('open');
  });
});