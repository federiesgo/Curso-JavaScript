const servicios = [{
        nombre: "Manicura",
        precio: 3500
    },
    {
        nombre: "Pestañas",
        precio: 2750
    },
    {
        nombre: "Masajes",
        precio: 4000
    },
]




const descuentos = [{
        tipoDeDescuento: "Cliente nuevo",
        cantDescuento: "25%",
        descuento: 0.25,
        cod: 90012444210
    },
    {
        tipoDeDescuento: "Navidad",
        cantDescuento: "35%",
        descuento: 0.35,
        cod: 29301482610
    },
    {
        tipoDeDescuento: "Cumpleaños",
        cantDescuento: "50%",
        descuento: 0.5,
        cod: 23561458171
    },
    {
        tipoDeDescuento: "Cupon invitado",
        cantDescuento: "10%",
        descuento: 0.1,
        cod: 56721928184
    }
]

function calcularIVA(servicio) {
    return servicio.precio * 1.21;
}

function calcularDescuento(precio, descuento) {
    return precio - (precio * descuento);
}


function creandoTitulo() {
    let textoIndex1 = document.createElement("h1");
    textoIndex1.innerHTML = `Bienvenido a Empar Spa`;
    textoIndex1.className = "estiloTitulo";
    document.body.append(textoIndex1);
}

creandoTitulo();

let parrafo = document.createElement("p");
let tituloServicioSeleccionado = document.createElement("h1");
let divParaBotones = document.createElement("div");

function estilosTextos() {
    parrafo.className = "fuenteTexto";
    tituloServicioSeleccionado.className = "estiloTitulo";
}

estilosTextos();

function creandoBotones() {
    divParaBotones.className = "ordenarBotones";
    document.body.append(divParaBotones);
    for (const servicio of servicios) {
        const {nombre} = servicio; 
        divParaBotones.innerHTML += `
                                <button id="${nombre.toLowerCase()}"><img class="imagenesPrueba" src="../img/${nombre}.png" alt="${nombre}"></button>
                                `;
        setTimeout(() => {
            document.getElementById(nombre.toLowerCase()).addEventListener("click", () => {
                respuestaClick(nombre.toLowerCase())
            });
        }, 500)
    }
}

creandoBotones();

let adquirirServicio = "";

function capturarImg(nombreDeServicio) {
    if (nombreDeServicio === adquirirServicio.toLowerCase()) {
        return `<img class="imagenesPrueba" src="../img/${nombreDeServicio.toLowerCase()}.png" alt="imagen">`
    }
}

function creandoBotonesServicios() {
    for (const servicio of servicios) {
        if (adquirirServicio.toLowerCase() === servicio.nombre.toLowerCase()) {
            let foto = document.createElement('div');
            foto.innerHTML = capturarImg(adquirirServicio.toLowerCase());
            document.body.append(foto); 
        }
    }
}

creandoBotonesServicios();

function creandoInputDescuento() {
    let inputDescuentos = document.createElement("div");
    inputDescuentos.className = "centerInput"
    inputDescuentos.innerHTML = `
    <form action="" id="formDescuento">
        <div class="mb-3">
            <label for="ingresandoCodigo" class="form-label">Código de descuento</label>
            <input type="password" class="form-control" id="ingresandoCodigo">
        </div>
        <button onclick="guardarCodigoDescuento()" id="btnAplicarDescuento" type="button">Aplicar Descuento</button>
    </form>`;
    document.body.append(inputDescuentos);
}

function codigoDescuentoFunction() {
    let botonFinal = document.createElement("div");
    botonFinal.className = "centerInput"
    botonFinal.innerHTML = `<h2> Haga click en el carrito para mostrar el precio final </h2>
        <button onclick="clickBotonFinal()" id="btnFinal" class="tamanoBoton" type="submit"><img class="achicandoImg" src="../img/carritoPrecioFinal.png" alt=""></button>`
    document.body.append(botonFinal);
    botonFinal.setAttribute("id", "btnCarrito");
    document.getElementById("btnAplicarDescuento").disabled = true;
    document.getElementById("formDescuento").reset();
    document.getElementById("ingresandoCodigo").disabled = true;
}

function guardarCodigoDescuento() {
    var descuentoIngresado = document.getElementById("ingresandoCodigo");
    localStorage.setItem("ingresandoCodigo", descuentoIngresado.value);
    if (!document.getElementById("btnCarrito")) {
        codigoDescuentoFunction();
    }
}

let desc = 0;

function clickBotonFinal() {
    desc = localStorage.getItem("ingresandoCodigo", desc.value);
    aplicandoDescuentos(desc);
    document.getElementById("btnFinal").disabled = true;
}

function respuestaClick(servicio) {
    adquirirServicio = servicio;
    tituloServicioSeleccionado.innerHTML = `Usted ha elegido el servicio ${servicio.toLowerCase()}`;
    document.body.append(tituloServicioSeleccionado);
    creandoInputDescuento();
    document.getElementById("masajes").disabled = true;
    document.getElementById("pestañas").disabled = true;
    document.getElementById("manicura").disabled = true;
}


function aplicandoDescuentosTrue(descuento) {
    let index = descuentos.findIndex(codigo => codigo.cod === parseInt(descuento));
    const costeTotal = calcularIVA(servicios.find(servicio => servicio.nombre.toLowerCase() === adquirirServicio.toLowerCase()));
    parrafo.innerHTML = `Felicitaciones usted ha ingresado el descuento ${descuentos[index].tipoDeDescuento}. El mismo es válido por un total de ${descuentos[index].cantDescuento} menos en su contratación! 
        Incluyendo el impuesto IVA y el descuento aplicado, su contratación tendra un costo de: AR$ ${calcularDescuento(costeTotal, descuentos[index].descuento)}`;
    document.body.append(parrafo);
}

function aplicandoDescuentosFalse() {
    const costeTotal = calcularIVA(servicios.find(servicio => servicio.nombre.toLowerCase() === adquirirServicio.toLowerCase()));
    parrafo.innerHTML = `El código de descuento ingresado no existe. Incluyendo el impuesto IVA, su contratación tendra un costo de: AR$${costeTotal}`;
    document.body.append(parrafo);
}

function aplicandoDescuentos(descuentoCodigo) {
    descuentos.find(codigo => (codigo.cod === parseInt(descuentoCodigo))) ? aplicandoDescuentosTrue(descuentoCodigo) : aplicandoDescuentosFalse();    
}