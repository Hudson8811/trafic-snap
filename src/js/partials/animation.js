$(document).ready(function() {
    var i = {
        Android: function() {
            return !!navigator.userAgent.match(/Android/i)
        },
        BlackBerry: function() {
            return !!navigator.userAgent.match(/BlackBerry/i)
        },
        iOS: function() {
            return !!navigator.userAgent.match(/iPhone|iPad|iPod/i)
        },
        Windows: function() {
            return !!navigator.userAgent.match(/IEMobile/i)
        },
        any: function() {
            return i.Android() || i.BlackBerry() || i.iOS() || i.Windows()
        }
    };
    if (i.any()) $(".anim").css("opacity", "1");
    else {
        var a = $(window),
            t = $(".anim-container");

        function o() {
            var n = a.scrollTop(),
                i = a.height(),
                o = i / 2;
            t.each(function() {
                var a = $(this),
                    t = a.offset().top,
                    e;
                n > t - i + o && r(a)
            })
        }

        function r(n) {
            var i = 1e3;
            n.not(".was-played") && n.addClass("was-played")
        }
        o(), a.scroll(function() {
            o()
        }), a.resize(function() {
            o()
        })
    }
});