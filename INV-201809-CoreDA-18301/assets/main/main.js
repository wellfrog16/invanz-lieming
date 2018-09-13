$(function() {
    var tab = $('.box .tab');

    $('.tabs div').each(function(index) {
        $(this).on('click', function() {
            $('.tabs div').removeClass('active').eq(index).addClass('active');
            tab.hide().eq(index).show();
        })
    });

    //
    // $("#g1").jFlip(293, 255, {background:"grey",cornersTop:false}).
    $("#g1").jFlip(293, 255, { background: 'white', cornersTop:false, gradientColors:['#868686','#ccc','#c2c2c2'], curlSize: 0.2}).
    bind("flip.jflip",function(event,index,total){
        // $("#l1").html("Image "+(index+1)+" of "+total);
    });
});