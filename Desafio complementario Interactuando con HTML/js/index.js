const servicios = [{
        nombre: "Manicura",
        precio: 3500,
        imagen: 0,
    },
    {
        nombre: "Pestañas",
        precio: 2750,
        imagen: 0,
    },
    {
        nombre: "Masajes",
        precio: 4000,
        imagen: 0,

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

let adquirirServicio = prompt(
    `Bienvenido a Empar Spa, tenemos los siguientes servicios disponibles.

${servicios[0].nombre} $${servicios[0].precio} 
${servicios[1].nombre} $${servicios[1].precio}  
${servicios[2].nombre} $${servicios[2].precio} 

Ingrese a continuación, que servicio que desea contratar:`
);

while (!(servicios.some(servicio => servicio.nombre.toLowerCase() === adquirirServicio.toLowerCase()))) {
    alert("El servicio ingresado no esta disponible")
    adquirirServicio = prompt("Ingrese el nombre del servicio que desea contratar");
}

let parrafoServicioSeleccionado = document.createElement("p");
parrafoServicioSeleccionado.innerHTML = `<h1 class="estiloTitulo"> Usted ha elegido el servicio ${adquirirServicio.toLowerCase()} </h1>`;
document.body.append(parrafoServicioSeleccionado);

const descuentoCodigo = prompt('Si usted posee un código de descuento, por favor ingréselo aquí');


if (descuentos.find(codigo => codigo.cod === parseInt(descuentoCodigo))) {
    let index = descuentos.findIndex(codigo => codigo.cod === parseInt(descuentoCodigo));
    const costeTotal = calcularIVA(servicios.find(servicio => servicio.nombre.toLowerCase() === adquirirServicio.toLowerCase()));

    let parrafoDescuentoAplicado = document.createElement("p");
    parrafoDescuentoAplicado.innerHTML = `<h3 class="fuenteTexto"> Felicitaciones usted ha ingresado el descuento ${descuentos[index].tipoDeDescuento}. El mismo es válido por un total de ${descuentos[index].cantDescuento} menos en su contratación! </h3>`;
    document.body.append(parrafoDescuentoAplicado);

    let parrafoDescuentoAplicadoConIVA = document.createElement("p");
    parrafoDescuentoAplicadoConIVA.innerHTML = `<h3 class="fuenteTexto"> Incluyendo el impuesto IVA y el descuento aplicado, su contratación tendra un costo de: AR$ ${calcularDescuento(costeTotal, descuentos[index].descuento)} </h3>`;
    document.body.append(parrafoDescuentoAplicadoConIVA);

} else {
    const costeTotal = calcularIVA(servicios.find(servicio => servicio.nombre.toLowerCase() === adquirirServicio.toLowerCase()));
    let parrafoIvaSinDescuento = document.createElement("p");
    parrafoIvaSinDescuento.innerHTML = `<h3 class="fuenteTexto"> El código de descuento ingresado no existe. Incluyendo el impuesto IVA, su contratación tendra un costo de: AR$${costeTotal} </h3>`;
    document.body.append(parrafoIvaSinDescuento);
}
