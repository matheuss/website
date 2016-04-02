/**
 * Created by matheus on 4/2/16.
 */

$(function () {
    var soon = $('#soon');
    var strings = ['em breve', 'spoedig', 'pronto', 'скоро', '不久', 'すぐに', 'již brzy', 'primum', 'bald', 'presto'];

    for (var i = strings.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = strings[i];
        strings[i] = strings[j];
        strings[j] = temp;
    }

    strings.unshift('soon');

    strings = strings.map(function (e) {
        return e + " ^1000"
    });

    setTimeout(function () {
        $(soon).typed({
            strings: strings,
            typeSpeed: 75,
            backSpeed: 25,
            loop: true
        });
    }, 1000);
});