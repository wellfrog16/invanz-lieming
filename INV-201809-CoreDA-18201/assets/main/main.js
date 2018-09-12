$(function() {
    var circle = $('.circle4');

    setTimeout(function() {
        circle.eq(0).addClass('circle4a');
        circle.eq(1).addClass('circle4b');
    }, 1000);

    setTimeout(function() {
        $('.data, .line').fadeIn();
    }, 2200);
});