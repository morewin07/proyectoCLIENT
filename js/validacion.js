//Función que valida formulario de contacto

function valida_envia() {
    //valido el nombre

    let str = document.fvalida.nombre.value;

    for (let i = 0; i < str.length; i++) {
        console.log(str.charAt(i));
        if (!isNaN(str.charAt(i)) || str.length == 0) { //Si en la cadena hay un número o está vacía hace lo siguiente:
            alert("Tiene que escribir su nombre correcto")
            document.fvalida.nombre.focus()
            return 0;
        }
    }
    if (str.length == 0) {
        alert("Tiene que escribir su nombre")
        document.fvalida.nombre.focus()
        return 0;
    }


    //valido los apellidos

    let str2 = document.fvalida.apellidos.value;

    for (let i = 0; i < str2.length; i++) {
        console.log(str2.charAt(i));
        if (!isNaN(str2.charAt(i)) || str2.length == 0) { //Si en la cadena hay un número o está vacía hace lo siguiente:
            alert("Tiene que escribir sus apellidos correctos")
            document.fvalida.apellidos.focus()
            return 0;
        }
    }
    if (str2.length == 0) {
        alert("Tiene que escribir sus apellidos")
        document.fvalida.apellidos.focus()
        return 0;
    }

    //valido el mail

    var email = document.fvalida.email.value;

    //Testeamos el mail introducido con la expresión regular
    re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    if (!re.exec(email)) {
        alert("Tiene que escribir un email correcto")
        document.fvalida.email.focus()
        return 0;
    }
    if (email.length == 0) {
        alert("Tiene que escribir su email")
        document.fvalida.email.focus()
        return 0;
    }

    //valido el teléfono

    const valor = document.fvalida.telefono.value;

    const contarNum = str => (str.toString().match(/[0-9]/g) || []).length;

    if (isNaN(valor) || contarNum(valor) < 9) {
        alert("Tiene que escribir un teléfono correcto")
        document.fvalida.telefono.focus()
        return 0;
    }
    if (valor.length == 0) {
        alert("Tiene que escribir su teléfono")
        document.fvalida.telefono.focus()
        return 0;
    }

    //Valido que se ha introducido un mensaje


    let msj = document.fvalida.mensaje.value;

    if (msj.length == 0) {
        alert("Tiene que escribir un mensaje")
        document.fvalida.email.focus()
        return 0;
    }


    //Si no ha habido ninguna alerta, se envía el formulario

    alert("Muchas gracias por enviar el formulario");
    document.fvalida.submit();

}










//Función que valida formulario de reserva

function valida_envia2() {
    //valido el nombre

    let str = document.fvalida.nombre.value;

    for (let i = 0; i < str.length; i++) {
        console.log(str.charAt(i));
        if (!isNaN(str.charAt(i)) || str.length == 0) { //Si en la cadena hay un número o está vacía hace lo siguiente:
            alert("Tiene que escribir su nombre correcto")
            document.fvalida.nombre.focus()
            return 0;
        }
    }
    if (str.length == 0) {
        alert("Tiene que escribir su nombre")
        document.fvalida.nombre.focus()
        return 0;
    }


    //valido los apellidos

    let str2 = document.fvalida.apellidos.value;

    for (let i = 0; i < str2.length; i++) {
        console.log(str2.charAt(i));
        if (!isNaN(str2.charAt(i)) || str2.length == 0) { //Si en la cadena hay un número o está vacía hace lo siguiente:
            alert("Tiene que escribir sus apellidos correctos")
            document.fvalida.apellidos.focus()
            return 0;
        }
    }
    if (str2.length == 0) {
        alert("Tiene que escribir sus apellidos")
        document.fvalida.apellidos.focus()
        return 0;
    }

    //valido el mail

    var email = document.fvalida.email.value;

    //Testeamos el mail introducido con la expresión regular
    re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    if (!re.exec(email)) {
        alert("Tiene que escribir un email correcto")
        document.fvalida.email.focus()
        return 0;
    }
    if (email.length == 0) {
        alert("Tiene que escribir su email")
        document.fvalida.email.focus()
        return 0;
    }

    //valido el teléfono

    const valor = document.fvalida.telefono.value;

    const contarNum = str => (str.toString().match(/[0-9]/g) || []).length;

    if (isNaN(valor) || contarNum(valor) < 9) {
        alert("Tiene que escribir un teléfono correcto")
        document.fvalida.telefono.focus()
        return 0;
    }
    if (valor.length == 0) {
        alert("Tiene que escribir su teléfono")
        document.fvalida.telefono.focus()
        return 0;
    }


    //Valido que se ha introducido un mensaje


    let msj = document.fvalida.mensaje.value;

    if (msj.length == 0) {
        alert("Tiene que escribir un mensaje con el día y hora de reserva")
        document.fvalida.email.focus()
        return 0;
    }

    //Si no ha habido ninguna alerta, se envía el formulario

    alert("Muchas gracias por su petición, le responderemos lo antes posible.");
    document.fvalida.submit();

}