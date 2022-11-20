

const btnFOrm = document.getElementById("btnEnviarForm");

const formName = document.getElementById("name");
const formSubject = document.getElementById("subjet");
const formEmail = document.getElementById("email");
const formMessage = document.getElementById("message");
const formTemplate = document.getElementById("_template");
const FormNext = document.getElementById("_next");


btnFOrm.onclick = (e) => {
    e.preventDefault()

    FormRegistro()
}

const variablesA0 = () => {
    formName.value = ""
    formEmail.value = ""
    formSubject.value = ""
    formMessage.value = ""

}

const FormRegistro = (e) => {
    console.log(formName.value);
    console.log(formEmail.value);
    console.log(formSubject.value);
    console.log(formMessage.value);

    let NAME = formName.value
    let EMAIL = formEmail.value
    let SUBJECT = formSubject.value
    let MESSAGE = formMessage.value
    let TEMPLATE = formTemplate.value

    if (NAME == "" || EMAIL == "" || MESSAGE == "") {
        Swal.fire({
            icon: 'error',
            title: 'No deben quedar campos vacios!',
            showConfirmButton: true,
            timer: 3000,
            timerProgressBar: true
        })
    } else if (SUBJECT == "") {
        Swal.fire({
            icon: 'error',
            title: 'Debes seleccionar un Servicio por el cual consultar',
            showConfirmButton: true,
            timer: 3000,
            timerProgressBar: true
        })

    } else {
        fetch("https://formsubmit.co/ajax/68727c6a182fbe5331d81eb3e805e9a6", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                Consula: SUBJECT,
                Nombre: NAME,
                Email: EMAIL,
                Mensaje: MESSAGE,

                _template: TEMPLATE
            })
        })
            .then(response => response.json())
            .then(data => {
                variablesA0()
                console.log(data)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Enviado Correctamente',
                    text: 'Tu consulta a sido enviada correctamente',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true
                })
            })
            .catch(error => {
                console.log(error)
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Parece que algo a salido mal con el envio de tu consulta, recarga la pagina o intenta de nuevo mas adelante',
                    footer: '<a href="">Porque estoy Teniendo este problema?</a>',
                    timer: 1500,
                    timerProgressBar: true
                })
            });
    }




}
