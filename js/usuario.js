//Definimos al objeto usuario

function Usuario(nombre, apellidos, correo, telefono, mensaje) {
    // Propiedades
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.correo = correo;
    this.telefono = telefono;
    this.mensaje = mensaje;
}


//Creamos un array de usuarios

var array = [];

//Función para añadir un nuevo usuario con los valores ingresados en el formulario al array

function añadirUsuario() {

    let nombre = document.fvalida.nombre.value;
    let apellidos = document.fvalida.apellidos.value;
    var email = document.fvalida.email.value;
    const telefono = document.fvalida.telefono.value;
    var mensaje = document.fvalida.mensaje.value;

    var newUser = new Usuario(nombre, apellidos, email, telefono, mensaje);

    array.push(newUser);


}