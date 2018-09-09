$(function () {
    // 待整理
    let scroll_y = $(".scroll_y");
    $(document).on("touchmove", function (doc) {
        if (!scroll_y.is(doc.target) && scroll_y.has(doc.target).length === 0) {
            doc.preventDefault();
        }
    });

    $(".tips_main").on("click", "a", function () {
        $(this).fadeOut().siblings("a").fadeIn();
    });

    let flag_btn = true;

    $(".pop").on("click", function () {
        if (flag_btn) {
            flag_btn = false;
            $(".pop_com").fadeIn();
        }
        $(".pop_com .tabs_box").removeClass("cur");
        $(".pop_com .tabs_box[title=" + $(this).attr("title") + "]").addClass("cur");
    });
    $(".pop_close").on("click", function () {
        $(".pop_com .tabs_box").removeClass("cur");
        $(".pop_com").fadeOut(function () {
            flag_btn = true;
        });
    });
});