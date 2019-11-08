function updatePoints(value) {


    document.getElementById("sliderHelp").style.opacity = 0;

    if (value >= 90) {
        document.getElementById("homePoints").innerHTML = 90
        flexi = document.getElementById("flexiPoints").innerHTML = 10
    }

    else if (value >= 80) {
        document.getElementById("homePoints").innerHTML = 80
        flexi = document.getElementById("flexiPoints").innerHTML = 20
    }

    else if (value >= 70) {
        document.getElementById("homePoints").innerHTML = 70
        flexi = document.getElementById("flexiPoints").innerHTML = 30
    }

    else if (value >= 60) {
        document.getElementById("homePoints").innerHTML = 60
        flexi = document.getElementById("flexiPoints").innerHTML = 40
    }

    else if (value >= 50) {
        document.getElementById("homePoints").innerHTML = 50
        flexi = document.getElementById("flexiPoints").innerHTML = 50
    }

}

$(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
        $('#header-image').removeClass("header-image");
        $('#header-image').addClass("header-image-min");
    }
    else {
        $('#header-image').removeClass("header-image-min");
        $('#header-image').addClass("header-image");
    }
});

