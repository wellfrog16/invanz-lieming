$(function () {
    let flag_run = true, run_box = $(".run_box");
    $(".switch_box li.able").on("click", "a", function () {
        let switch_btn = $(this), switch_item = switch_btn.parent();
        if (flag_run) {
            flag_run = !flag_run;
            switch_item.addClass("cur");

            run_box.animate({
                left: switch_item.index() * 129 + 5 + "px"
            }, 500 + switch_item.index() * 500, function () {
                // window.location.href = switch_btn.text();
                document.location = switch_btn.text();
            }).find("img").attr("src", "com/running.gif");
        }
    });
});