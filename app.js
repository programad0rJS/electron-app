/// Selecionamos Y Creamos Un Evento Blur y Una Funcion
document.getElementById('firstName').addEventListener('blur', validateFN)
document.getElementById('lastName').addEventListener('blur', validateLN)
document.getElementById('email').addEventListener('blur', validateEmail)
document.getElementById('phone').addEventListener('blur', validatePhone)
document.getElementById('zip').addEventListener('blur', validateZip)


function validateFN() {
    // Creamos Una Variable Y Seleccionamos 
    const firstName = document.getElementById('firstName');
    // Creamos Un Expression Regular  Que se Guarde En Un Variable
    const re = /^[a-zA-Z]{2,8}$/;


    //  El método test() ejecuta la búsqueda de una ocurrencia entre una expresión regular y una cadena especificada. Devuelve true o false. 
    //  value = obtenemos El Valor  Que Escribe El Usuario 
    // classList.add = Agrega Css 
    // classList.remove = Elimina Css



    if (!re.test(firstName.value)) {
        firstName.classList.add('is-invalid');
        firstName.classList.remove('is-valid');
    } else {
        firstName.classList.add('is-valid');
        firstName.classList.remove('is-invalid');
    }
}
function validateLN() {
    // Creamos Una Variable Y Seleccionamos 
    const lastName = document.getElementById('lastName');
    // Creamos Un Expression Regular  Que se Guarde En Un Variable
    const re = /^[a-zA-Z]{2,8}$/

       //  El método test() ejecuta la búsqueda de una ocurrencia entre una expresión regular y una cadena especificada. Devuelve true o false. 
    //  value = obtenemos El Valor  Que Escribe El Usuario 
    // classList.add = Agrega Css 
    // classList.remove = Elimina Css


    if (!re.test(lastName.value)) {
        lastName.classList.add('is-invalid');
        lastName.classList.remove('is-valid');
    } else {
        lastName.classList.add('is-valid');
        lastName.classList.remove('is-invalid');
    }
}
function validateEmail() {
     // Creamos Una Variable Y Seleccionamos 
    const email = document.getElementById('email');
    // Creamos Un Expression Regular  Que se Guarde En Un Variable
    const re = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.]+)\.[a-zA-Z]{2-5}$/
       //  El método test() ejecuta la búsqueda de una ocurrencia entre una expresión regular y una cadena especificada. Devuelve true o false. 
    //  value = obtenemos El Valor  Que Escribe El Usuario 
    // classList.add = Agrega Css 
    // classList.remove = Elimina Css

    if (!re.test(email.value)) {
        email.classList.add('is-invalid');
        email.classList.remove('is-valid');
    } else {
        email.classList.add('is-valid');
        email.classList.remove('is-invalid');
    }
}
function validatePhone() {
    // Creamos Una Variable Y Seleccionamos 
    const phone = document.getElementById('phone');
    // Creamos Un Expression Regular  Que se Guarde En Un Variable

    const re = /^\(?\d{3}\)?[-.]?\d{3}[-.]?\d{4}$/

       //  El método test() ejecuta la búsqueda de una ocurrencia entre una expresión regular y una cadena especificada. Devuelve true o false. 
    //  value = obtenemos El Valor  Que Escribe El Usuario 
    // classList.add = Agrega Css 
    // classList.remove = Elimina Css

    if (!re.test(phone.value)) {
        phone.classList.add('is-invalid');
        phone.classList.remove('is-valid');
    } else {
        phone.classList.add('is-valid');
        phone.classList.remove('is-invalid');
    }
}
function validateZip() {
    // Creamos Una Variable Y Seleccionamos 
    const zip = document.getElementById('zip');
    // Creamos Un Expression Regular  Que se Guarde En Un Variable
    const re = /^[0-9]{5}(-[0-9])?$/

       //  El método test() ejecuta la búsqueda de una ocurrencia entre una expresión regular y una cadena especificada. Devuelve true o false. 
    //  value = obtenemos El Valor  Que Escribe El Usuario 
    // classList.add = Agrega Css 
    // classList.remove = Elimina Css

    if (!re.test(zip.value)) {
        zip.classList.add('is-invalid');
        zip.classList.remove('is-valid');
    } else {
        zip.classList.add('is-valid');
        zip.classList.remove('is-invalid');
    }
}