function updatePoints(value) {

    if (value >= 90) {
        document.getElementById("homePoints").innerHTML = 90
        document.getElementById("homePoints1").innerHTML = 90
        document.getElementById("homePoints2").innerHTML = 90
        document.getElementById("flexiPoints").innerHTML = 10
        document.getElementById("flexiPoints1").innerHTML = 10
        document.getElementById("flexiPoints2").innerHTML = 10
    }

    else if (value >= 80) {
        document.getElementById("homePoints").innerHTML = 80
        document.getElementById("homePoints1").innerHTML = 80
        document.getElementById("homePoints2").innerHTML = 80
        document.getElementById("flexiPoints").innerHTML = 20
        document.getElementById("flexiPoints1").innerHTML = 20
        document.getElementById("flexiPoints2").innerHTML = 20
    }

    else if (value >= 70) {
        document.getElementById("homePoints").innerHTML = 70
        document.getElementById("homePoints1").innerHTML = 70
        document.getElementById("homePoints2").innerHTML = 70
        document.getElementById("flexiPoints").innerHTML = 30
        document.getElementById("flexiPoints1").innerHTML = 30
        document.getElementById("flexiPoints2").innerHTML = 30
    }

    else if (value >= 60) {
        document.getElementById("homePoints").innerHTML = 60
        document.getElementById("homePoints1").innerHTML = 60
        document.getElementById("homePoints2").innerHTML = 60
        document.getElementById("flexiPoints").innerHTML = 40
        document.getElementById("flexiPoints1").innerHTML = 40
        document.getElementById("flexiPoints2").innerHTML = 40
    }

    else if (value >= 50) {
        document.getElementById("homePoints").innerHTML = 50
        document.getElementById("homePoints1").innerHTML = 50
        document.getElementById("homePoints2").innerHTML = 50
        document.getElementById("flexiPoints").innerHTML = 50
        document.getElementById("flexiPoints1").innerHTML = 50
        document.getElementById("flexiPoints2").innerHTML = 50
    }

}