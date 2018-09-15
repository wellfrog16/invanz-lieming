$(function() {
    setTimeout(() => {
        $('.older').animate({ 'left': '560px'}, 2000);
        $('.bag').animate({ 'height': '12px'}, 2000, function() {
            $('.section1').fadeOut();
            $('.section2').fadeIn();

            setTimeout(() => {
                var t = 500;

                $('.section2 li').each(function(index, item) {
                    setTimeout(function() {
                        $(item).animate({ 'opacity': 1 });
                    }, t * index);        
                });
            }, 1000);

            setTimeout(() => {
                $('.right3').fadeIn();
            }, 3000);
        });
    }, 1000);
});