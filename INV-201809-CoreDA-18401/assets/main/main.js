$(function() {
    var flag = false;
    var index = -1;

    $('.section1').on('click', function() {
        if (flag || index === 1) { return; }
        index = 1;
        s1('.item1');
        s1('.item2');
        s1('.item3');
        s1('.item4');

        s2('.item1');
    });

    $('.section2').on('click', function() {
        if (flag || index === 2) { return; }
        index = 2
        golden();
        s1('.item3');
        s1('.item4');

        s2('.item2');
    });

    $('.section3').on('click', function() {
        if (flag || index === 3) { return; }
        index = 3;
        golden();
        s3('.item2');
        s1('.item4');

        s2('.item3');
    });

    $('.section4').on('click', function() {
        if (flag || index === 4) { return; }
        index = 4;
        golden();
        s3('.item2');
        s3('.item3');

        s2('.item4');
    });

    function s1(item) {
        $(item).find('.person1').stop().show();
        $(item).find('.person2').stop().hide();
        $(item).find('.person3').stop().hide();
        $(item).find('.s1').stop().hide();
        $(item).find('.s2').stop().hide();
        $(item).find('.bag').stop().hide();
    }

    function s2(item) {
        flag = true;
        $(item).find('.s1').fadeIn();
        $(item).find('.s2').hide();
        
        $(item).find('.bag').fadeIn(1000, function() {
            $(item).find('.bag').fadeOut();
            $(item).find('.person1').fadeOut();
            $(item).find('.person2').fadeIn(function() {
                flag = false;
            });
        });
    }

    function s3(item) {
        $(item).find('.person1').stop().show();
        $(item).find('.person2').stop().hide();
        $(item).find('.person3').stop().hide();
        $(item).find('.s1').stop().hide();
        $(item).find('.s2').stop().show();
        $(item).find('.bag').stop().hide();
    }

    function golden() {
        $('.item1 .person1').hide();
        $('.item1 .person2').hide();
        $('.item1 .person3').show();
        $('.item1 .s2').show();
    }
});