$(document).ready(function () {
  $("input[name='phone']").mask(" +7 (999) 999-99-99");
  autosize($('textarea'));

  $(window).scroll(function () {

    var ws = $(window).scrollTop();


    $('#parallax-1-layer-3').css({
      'transform': `translate(0px, -${ws / 4}px)`
    });

    $('#parallax-1-layer-2').css({
      'transform': `translate(0px, -${ws / 2}px)`
    });

    $('#parallax-1-layer-1').css({
      'transform': `translate(0px, -${ws / 1}px)`
    });

  });

  $('.js-button-animation').hover(
    function () {
      $(this).css("background-color", "yellow");
    }, function () {
      $(this).css("background-color", "pink");
    }
  );
});
/*var ta = document.querySelector('textarea');
ta.addEventListener('focus', function(){
  autosize(ta);
});
*/
