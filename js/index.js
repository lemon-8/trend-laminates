let menu = document.getElementById("menu-icon");
let close = document.getElementById("close-icon");

menu.onclick = function () {
    document.getElementById("close-icon").style.display = "block";
    document.getElementById("menu-icon").style.display = "none";
    document.getElementById("menu").style.display = "flex";
}

close.onclick = function () {
    document.getElementById("close-icon").style.display = "none";
    document.getElementById("menu-icon").style.display = "block";
    document.getElementById("menu").style.display = "none";
}

window.onscroll = function() {myScroll()};
let navbar = document.getElementById("site-menu");
let nav = document.getElementById("nav");
let sticky = navbar.offsetTop;
function myScroll() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        nav.classList.add("nav-sticky");
    } else {
        navbar.classList.remove("sticky");
        nav.classList.remove("nav-sticky");
    }
}