function p1_hover() {
    let demo1 = document.querySelector("#p1_lunbo");
    demo1.setAttribute(background - image, "../img/lunbo/lunbo2.jpg");
}

$(document).ready(function () {
    $('a[href*=#]').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                        scrollTop: targetOffset
                    },
                    500);
                return false;
            }
        }
    });
    $(".top").click(function () {
        $("html,body").animate({scrollTop: 0}, 500);
    });
});
