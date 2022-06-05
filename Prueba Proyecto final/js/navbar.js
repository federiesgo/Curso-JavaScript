$('.menu-toggle').click(function() {

    $('.site-nav').toggleClass('site-nav--open', 500);
    $(this).toggleClass('open');

})

window.onscroll = function() { scrollFunction() };

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

function modificandoElemsDeClass(elem, clase, colorElegido) {
    for (elem = 0; elem < clase.length; elem++) {
        clase[elem].style.color = colorElegido;
    }
}