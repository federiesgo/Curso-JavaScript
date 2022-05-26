var logoYNavbar = document.getElementById('navbar1');
logoYNavbar.innerHTML += `<div class="d-flex justify-content-between">
<div class>
    <a href="index.html">
        <img src="img/emparLogo.jpeg" alt="Logo Empar" class="headerLogo">
    </a>
</div>
<div>
    <nav class="navbar navbar-expand-lg navbar-light navbar-color">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
            <div class="collapse navbar-collapse ms-auto" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="index.html">INICIO</a>
                    <a class="nav-link" href="html/covid-19.html">COVID</a>
                    <a class="nav-link" href="html/talleres.html">TALLERES</a>                    
                    <a class="nav-link" href="html/contacto.html">CONTACTO</a>
                    <a id="carritoNav" class="nav-link">CARRITO</a>
                </div>
            </div>
        </div>
    </nav>
</div>
</div>`