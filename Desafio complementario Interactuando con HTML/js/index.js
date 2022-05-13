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

function calcularIVA(servicio) {
    return servicio.precio * 1.21;
}

function calcularDescuento(precio, descuento) {
    return precio - (precio * descuento);
}


let textoIndex1 = document.createElement("div");
textoIndex1.innerHTML = `<h1 class="estiloTitulo">Bienvenido a Empar Spa</h1>
                            <h3 class="fuenteTexto">Por favor, haga click en el servicio que desea contratar</h3>`;
document.body.append(textoIndex1);


let parrafoServicioSeleccionado = document.createElement("p");
let parrafoDescuentoAplicadoConIVA = document.createElement("p");
let parrafoIvaSinDescuento = document.createElement("p");
let parrafoDescuentoAplicado = document.createElement("p");
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

function respuestaClick(servicio) {
    adquirirServicio = servicio;
    const descuentoCodigo = prompt('Si usted posee un código de descuento, por favor ingréselo aquí');
    parrafoServicioSeleccionado.innerHTML = `<h1 class="estiloTitulo"> Usted ha elegido el servicio ${servicio.toLowerCase()}</h1>`;
    document.body.append(parrafoServicioSeleccionado);
    aplicandoDescuentos(descuentoCodigo);
}


function aplicandoDescuentos(descuentoCodigo) {
    if (descuentos.find(codigo => codigo.cod === parseInt(descuentoCodigo))) {
        let index = descuentos.findIndex(codigo => codigo.cod === parseInt(descuentoCodigo));
        const costeTotal = calcularIVA(servicios.find(servicio => servicio.nombre.toLowerCase() === adquirirServicio.toLowerCase()));


        parrafoDescuentoAplicado.innerHTML = `<h3 class="fuenteTexto"> Felicitaciones usted ha ingresado el descuento ${descuentos[index].tipoDeDescuento}. El mismo es válido por un total de ${descuentos[index].cantDescuento} menos en su contratación! </h3>`;
        document.body.append(parrafoDescuentoAplicado);
        parrafoDescuentoAplicadoConIVA.innerHTML = `<h3 class="fuenteTexto"> Incluyendo el impuesto IVA y el descuento aplicado, su contratación tendra un costo de: AR$ ${calcularDescuento(costeTotal, descuentos[index].descuento)} </h3>`;
        document.body.append(parrafoDescuentoAplicadoConIVA);

    } else {
        const costeTotal = calcularIVA(servicios.find(servicio => servicio.nombre.toLowerCase() === adquirirServicio.toLowerCase()));
        parrafoIvaSinDescuento.innerHTML = `<h3 class="fuenteTexto"> El código de descuento ingresado no existe. Incluyendo el impuesto IVA, su contratación tendra un costo de: AR$${costeTotal} </h3>`;
        document.body.append(parrafoIvaSinDescuento);
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