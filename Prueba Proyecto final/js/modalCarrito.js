let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");


let modalWrap = null;
let listaCompletaCarrito = [];

const showModal = () => {
    listaCompletaCarrito = JSON.parse(localStorage.getItem('PRODUCTOS'));
    if (modalWrap !== null) {
        modalWrap.remove();
    }
    modalWrap = document.createElement('div')
    modalWrap.innerHTML = `  
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg"> 
        <div class="modal-content">          
          <div class="modal-body">          
                <table class="table">
                <thead>
                       <tr>
                           <th scope="col"></th>
                           <th scope="col">Servicio</th>
                           <th scope="col">Cantidad</th>
                           <th scope="col">Total</th>
                       </tr>
                 </thead>
                <tbody id="contenidoModalCarrito">
                                              
                </tbody>
                </table>
          </div>
          <div>
          <div class="container">
                <div class="row bodyForm fondoBody">
                    <div class="containerForm col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <form id="contact">                            
                            <fieldset>
                                <input id="mailComprador" placeholder="Ingrese su email" type="email" required />
                            </fieldset>                     
                            <fieldset>
                                <button onclick="finalizarCompra()" name="submit" type="reset" id="contact-submit" data-submit="...Enviando">Finalizar compra</button>
                            </fieldset>
                            <div class="containerForm col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                              <fieldset>
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              </fieldset>
                              <fieldset>
                                <button type="button" class="btn btn-secondary" onclick="limpiarCarrito()">Vaciar carrito</button>
                              </fieldset>
                            </div>
                        </form>
                    </div>
                </div>
          </div>        
          </div>
        </div>
      </div>
    </div>
    `;

    document.body.append(modalWrap);
    let modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
    modal.show();
    agregandoListaAlModal();
}

function agregandoListaAlModal() {
    if (listaCompletaCarrito != null) {
        listaCompletaCarrito.forEach(({ nombre, precio, cantidad }, index) => {
            let listaModal = document.getElementById('contenidoModalCarrito')
            listaModal.innerHTML += `
                        <tr>
                            <th scope="row">${index+1}</th>
                            <td>${nombre}</td>                            
                            <td>${cantidad} Sesion/es</td>                            
                            <td>$${precio}</td>
                         </tr>  
        `
        })
    }
}

function limpiarCarrito() {
    let lista = document.getElementById('contenidoModalCarrito');
    lista.innerHTML = "";
    window.localStorage.removeItem('PRODUCTOS');
    listaCompletaCarrito = [];
}

let compraCompletada = [];
let productosEnCarrito = [];

let finalizarCompra = () => {
    if (regex.test(document.getElementById("mailComprador").value)) {
        productosEnCarrito = JSON.parse(localStorage.getItem('PRODUCTOS')) || [];
        let mailDelComprador = document.getElementById("mailComprador").value;
        productosEnCarrito.push({ mailComprador: mailDelComprador });
        let compraCompletada = JSON.parse(localStorage.getItem('COMPRA TERMINADA')) || [];
        if ((compraCompletada != null) && (productosEnCarrito != null) && (productosEnCarrito.length > 1)) {
            compraCompletada.push(productosEnCarrito);
            localStorage.setItem('COMPRA TERMINADA', JSON.stringify(compraCompletada));
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Gracias por su compra, en breve nos pondremos en contacto.',
                showConfirmButton: false,
                timer: 2500
            })

        }
        limpiarCarrito();
    }
}