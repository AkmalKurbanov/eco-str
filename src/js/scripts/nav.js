$(document).ready(function () {
  $(".nav__item a").mouseover(function () {
    $(this).parent().find('ul').addClass('open');
  });
  $('.nav__item-dropdown-close').on('click', function () {
    $(this).parent().removeClass('open');
  });

  jQuery(function ($) {
    $(document).mouseup(function (e) {
      var div = $(".nav__item-dropdown");
      if (!div.is(e.target) &&
        div.has(e.target).length === 0) {
        $('.nav__item-dropdown').removeClass('open');
      }
    });
  });
});