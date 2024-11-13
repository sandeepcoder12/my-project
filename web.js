
let nav = document.getElementById('navvv');

window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        nav.style.position = "fixed";
        nav.style.top = "0";
        nav.style.zIndex = "10";
        nav.style.transition = "1s";
        nav.style.backgroundColor = "#ffffff";
        nav.style.width = "100%";
    } else {
        nav.style.backgroundColor = "initial";
        nav.style.position = "initial";
    }
})