
function displayConditions() {
  var duration = 200; //'slow'

  $('.cond-block-item').each(function () {
    var tthis = $(this);
    setTimeout(function () {
      tthis.addClass('cond-block-item-visible');
    }, duration * tthis.index());

  });
}

var prevBtnAnim = 0;
var conditionsDisplay = 0;
$(document).ready(function () {
  $("input[name='phone']").mask(" +7 (999) 999-99-99");

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


    ///////////////////////////////////////////////
    if ($(window).width() >= '996') {

      var gifOffset = $('.what-we-can-section').position().top;
      $('.js-wwcs-item-gif-parallax').each(function () {

        var ttgif = (ws - gifOffset - $(this).parent().index() * $(this).parent().height()) / 5;
        ttgif = ttgif <= 170 ? ttgif : 170;
        $(this).css({
          'transform': `translate(0px, -${ttgif}px)`
        });
      });
    }
    else{
      $('.js-wwcs-item-gif-parallax').each(function () {
        console.log($(this).position().top);
        $(this).css({
          'transform': `translate(0px, 0px)`
        });
      });
    }

/*
    var gifOffset = $('.what-we-can-section').position().top;
    $('.js-wwcs-item-gif-parallax').each(function () {

      var ttgif = (ws - gifOffset - $(this).parent().index() * $(this).parent().height()) / 5;
      ttgif = ttgif <= 170 ? ttgif : 170;
      $(this).css({
        'transform': `translate(0px, -${ttgif}px)`
      });
    }); */
    ////////////////////////////////

    var earth = $('.js-earth-anim');
    var earthOffset = $('.absns-block-left').position().top;
    var ttearth = (ws - earthOffset + 300) / 8;
    earth.css({
      'transform': `translate(0px, -${ttearth}px)`
    });

    ////////////////////////////////

    var condOffset = $('.conditions-section').position().top;
    if (conditionsDisplay === 0) {
      if (ws >= condOffset - 500) {
        conditionsDisplay = 1;
        displayConditions();
      }
    }
  });

  $('.js-button-animation').hover(
    function () {
      var par = $(this).parent();
      par.removeClass('button-animation-1').removeClass('button-animation-2').removeClass('button-animation-3');
      var random = Math.floor(Math.random() * Math.floor(3)) + 1; //1, 2 или 3
      random = random !== prevBtnAnim ? random : (Math.floor(Math.random() * Math.floor(3)) + 1);
      prevBtnAnim = random;
      par.addClass('button-animation-' + random);
      setTimeout(function () {
        par.addClass('button-animation-visible');
      }, 50);

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
