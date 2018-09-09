$(function() {
    var photos = $('.photo div');
    var t = 500;


    photos.each(function(index, item) {
        setTimeout(function() {
            $(item).animate({ 'opacity': 1 }, function() {
                $(this).find('span').addClass('show');
            });
        }, t * index);        
    });
});