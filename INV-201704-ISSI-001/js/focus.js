$.fn.focusPictures = function(options) {

    // 设置参数
    var options = $.extend({
        // 间隔时间
        time: 3000,
        // 动画时间
        animateTime: 300,
        // 有效移动距离
        moveDistance: 120,
        // 是否显示按钮
        showButtons: false,
        // 按钮是否为数字
        buttonNumber: true,
        // 是否开启循环轮播
        loop: false,
        // 是否自动轮播
        autoScroll: false
    }, options);

    // 获取图片ul,li和控制条ul
    var focusPicturesUl = $(this).find("ul[type=pictures]");
    var focusPicturesLi = focusPicturesUl.find("li");
    var focusButtonsUl = $(this).find("ul[type=buttons]");
    // 图片数量
    var count = focusPicturesLi.length;
    // 自动播放
    var autoScroll;

    // 定义外层宽度
    focusPicturesLi.width($(this).width());
    $(window).resize(function() {
        focusPicturesUl.find("li").width($(this).width());
    });

    if (focusButtonsUl.length <= 0) {
        options.showButtons = false;
    }

    if (options.showButtons) {
        // 添加控制条li
        if (options.buttonNumber) {
            for (var i = 1; i <= count; i++) {
                focusButtonsUl.append('<li><a>' + i + '</a></li>');
            }
        } else {
            for (var i = 1; i <= count; i++) {
                focusButtonsUl.append('<li><a></a></li>');
            }
        }
    }
    var focusButtonsLi = focusButtonsUl.find("li");

    // 轮播
    var play = {
        config: {
            indexCount: 0,
            // 获取当前图片宽度
            width: function() {
                return focusPicturesLi.width();
            }
        },
        // 循环轮播
        loop: {
            nextMoveEnd: function() {
                focusPicturesUl.animate({
                    left: -(play.config.width() * (play.config.indexCount + 2))
                }, options.animateTime, function() {
                    focusPicturesUl.css({
                        left: -(play.config.width())
                    });
                });
            },
            nextMove: function() {
                return -(play.config.width() * (play.config.indexCount + 2));
            },
            previousMoveEnd: function() {
                focusPicturesUl.animate({
                    left: 0
                }, options.animateTime, function() {
                    focusPicturesUl.css({
                        left: -(play.config.width() * (count))
                    });
                });
            },
            previousMove: function() {
                return -(play.config.width() * (play.config.indexCount));
            },
            skipMove: function(index) {
                return -(play.config.width() * (index + 1));
            }
        },
        // 正常轮播
        proper: {
            nextMoveEnd: function() {
                focusPicturesUl.animate({
                    left: 0
                });
            },
            nextMove: function() {
                return -(play.config.width() * (play.config.indexCount + 1));
            },
            previousMoveEnd: function() {
                focusPicturesUl.animate({
                    left: -(play.config.width() * (count - 1))
                });
            },
            previousMove: function() {
                return -(play.config.width() * (play.config.indexCount - 1));
            },
            skipMove: function(index) {
                return -(play.config.width() * (index));
            }
        },
        // 图片跳转
        skipPicture: function(index) {
            focusPicturesLi.removeClass("current-pictures");

            focusPicturesUl.animate({
                left: play.moveMode.skipMove(index)
            });

            focusPicturesLi.eq(index).addClass("current-pictures");

            if (options.showButtons) {
                focusButtonsLi.removeClass("current-buttons").eq(index).addClass("current-buttons");
            }

            play.config.indexCount = index;
        },
        // 下一页
        nextPicture: function() {
            focusPicturesLi.removeClass("current-pictures");
            if (play.config.indexCount == count - 1) {

                play.moveMode.nextMoveEnd();

                play.config.indexCount = 0;
            } else {

                focusPicturesUl.animate({
                    left: play.moveMode.nextMove()
                });

                play.config.indexCount++;
            }
            focusPicturesLi.eq(play.config.indexCount).addClass("current-pictures");

            if (options.showButtons) {
                focusButtonsLi.removeClass("current-buttons").eq(play.config.indexCount).addClass("current-buttons");
            }
        },
        // 上一页
        previousPicture: function() {
            focusPicturesLi.removeClass("current-pictures");
            if (play.config.indexCount == 0) {

                play.moveMode.previousMoveEnd();

                play.config.indexCount = count - 1;
            } else {

                focusPicturesUl.animate({
                    left: play.moveMode.previousMove()
                });

                play.config.indexCount--;
            }
            focusPicturesLi.eq(play.config.indexCount).addClass("current-pictures");

            if (options.showButtons) {
                focusButtonsLi.removeClass("current-buttons").eq(play.config.indexCount).addClass("current-buttons");
            }
        },
        // 初始化
        init: function() {
            // 选择滚动模式
            play.moveMode = (options.loop ? play.loop : play.proper);

            if (options.loop) {
                focusPicturesLi.eq(-1).clone(true).insertBefore(focusPicturesLi.eq(0));
                focusPicturesLi.eq(0).clone(true).insertAfter(focusPicturesLi.eq(-1));
            }

            focusPicturesUl.css({
                left: options.loop ? -(play.config.width()) : 0
            });

            focusPicturesLi.eq(0).addClass("current-pictures");

            // 开启自动滚动
            if (options.autoScroll) {
                autoScroll = setInterval(play.nextPicture, options.time);
            }

            // 图片绑定事件
            var touch, start, move, left;
            focusPicturesUl.bind({
                mouseover: function() {
                    clearInterval(autoScroll);
                },
                mouseout: function() {
                    if (options.autoScroll) {
                        autoScroll = setInterval(play.nextPicture, options.time);
                    }
                },
                touchstart: function(e) {
                    focusPicturesUl.removeClass("back-left");
                    clearInterval(autoScroll);
                    touch = e.originalEvent.targetTouches[0];
                    start = {
                        x: touch.pageX,
                        y: touch.pageY
                    };
                    left = focusPicturesUl.position().left;
                },
                touchmove: function(e) {
                    e.preventDefault();
                    touch = e.originalEvent.targetTouches[0];
                    move = {
                        x: touch.pageX - start.x,
                        y: touch.pageY - start.y
                    };
                    focusPicturesUl.css({
                        left: move.x + left
                    });
                },
                touchend: function(e) {
                    if (move.x < -(options.moveDistance)) {
                        play.nextPicture();
                    } else if (move.x > options.moveDistance) {
                        play.previousPicture();
                    } else {
                        focusPicturesUl.addClass("back-left");
                        focusPicturesUl.css({
                            left: left
                        });
                    }
                    if (options.autoScroll) {
                        autoScroll = setInterval(play.nextPicture, options.time);
                    }
                },
            });

            // 控制条绑定事件
            if (options.showButtons) {
                focusButtonsLi.eq(0).addClass("current-buttons");
                focusButtonsLi.bind({
                    mouseover: function() {
                        clearInterval(autoScroll);
                        play.skipPicture(focusButtonsLi.index(this));
                    },
                    mouseout: function() {
                        if (options.autoScroll) {
                            autoScroll = setInterval(play.nextPicture, options.time);
                        }
                    }
                });
            }
        }
    }

    play.init();

    return {
        skipPicture: function(index) {
            play.skipPicture(index);
        },
        nextPicture: function() {
            play.nextPicture();
        },
        previousPicture: function() {
            play.previousPicture();
        }
    }
};

