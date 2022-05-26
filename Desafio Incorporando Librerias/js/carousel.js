var carousel1 = document.getElementById('carouselExampleFade');
carousel1.innerHTML += `<div class="carousel-indicators">
<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
</div>
<div class="carousel-inner marginCarousel">
<div class="carousel-item active">
    <img src="img/carousel1.jpg" class="d-block rounded-3 w-100" alt="Mujer recibiendo masaje">
</div>
<div class="carousel-item">
    <img src="img/carousel2.jpg" class="d-block rounded-3 w-100" alt="Mujer recibiendo tratamiento de uñas">
</div>
<div class="carousel-item">
    <img src="img/carousel3.jpg" class="d-block rounded-3 w-100" alt="Mujer recibiendo tratamiento de pestañas">
</div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
<span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
 <span class="carousel-control-next-icon" aria-hidden="true"></span>
 <span class="visually-hidden">Next</span>
</button>`