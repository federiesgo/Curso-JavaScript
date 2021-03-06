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

const descuentoCodigo = prompt('Si usted posee un código de descuento, por favor ingréselo aquí');


if (descuentos.find(codigo => codigo.cod === parseInt(descuentoCodigo))) {
    let index = descuentos.findIndex(codigo => codigo.cod === parseInt(descuentoCodigo));
    const costeTotal = calcularIVA(servicios.find(servicio => servicio.nombre.toLowerCase() === adquirirServicio.toLowerCase()));
    alert(`Felicitaciones usted ha ingresado el descuento ${descuentos[index].tipoDeDescuento}. El mismo es válido por un total de ${descuentos[index].cantDescuento} menos en su contratación!`)
    alert(`Incluyendo el impuesto IVA y el descuento aplicado, su contratación tendra un costo de: AR$ ${calcularDescuento(costeTotal, descuentos[index].descuento)}`)

} else {
    alert(`Código de descuento inexistente`);
    const costeTotal = calcularIVA(servicios.find(servicio => servicio.nombre.toLowerCase() === adquirirServicio.toLowerCase()));
    alert(`Incluyendo el impuesto IVA, su contratación tendra un costo de: $${costeTotal}(Pesos Argentinos)`);
}