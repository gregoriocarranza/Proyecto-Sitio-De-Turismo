

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
        fetch("https://formsubmit.co/ajax/grcarranza@uade", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: NAME,
                message: MESSAGE,
                email: EMAIL,
                Sobre: SUBJECT,
                _template: TEMPLATE
            })
        })
            .then(response => response.json())
            .then(data => {
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
                    footer: '<a href="">Why do I have this issue?</a>',
                    timer: 1500,
                    timerProgressBar: true
                })
            });
    }




}
