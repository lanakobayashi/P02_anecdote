'use strict';

function myFunction() {
    var x = document.getElementById("myNav");
    if (x.className === "nav-container") {
        x.className += " responsive";
    } else {
        x.className = "nav-container";
    }
}

function myFunction2() {
    var x = document.getElementById("my-Nav");
    if (x.className === "nav-container") {
        x.className += " responsive";
    } else {
        x.className = "nav-container";
    }
}
