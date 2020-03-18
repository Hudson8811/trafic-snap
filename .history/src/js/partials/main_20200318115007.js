var prevBtnAnim=0;
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
      var par=$(this).parent();
      par.removeClass('button-animation-1').removeClass('button-animation-2').removeClass('button-animation-3');
      var random=Math.floor(Math.random() * Math.floor(3))+1; //1, 2 или 3
      random=random!==prevBtnAnim?random:(Math.floor(Math.random() * Math.floor(3))+1);
      prevBtnAnim=random;
      par.addClass('button-animation-'+random);
      setTimeout(function(){par.addClass('button-animation-visible');
      }, 10);

    }, function () {
      $(this).parent().removeClass('button-animation-visible');
    }
  );
});
/*var ta = document.querySelector('textarea');
ta.addEventListener('focus', function(){
  autosize(ta);
});
*/
