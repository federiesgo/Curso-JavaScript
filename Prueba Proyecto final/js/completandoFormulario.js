let regex2 = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

let formularioLocalStorage = [];

class constructorFormulario {
    constructor(nombre, mail, telefono, mensaje, id) {
        this.nombre = nombre;
        this.mail = mail;
        this.telefono = telefono;
        this.mensaje = mensaje;
        this.id = id;
    }
}

function submitFormulario() {
    formularioLocalStorage = JSON.parse(localStorage.getItem("FORMULARIO")) || [];
    let datosPersonaFormulario = new constructorFormulario(document.getElementById("nombreContacto").value, document.getElementById("mailContacto").value,
        document.getElementById("telefonoContacto").value, document.getElementById("mensajeContacto").value, formularioLocalStorage.length + 1);

    if (datosPersonaFormulario.nombre != "" && datosPersonaFormulario.mail != "" && datosPersonaFormulario.telefono != "") {
        if (regex2.test(datosPersonaFormulario.mail)) {
            formularioLocalStorage.push(datosPersonaFormulario);
            localStorage.setItem("FORMULARIO", JSON.stringify(formularioLocalStorage));
            document.getElementById("contact").reset();
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'En breve nos pondremos en contacto.',
                showConfirmButton: false,
                timer: 2500
            })
        }
    }
}