// <div class="focus-pictures" id="focusPictures">
//     <ul class="pictures" type="pictures">
//         <li>
//             <a href=""><img src=""></a>
//         </li>
//         <li>
//             <a href=""><img src=""></a>
//         </li>
//         <li>
//             <a href=""><img src=""></a>
//         </li>
//     </ul>
//     <ul class="buttons" type="buttons"></ul>
// </div>

/*焦点图*/

// .focus-pictures {
//     position: relative;
//     width: 100%;
//     height: 180px;
//     margin: 0 auto;
//     overflow: hidden;
// }

// .focus-pictures ul.pictures {
//     position: relative;
//     width: 9999px;
//     height: 100%;
// }

// .pictures:after {
//     content: "";
//     display: table;
//     clear: both;
// }

// .focus-pictures ul.pictures li {
//     float: left;
//     height: 100%;
// }

// .focus-pictures ul.pictures li a {
//     display: block;
//     height: 100%;
// }

// .focus-pictures ul.pictures li a img {
//     width: 100%;
//     height: 100%;
// }

// .focus-pictures ul.buttons {
//     position: absolute;
//     bottom: 10px;
//     right: 10px;
// }

// .focus-pictures ul.buttons li {
//     float: left;
//     width: 20px;
//     height: 20px;
//     margin: 0 2px;
// }

// .focus-pictures ul.buttons li a {
//     display: block;
//     text-align: center;
//     padding: 3px 0 2px;
//     font-size: 12px;
//     color: #fff;
//     border: 1px solid #40b2f9;
//     background-color: #40b2f9;
//     text-decoration: none;
// }

// .focus-pictures ul.buttons li.current-buttons a {
//     color: #40b2f9;
//     border: 1px solid #40b2f9;
//     background-color: #fff;
// }

// .back-left {
//     transition: left .5s;
//     -moz-transition: left .5s;
//     -webkit-transition: left .5s;
//     -o-transition: left .5s;
// }