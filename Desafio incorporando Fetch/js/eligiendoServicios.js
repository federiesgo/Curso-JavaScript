 const servicios = [{
         nombre: "Manicura",
         precio: 3500,
         cantidad: 1
     },
     {
         nombre: "Pestañas",
         precio: 2750,
         cantidad: 1
     },
     {
         nombre: "Masajes",
         precio: 4000,
         cantidad: 1
     },
 ]

 let agregarProducto = [];

 function consultarServicio(nombreDelServicio) {
     agregarProducto = JSON.parse(localStorage.getItem("PRODUCTOS")) || [];

     let servicioClickeado = servicios.find(servicio => servicio.nombre.toLowerCase() === nombreDelServicio.toLowerCase())
     Swal.fire({
         title: servicioClickeado.nombre,
         text: `Contratar este servicio tiene un valor de AR$${servicioClickeado.precio}`,
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Agregar al carrito'
     }).then((result) => {
         if (result.isConfirmed) {
             Swal.fire(
                 'Agregado!',
                 'El servicio ha sido agregado al carrito',
                 'success',
             )

             if (!containsObject(servicioClickeado, agregarProducto)) {
                 agregarProducto.push(servicioClickeado);
             } else {
                 let indice = agregarProducto.findIndex(elem => elem.nombre === servicioClickeado.nombre)
                 agregarProducto[indice].cantidad++;
                 agregarProducto[indice].precio += servicioClickeado.precio;
             }
             localStorage.setItem("PRODUCTOS", JSON.stringify(agregarProducto));
         }
     })
 }

 function containsObject(obj, list) {
     return list.some(elem => elem.nombre === obj.nombre)
 }