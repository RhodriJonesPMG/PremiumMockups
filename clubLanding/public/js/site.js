function logoTransition() {
    setTimeout(function () {
        document.getElementById("logo").style.opacity = "1";
    }, 700);

}

function overlayTransition() {
    document.getElementById("logo").style.opacity = "0";

    setTimeout(function () {
        document.getElementById("overlay").style.zIndex = "99";
        document.getElementById("overlay").style.opacity = "1";
        document.getElementById("backButton").style.opacity = "1";
    }, 800);
}

function overlayBackTransition() {
    document.getElementById("overlay").style.opacity = "0";
    document.getElementById("backButton").style.opacity = "0";

    setTimeout(function () {
        document.getElementById("overlay").style.zIndex = "-1";
    }, 2000);

    setTimeout(function () {
        document.getElementById("logo").style.opacity = "1";
    }, 250);
}

function validateInput() {
    var email = document.getElementById("emailInput").value;
    var password = document.getElementById("passwordInput").value;
    var forename = document.getElementById("forenameInput").value;
    var surname = document.getElementById("surnameInput").value;
    var confirm = document.getElementById("confirmPasswordInput").value;

    if (email.length > 0 && password.length > 0 && confirm.length > 0 && forename.length > 0 && surname.length > 0) {
        document.getElementById("invalidFieldsText").style.opacity = "0";
        document.getElementById("createAccount").style.color = "#cbd5e0";
    } else {
        document.getElementById("createAccount").style.color = "#7d838b";
    }
}

function validateInputButton() {
    var email = document.getElementById("emailInput").value;
    var password = document.getElementById("passwordInput").value;
    var confirm = document.getElementById("confirmPasswordInput").value;

    if (email.length > 0 && password.length > 0 && confirm.length > 0) {
        document.getElementById("invalidFieldsText").style.opacity = "0";
    } else {
        document.getElementById("invalidFieldsText").style.opacity = "1";
    }
}