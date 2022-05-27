var mainDiv = document.getElementById('mainDiv');
mainDiv.innerHTML += `<section class="fondoBody mt-5 text-center">


<h4 class="wow animate__animated animate__fadeInUp intro fuenteSpa">Somos un espacio dedicado especialmente al cuidado de tu salud y belleza.</h4>

<h1 class="wow animate__animated animate__fadeInUp intro fw-bold fs-1 fuenteSpa">
    Conoce nuestros servicios
</h1>

</section>

<section class="row main sectionEfectoTexto2 bordesSection fondoSection">

<div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 my-5 textosIndex">
    <a onclick="consultarServicio('pestañas')"><span id="TextoDivididoSpan"><h1 class="titulosIndex efectoTextoDividido">Pestañas</h1></span></a>
    <h1 class="fs-3 home-title efectoTexto2 fuenteSpa">
        <span>Las extensiones de pestañas son usadas para mejorar la longitud, curvatura, cantidad y grosor de pestañas naturales.</span>
        <span>Pueden ser hechas de varios materiales que incluyen sintético y seda.</span>
    </h1>
</div>

<div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 my-5">
    <img class="rounded imgResponsive" src="img/pestaniasIndex.png" alt="Mujer luego de recibir tratamiento de pestañas">
</div>

<div class="d-flex flex-md-row-reverse flex-column">
    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 my-5 textosIndex ps-5">
        <a onclick="consultarServicio('manicura')"><span id="TextoDivididoSpan"><h1 class="titulosIndex efectoTextoDividido">Esculpidas</h1></span></a>
        <h1 class="fs-3 home-title efectoTexto2 fuenteSpa">
            <span>Los materiales con los que se esculpe la uña principalmente son: acrílico, gel, acrilgel.</span>
            <span>Ocasionalmente también se utiliza fibra de vidrio o de porcelana.</span>
        </h1>
    </div>
    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 my-5">
        <img class="rounded imgResponsive" src="img/esculpidasIndex.png" alt="Mujer luego de recibir tratamiento de uñas">
    </div>
</div>

<div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 my-5 textosIndex">
    <a onclick="consultarServicio('masajes')"><span id="TextoDivididoSpan"><h1 class="titulosIndex efectoTextoDividido">Masajes</h1></span></a>
    <h1 class="fs-3 home-title efectoTexto2 fuenteSpa">
        <span>En nuestro salon puedes probar numerosas técnicas,</span>
        <span>Desde las clásicas hasta masajes indios y romanos.</span>
    </h1>
</div>

<div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 my-5">
    <div class="col-md-auto">
        <img class="rounded imgResponsive imagenCentrada" src="img/masajeIndex.jpg" alt="Mujer recibiendo masajes">
    </div>
</div>

</section>`