$(function() {
    var tips = [
        'γ 仅指β-内酰胺酶阴性菌株',
        'α 仅指对青霉素敏感菌株；β 仅指对甲氧西林敏感菌株'
        // '*对甲氧西林耐药的葡萄球菌和肠球菌属对怡万之®（厄他培南）耐药<br>α 仅指对青霉素敏感菌株；β 仅指对甲氧西林敏感菌株'
    ]

    var timer = null;

    $('.buttons li').each(function(index) {
        $(this).on('click', function() {
            reset();

            //
            $('.buttons li').removeClass('active').eq(index).addClass('active');
            if (index === 0) {
                $('.type-a').show();
                $('.type-b').hide();
            } else {
                $('.type-a').hide();
                $('.type-b').show();
            }
        });
    });

    $('.small-box').each(function(index) {
        $(this).on('click', function() {
            reset();

            //
            $(this).animate({ 'width': 347, 'height': 108, 'top': 213, 'right': 297 });

            var self = this;
            timer = setTimeout(function() {
                $(self).find('img').animate({ 'width': 235, 'height': 235, 'top': -200 }, function() {
                    $('.texts li').eq(index).addClass('active').animate({ 'opacity': 1 });
                    $('.tips').html(index <= 1 ? tips[index] : '');
                });
                
                $(self).find('.lens').fadeOut();
                $('.microscope').fadeOut();
            }, 1000);
        });
    });

    function reset() {
        clearTimeout(timer);
        $('.small-box').stop();
        $('.small-box').removeAttr('style');
        $('.small-box img').removeAttr('style');
        $('.lens').show();
        $('.microscope').show();
        $('.texts li').removeClass('active').css('opacity', 0);
        $('.tips').html('');
    }
});