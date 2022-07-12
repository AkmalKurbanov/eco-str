$(document).ready(function () {
  $('.review-js').on('click', function () {
    $('.review').addClass('open');
    $('body').addClass('no-scroll');
  });
  $('.review .close').on('click', function () {
    $('.review').removeClass('open');
  });
  jQuery(function ($) {
    $(document).mouseup(function (e) {
      var div = $(".review__window");
      if (!div.is(e.target) &&
        div.has(e.target).length === 0) {
        $('.review').removeClass('open');
        $('body').removeClass('no-scroll');
      }
    });
  });
});