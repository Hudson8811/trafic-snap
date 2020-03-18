$(document).ready(function () {
    $("input[name='phone']").mask(" +7 (999) 999-99-99");
    autosize($('textarea'));
    var scene = document.getElementById('top-parallax');
    var parallaxInstance = new Parallax(scene);

});
/*var ta = document.querySelector('textarea');
ta.addEventListener('focus', function(){
  autosize(ta);
});
*/
