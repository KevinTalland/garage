const currentLocation = location.href;

var listePages = document.querySelectorAll(".header nav a");

for (var page of listePages){
    if (page.href === currentLocation){
        page.className="active"
    }
}

/*
var menu = document.querySelector('nav');
var positionMenu = menu.offsetTop;

window.onscroll = function() {
    if (window.scrollY >= positionMenu) {
        // fixed
        menu.className="fixedTop";
    } else {
        // relative
        menu.className="";
    }
}*/