$(function() {
    var circle3 = $('.circle3');
    var circle4 = $('.circle4');

    setTimeout(function() {
        circle3.addClass('circle4c');
    }, 1000);

    setTimeout(() => {
        circle4.show().eq(0).addClass('circle4a');
        circle4.show().eq(1).addClass('circle4b');
    }, 2200);

    setTimeout(function() {
        $('.data, .line').fadeIn();
    }, 3500);
});