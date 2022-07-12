$(document).ready(function () {
  $('.hamburger').on('click', function () {
    $(this).toggleClass('open');
    $('.menu').toggleClass('open');
    $('body').toggleClass('no-scroll');
  });
  jQuery(function ($) {
    $(document).mouseup(function (e) {
      var div = $(".menu__wrap");
      if (!div.is(e.target) &&
        div.has(e.target).length === 0) {
        $('.menu').removeClass('open');
        $('body').removeClass('no-scroll');
        $('.hamburger').removeClass('open');        
      }
    });
  });
  $('.menu li .angle').on('click', function () {
    $(this).parent().find('ul').slideToggle();
  });
});