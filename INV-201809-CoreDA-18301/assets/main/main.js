$(function() {
    var tab = $('.box .tab');

    $('.tabs div').each(function(index) {
        $(this).on('click', function() {
            $('.tabs div').removeClass('active').eq(index).addClass('active');
            tab.hide().eq(index).show();

            if (index === 0) {
                $('.tips p').hide();
                $('.tips span').hide();
            }

            if (index === 1) {
                $('.tips p').hide();
                $('.tips span').show();
            }
        })
    });

    $('.tips span').on('click', function () {
        $('.tips span').hide();
        $('.tips p').show();
    });

    setTimeout(function() {
        $('.line1').animate({ 'top': '140px' }, 800);
        $('.line2').animate({ 'top': '180px' }, 800);
    }, 1000);

    //
    // $("#g1").jFlip(293, 255, {background:"grey",cornersTop:false}).
    $("#g1").jFlip(293, 255, { background: 'white', cornersTop:false, gradientColors:['#868686','#ccc','#c2c2c2'], curlSize: 0.2}).
    bind("flip.jflip",function(event,index,total){
        // $("#l1").html("Image "+(index+1)+" of "+total);
        // 9
        if (index === 3) {
            $('.line1').stop().animate({ 'top': '140px' }, 800);
            $('.line2').stop().animate({ 'top': '80px' }, 800);
        }

        if (index === 2) {
            $('.line1').stop().animate({ 'top': '80px' }, 800);
            $('.line2').stop().animate({ 'top': '120px' }, 800);
        }

        if (index === 1) {
            $('.line1').stop().animate({ 'top': '80px' }, 800);
            $('.line2').stop().animate({ 'top': '160px' }, 800);
        }

        if (index === 0) {
            $('.line1').stop().animate({ 'top': '140px' }, 800);
            $('.line2').stop().animate({ 'top': '180px' }, 800);
        }
    });
});