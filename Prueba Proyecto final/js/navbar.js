//Hamburguesa
$('.menu-toggle').click(function() {

    $('.site-nav').toggleClass('site-nav--open', 500);
    $(this).toggleClass('open');

})

// Ubicar la pagina en top cuando se hace un refresh
$(document).ready(function() {
    $(this).scrollTop(0);
});

// Media Queries para el efecto del header/navbar //


//Tablets y celulares
if ((window.innerWidth < 1024)) {
    document.getElementById("header").style.marginBottom = "75px"
    document.getElementById("videoHeader").style.display = "none"
    document.getElementById("header").style.background = "antiquewhite";
    document.getElementById("header").style.position = "relative";
    document.getElementById("logoAnchor").style.color = "black"
    let navA = document.getElementsByClassName("navA");
    let navAElem;
    modificandoElemsDeClass(navAElem, navA, "black")
}

//Laptop
if (window.innerWidth >= 1024 && window.innerWidth < 1280) {
    window.onscroll = function() { scrollFunction() }

    function scrollFunction() {
        if (document.body.scrollTop > 175 || document.documentElement.scrollTop > 175) {
            document.getElementById("header").style.background = "antiquewhite";
            document.getElementById("logoAnchor").style.color = "black"
            let navA = document.getElementsByClassName("navA");
            let navAElem;
            modificandoElemsDeClass(navAElem, navA, "black")
        } else {
            document.getElementById("header").style.background = "transparent";
            document.getElementById("logoAnchor").style.color = "white"
            let navA = document.getElementsByClassName("navA");
            let navAElem;
            modificandoElemsDeClass(navAElem, navA, "white")
        }
    }
}

//Laptop L
if (window.innerWidth >= 1440 && window.innerWidth < 1920) {
    window.onscroll = function() { scrollFunction() }

    function scrollFunction() {
        if (document.body.scrollTop > 275 || document.documentElement.scrollTop > 275) {
            document.getElementById("header").style.background = "antiquewhite";
            document.getElementById("logoAnchor").style.color = "black"
            let navA = document.getElementsByClassName("navA");
            let navAElem;
            modificandoElemsDeClass(navAElem, navA, "black")
        } else {
            document.getElementById("header").style.background = "transparent";
            document.getElementById("logoAnchor").style.color = "white"
            let navA = document.getElementsByClassName("navA");
            let navAElem;
            modificandoElemsDeClass(navAElem, navA, "white")
        }
    }
}

//Nest Hub Max
if (window.innerWidth >= 1280 && window.innerWidth < 1440) {
    window.onscroll = function() { scrollFunction() }

    function scrollFunction() {
        if (document.body.scrollTop > 225 || document.documentElement.scrollTop > 225) {
            document.getElementById("header").style.background = "antiquewhite";
            document.getElementById("logoAnchor").style.color = "black"
            let navA = document.getElementsByClassName("navA");
            let navAElem;
            modificandoElemsDeClass(navAElem, navA, "black")
        } else {
            document.getElementById("header").style.background = "transparent";
            document.getElementById("logoAnchor").style.color = "white"
            let navA = document.getElementsByClassName("navA");
            let navAElem;
            modificandoElemsDeClass(navAElem, navA, "white")
        }
    }
}

//4K
if (window.innerWidth === 2560) {
    document.getElementById("contenedorVideoHeader").style.maxHeight = "785px"
    window.onscroll = function() { scrollFunction() }

    function scrollFunction() {
        if (document.body.scrollTop > 595 || document.documentElement.scrollTop > 595) {
            document.getElementById("header").style.background = "antiquewhite";
            document.getElementById("logoAnchor").style.color = "black"
            let navA = document.getElementsByClassName("navA");
            let navAElem;
            modificandoElemsDeClass(navAElem, navA, "black")
        } else {
            document.getElementById("header").style.background = "transparent";
            document.getElementById("logoAnchor").style.color = "white"
            let navA = document.getElementsByClassName("navA");
            let navAElem;
            modificandoElemsDeClass(navAElem, navA, "white")
        }
    }
}

//Escritorio 1920x1080
if (window.innerWidth === 1920) {
    window.onscroll = function() { scrollFunction() }

    function scrollFunction() {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            document.getElementById("header").style.background = "antiquewhite";
            document.getElementById("logoAnchor").style.color = "black"
            let navA = document.getElementsByClassName("navA");
            let navAElem;
            modificandoElemsDeClass(navAElem, navA, "black")
        } else {
            document.getElementById("header").style.background = "transparent";
            document.getElementById("logoAnchor").style.color = "white"
            let navA = document.getElementsByClassName("navA");
            let navAElem;
            modificandoElemsDeClass(navAElem, navA, "white")
        }
    }
}

//Para cambiar el color de cada uno de los elementos del navbar (de blanco a negro)
function modificandoElemsDeClass(elem, clase, colorElegido) {
    for (elem = 0; elem < clase.length; elem++) {
        clase[elem].style.color = colorElegido;
    }
}