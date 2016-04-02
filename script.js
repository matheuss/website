/**
 * Created by matheus on 4/2/16.
 */

$(function () {
    var soon = $('#soon');
    var strings = ['em breve', 'spoedig', 'pronto', 'скоро', '不久', 'すぐに', 'již brzy', 'primum', 'bald', 'presto'];
    var langs = ['pt', 'nl', 'es', 'ru', 'zh', 'ja', 'cs', 'la', 'de', 'it'];

    strings = strings.map(function (e) {
        var result = e + "<span class='tiny'>";
        result += '(' +  langs.shift() + ')';
        result += "</span>";
        var index = result.indexOf('(');
        return result.slice(0, index) + ' ^500' + result.slice(index);
    });

    for (var i = strings.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = strings[i];
        strings[i] = strings[j];
        strings[j] = temp;
    }

    strings.unshift('soon ^500' + "<span class='tiny'>(en)</span>");

    setTimeout(function () {
        $(soon).typed({
            strings: strings,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 1000,
            loop: true
        });
    }, 1000);

    $(soon).bind('DOMSubtreeModified', function () {
        var text = $(this).text();
        var cursor = $('.typed-cursor');

        if (text.slice(-1) == ' ') {
            if (text != 'em ' && text != 'již ') {
                $(cursor).toggleClass('tiny');

                if (text == '不久 ' || text == 'すぐに ') {
                    $(cursor).toggleClass('asian');
                } else {
                    $(cursor).toggleClass('normal');
                }
            }
        }
    })
});