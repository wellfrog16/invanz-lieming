function dragPhone(obj,obj2) {
    var y = 0;
    var percent = 0;
    var tapY=0

    obj[0].addEventListener('touchstart', fnStart, false);

    function fnStart(e) {
        var axis = obj.data("axis");
        var disY = e.targetTouches[0].pageY - y;
        var id = e.targetTouches[0].identifier;
        obj[0].style.WebkitTransition='none';
        function fnMove(e) {
            if (e.targetTouches[0].identifier == id) {
                y = e.targetTouches[0].pageY - disY;

                if (obj.hasClass('bar')) {
                	console.log(1);
                    y = parseInt((y <= 0 && '0') || (y >= axis && axis) || y);
                    tapY=(y / 400) * (obj2.height() + $('.text').height() + 100);
				}else{
                    y = parseInt((y <= -1046 && '-1046') || (y >= axis && axis) || (y >= 0 && '0') || y);
                    tapY=(y / 1370) * (obj2.height() + 80);
				}



                obj.css({
                    'transform': 'translate3d(0,' + y + 'px,0)',
                    '-webkit-transform': 'translate3d(0,' + y + 'px,0)'
                });

                obj2.css({'margin-top':-tapY});
            }
        }

        function fnEnd(e) {
            if (e.changedTouches[0].identifier == id) {
                document.removeEventListener('touchmove', fnMove, false);
                document.removeEventListener('touchend', fnEnd, false);
                obj[0].style.WebkitTransition='.6s all ease';
            }
        }
        document.addEventListener('touchmove', fnMove, false);
        document.addEventListener('touchend', fnEnd, false);
        e.cancelBubble=true;
        e.preventDefault();
    }

}

function nextBg(obj,option){
	var option = option || {};
	var toRightFn=option.toRightFn || '';
	var toLeftFn=option.toLeftFn || '';
	var toUpFn=option.toUpFn || '';
	var toDownFn=option.toDownFn || '';


	obj.addEventListener('touchstart',function(e){
		var time=0;
		var timer=null;

		timer=setInterval(function (){
			time++;
		},1000);

		var X=e.targetTouches[0].pageX;
		var Y=e.targetTouches[0].pageY;

		var x=e.targetTouches[0].pageX;
		var y=e.targetTouches[0].pageY;

		var id=e.targetTouches[0].identifier;  function fnMove(e){

			//e.preventDefault();

			if(e.targetTouches[0].identifier==id){
				y=e.targetTouches[0].pageY;
				x=e.targetTouches[0].pageX;
			}
		}
		function fnEnd(e){
			if(e.changedTouches[0].identifier==id){
				document.removeEventListener('touchmove',fnMove,false);
				document.removeEventListener('touchend',fnEnd,false);

				if( Math.abs(y-Y) >= 300 && y-Y < 0 && time <= 4){
					toDownFn && toDownFn();
				}else if( Math.abs(y-Y) >= 300 && y-Y > 0 && time <= 4){
					toUpFn && toUpFn();
				}else if( Math.abs(x-X) >= 200 && x-X < 0 && time <= 4){
					toRightFn && toRightFn();
				}else if( Math.abs(x-X) >= 200 && x-X > 0 && time <= 4){
					toLeftFn && toLeftFn();
				}
			}
		}
		document.addEventListener('touchmove',fnMove,false);

		document.addEventListener('touchend',fnEnd,false);


	},false);
}

$(document).on('touchmove', function (e) {
	e.preventDefault();
});