/**
 * Created by matheus on 4/2/16.
 */

$(function () {
    var soon = $('#soon');
    var strings = ['em breve', 'spoedig', 'pronto', 'скоро', '不久', 'すぐに', 'již brzy', 'primum', 'bald', 'presto',
        'bientôt', 'hamar', 'σύντομα', 'baldaŭ'];
    var langs = ['pt', 'nl', 'es', 'ru', 'zh', 'ja', 'cs', 'la', 'de', 'it', 'fr', 'hu', 'el', 'eo'];

    strings = strings.map(function (e) {
        var result = e + " ^250<span class='tiny'>";
        result += '(' + langs.shift() + ')';
        result += "</span>";
        return result;
    });

    for (var i = strings.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = strings[i];
        strings[i] = strings[j];
        strings[j] = temp;
    }

    strings.unshift('soon ^250' + "<span class='tiny'>(en)</span>");

    $(soon).typed({
        strings: strings,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000,
        loop: true
    });

    $(soon).bind('DOMSubtreeModified', function () {
        var text = $(this).text();
        var cursor = $('.typed-cursor');

        if (text.slice(-1) == ' ') {
            if (text != 'em ' && text != 'již ') {
                $(cursor).toggleClass('tiny');
            }
        }
    })
});