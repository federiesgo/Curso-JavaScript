var modalWrap = null;

var listaCompletaCarrito = [];

const showModal = () => {
    listaCompletaCarrito = JSON.parse(localStorage.getItem('PRODUCTOS'));
    if (modalWrap !== null) {
        modalWrap.remove();
    }
    modalWrap = document.createElement('div')
    modalWrap.innerHTML = `  
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Carrito de compras</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
                <table class="table">
                <thead>
                       <tr>
                            <th scope="col">#</th>
                           <th scope="col">Servicio</th>
                           <th scope="col">Cantidad</th>
                           <th scope="col">Total</th>
                       </tr>
                 </thead>
                <tbody id="contenidoModalCarrito">
                                              
                </tbody>
                </table>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" onclick="limpiarCarrito()">Vaciar carrito</button>
          </div>
        </div>
      </div>
    </div>
    `;

    document.body.append(modalWrap);
    var modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
    modal.show();
    agregandoListaAlModal();
}

function agregandoListaAlModal() {
    if (listaCompletaCarrito != null) {
        listaCompletaCarrito.forEach(({ nombre, precio, cantidad }, index) => {
            var listaModal = document.getElementById('contenidoModalCarrito')
            listaModal.innerHTML += `
                        <tr>
                            <th scope="row">${index+1}</th>
                            <td>${nombre}</td>                            
                            <td>${cantidad}</td>                            
                            <td>${precio}</td>
                         </tr>  
        `
        })
    }
}

function limpiarCarrito() {
    var lista = document.getElementById('contenidoModalCarrito');
    lista.innerHTML = "";
    localStorage.clear();
    listaCompletaCarrito = [];
}