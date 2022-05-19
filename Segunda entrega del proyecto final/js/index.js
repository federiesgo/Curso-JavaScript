const servicios = [{
        nombre: "Manicura",
        precio: 3500,
        image: 'https://imgur.com/xPrIW5P',
    },
    {
        nombre: "Pestañas",
        precio: 2750,
        image: 'https://imgur.com/Jlo8WZu',
    },
    {
        nombre: "Masajes",
        precio: 4000,
        image: 'https://imgur.com/6J3QxaT',
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



let adquirirServicio = "";
let contadorInputDescuento = 0;
let contadorServicioSeleccionado = 0;
let botonAccionado = 0;
let desc = 0;

function calcularIVA(servicio) {
    return servicio.precio * 1.21;
}

function calcularDescuento(precio, descuento) {
    return precio - (precio * descuento);
}


let textoIndex1 = document.createElement("h1");
textoIndex1.innerHTML = `Bienvenido a Empar Spa`;
textoIndex1.className = "estiloTitulo";
document.body.append(textoIndex1);

let parrafo = document.createElement("p");
parrafo.className = "fuenteTexto";
let tituloServicioSeleccionado = document.createElement("h1");
tituloServicioSeleccionado.className = "estiloTitulo";
let divParaBotones = document.createElement("div");

for (const servicio of servicios) {
    divParaBotones.innerHTML += `
                                <button id="${servicio.nombre.toLowerCase()}"><img class="imagenesPrueba" src="../img/${servicio.nombre}.png" alt="${servicio.nombre}"></button>
                                `;


    setTimeout(() => {
        document.getElementById(servicio.nombre.toLowerCase()).addEventListener("click", () => {
            respuestaClick(servicio.nombre.toLowerCase())
        });
    }, 500)

}

divParaBotones.className = "ordenarBotones";
document.body.append(divParaBotones);

function creandoInputDescuento() {
    let inputDescuentos = document.createElement("div");
    inputDescuentos.className = "centerInput"
    inputDescuentos.innerHTML = `<form action="" id="formDescuento">
<div class="mb-3">
  <label for="ingresandoCodigo" class="form-label">Código de descuento</label>
  <input type="password" class="form-control" id="ingresandoCodigo">
</div>
<button onclick="guardarCodigoDescuento()" type="button">Aplicar Descuento</button>
</form>`;
    document.body.append(inputDescuentos);
    contadorInputDescuento++
}

function guardarCodigoDescuento() {
    if (botonAccionado === 0) {
        var descuentoIngresado = document.getElementById("ingresandoCodigo");
        localStorage.setItem("ingresandoCodigo", descuentoIngresado.value);
        let botonFinal = document.createElement("div");
        botonFinal.className = "centerInput"
        botonFinal.innerHTML = `<h2> Haga click en el carrito para mostrar el precio final </h2>
        <button onclick="clickBotonFinal()" class="tamanoBoton" type="submit"><img class="achicandoImg" src="../img/carritoPrecioFinal.png" alt=""></button>`
        document.body.append(botonFinal);
        botonAccionado++;
    }
}

function clickBotonFinal() {
    if (desc === 0) {
        desc = localStorage.getItem("ingresandoCodigo", desc.value);
    }
    aplicandoDescuentos(desc);
}

function respuestaClick(servicio) {
    if (contadorServicioSeleccionado === 0) {
        adquirirServicio = servicio;
        tituloServicioSeleccionado.innerHTML = `Usted ha elegido el servicio ${servicio.toLowerCase()}`;
        document.body.append(tituloServicioSeleccionado);
        contadorServicioSeleccionado++;
    }
    if (contadorInputDescuento === 0) {
        creandoInputDescuento();
    }
}

function aplicandoDescuentos(descuentoCodigo) {
    if (descuentos.find(codigo => codigo.cod === parseInt(descuentoCodigo))) {
        let index = descuentos.findIndex(codigo => codigo.cod === parseInt(descuentoCodigo));
        const costeTotal = calcularIVA(servicios.find(servicio => servicio.nombre.toLowerCase() === adquirirServicio.toLowerCase()));

        parrafo.innerHTML = `Felicitaciones usted ha ingresado el descuento ${descuentos[index].tipoDeDescuento}. El mismo es válido por un total de ${descuentos[index].cantDescuento} menos en su contratación! 
        Incluyendo el impuesto IVA y el descuento aplicado, su contratación tendra un costo de: AR$ ${calcularDescuento(costeTotal, descuentos[index].descuento)}`;
        document.body.append(parrafo);

    } else {
        const costeTotal = calcularIVA(servicios.find(servicio => servicio.nombre.toLowerCase() === adquirirServicio.toLowerCase()));
        parrafo.innerHTML = `El código de descuento ingresado no existe. Incluyendo el impuesto IVA, su contratación tendra un costo de: AR$${costeTotal}`;
        document.body.append(parrafo);
    }
}

function capturarImg(nombreDeServicio) {
    if (nombreDeServicio === adquirirServicio.toLowerCase()) {
        return `<img class="imagenesPrueba" src="../img/${nombreDeServicio.toLowerCase()}.png" alt="imagen">`
    }
    return console.log("no existe esa img");
}

for (const servicio of servicios) {
    if (adquirirServicio.toLowerCase() === servicio.nombre.toLowerCase()) {
        let foto = document.createElement('div');
        foto.innerHTML = capturarImg(adquirirServicio.toLowerCase());
        document.body.append(foto);
    }
}