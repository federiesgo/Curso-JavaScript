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

function submitFormulario () {    
    formularioLocalStorage = JSON.parse(localStorage.getItem("FORMULARIO")) || [];    
    let datosPersonaFormulario = new constructorFormulario(document.getElementById("nombreContacto").value, document.getElementById("mailContacto").value,
    document.getElementById("telefonoContacto").value, document.getElementById("mensajeContacto").value, formularioLocalStorage.length+1);        
    
    if(datosPersonaFormulario.nombre != "" && datosPersonaFormulario.mail != "" && datosPersonaFormulario.telefono != ""){ 
        formularioLocalStorage.push(datosPersonaFormulario);              
        localStorage.setItem("FORMULARIO", JSON.stringify(formularioLocalStorage));
        document.getElementById("contact").reset();
    }    
}