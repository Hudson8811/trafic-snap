$(document).ready(function () {
  $("input[name='phone']").mask(" +7 (999) 999-99-99");
  autosize($('textarea'));

  $(window).scroll(function () {

    var ws = $(window).scrollTop();

    $('#layer4').css({
      'transform': `translate(0px, -${ws / 1.2}px)`
    });

    $('#layer3').css({
      'transform': `translate(0px, -${ws / 2}px)`
    });

    $('#layer2').css({
      'transform': `translate(0px, -${ws / 3}px)`
    });

    $('#layer1').css({
      'transform': `translate(0px, -${ws / 4}px)`
    });

  });
});
/*var ta = document.querySelector('textarea');
ta.addEventListener('focus', function(){
  autosize(ta);
});
*/
