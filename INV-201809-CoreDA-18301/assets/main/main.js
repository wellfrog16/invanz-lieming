$(function() {
    var tab = $('.box .tab');

    $('.tabs div').each(function(index) {
        $(this).on('click', function() {
            $('.tabs div').removeClass('active').eq(index).addClass('active');
            tab.hide().eq(index).show();
        })
    });

    //
    $("#g1").jFlip(300,300,{background:"grey",cornersTop:false}).
    bind("flip.jflip",function(event,index,total){
        // $("#l1").html("Image "+(index+1)+" of "+total);
    });
});