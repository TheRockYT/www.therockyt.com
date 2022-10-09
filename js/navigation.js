var nav_open = null
var nav_close = null
var nav_list = null

document.addEventListener("DOMContentLoaded", function() {
    nav_open = document.getElementById("nav_open")
    nav_close = document.getElementById("nav_close")
    nav_list = document.getElementById("nav_list")

    nav_open.addEventListener('click', function(event) {
        setNavState(true)
    })
    nav_close.addEventListener('click', function(event) {
        setNavState(false)
    })


});

function getCurrentNavState() {
    if (nav_list.classList.contains("enabled")) {
        nav_open.classList.remove("enabled")
        nav_close.classList.add("enabled")
        return true;
    } else {
        nav_open.classList.add("enabled")
        nav_close.classList.remove("enabled")
        return false;
    }
}

function setNavState(val) {
    if (val) {
        nav_list.classList.add("enabled")
    } else {
        nav_list.classList.remove("enabled")
    }
    return getCurrentNavState()
}