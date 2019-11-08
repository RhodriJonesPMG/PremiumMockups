$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('#header-image').removeClass("header-image");
        $('#header-image').addClass("header-image-min");
    }
    else {
        $('#header-image').removeClass("header-image-min");
        $('#header-image').addClass("header-image");
    }
});