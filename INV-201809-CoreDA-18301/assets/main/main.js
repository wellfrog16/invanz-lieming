$(function() {
    var tab = $('.box .tab');

    $('.tabs div').each(function(index) {
        $(this).on('click', function() {
            $('.tabs div').removeClass('active').eq(index).addClass('active');
            tab.hide().eq(index).show();
        })
    });
});