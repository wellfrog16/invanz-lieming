$(function() {
    var flag = false;
    var index = 0;

    // s2('.item1');

    $('.section1').on('click', function() {
        if (flag || index === 1) { return; }
        index = 1;
        s1('.item1');
        s1('.item2');
        s1('.item3');
        s1('.item4');

        s2('.item1');
        $('.bag').show();
        $('.bag').eq(0).hide();
    });

    $('.section2').on('click', function() {
        if (flag || index === 2) { return; }
        index = 2
        golden();
        s1('.item3');
        s1('.item4');

        s2('.item2');
        $('.bag').show();
        $('.bag').eq(0).hide();
        $('.bag').eq(1).hide();
    });

    $('.section3').on('click', function() {
        if (flag || index === 3) { return; }
        index = 3;
        golden();
        s3('.item2');
        s1('.item4');

        s2('.item3');
        $('.bag').show();
        $('.bag').eq(0).hide();
        $('.bag').eq(2).hide();
    });

    $('.section4').on('click', function() {
        if (flag || index === 4) { return; }
        index = 4;
        golden();
        s3('.item2');
        s3('.item3');

        s2('.item4');
        $('.bag').show();
        $('.bag').eq(0).hide();
        $('.bag').eq(3).hide();
    });

    function s1(item) {
        $(item).find('.person1').stop().show();
        $(item).find('.person2').stop().hide();
        $(item).find('.person3').stop().hide();
        $(item).find('.s0').hide();
        $(item).find('.s1').stop().hide();
        $(item).find('.s2').stop().hide();
    }

    function s2(item) {
        flag = true;
        $(item).find('.s1').fadeIn(1000);
        $(item).find('.s2').hide();
        
        $(item).find('.person1').fadeOut();
        $(item).find('.person2').fadeIn(function() {
            flag = false;
        });
    }

    function s3(item) {
        $(item).find('.person1').stop().show();
        $(item).find('.person2').stop().hide();
        $(item).find('.person3').stop().hide();
        $(item).find('.s1').stop().hide();
        $(item).find('.s2').stop().show();
    }

    function golden() {
        $('.item1 .person1').hide();
        $('.item1 .person2').hide();
        $('.item1 .person3').show();
        $('.item1 .s0').hide();
        $('.item1 .s1').hide();
        $('.item1 .s2').show();
    }
});