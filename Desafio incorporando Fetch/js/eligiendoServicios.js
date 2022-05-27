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
             agregarProducto.push(servicioClickeado);
             localStorage.setItem("PRODUCTOS", JSON.stringify(agregarProducto));
         }
     })
 }