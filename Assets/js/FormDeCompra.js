
const btnFOrm = document.getElementById("btnFormCompra");

const formNinios = document.getElementById("Niños");
const formAdultos = document.getElementById("Adultos");
const formSouvenir = document.getElementById("souvenirs");
const formCode = document.getElementById("descCode");


const codes = ["ARGENTINACAMPEO2022", "VERANO2022", "PORUN2023SINCOVID", "JUBILADOS2022"]
btnFOrm.onclick = (e) => {
    e.preventDefault()

    FormRegistro()
}

const variablesA0 = () => {
    formNinios.value = ""
    formAdultos.value = ""
    formSouvenir.value = ""
    formCode.value = ""

}


const FormRegistro = (e) => {
    console.log(formNinios.value);
    console.log(formAdultos.value);
    console.log(formSouvenir.checked);
    console.log(formCode.value);

    let NINIOS = parseInt(formNinios.value)
    let ADULTOS = parseInt(formAdultos.value)
    let SOUVENIR = formSouvenir.checked
    let CODE = formCode.value

    // console.log(typeof NINIOS, typeof ADULTOS, typeof SOUVENIR);

    if (NINIOS == 0 && ADULTOS == 0) {
        console.log("NO AS SELECCIONADO NINGUNA ENTRADA");
        Swal.fire({
            icon: 'error',
            title: 'Debes seleccionar al menos una entrada',
            showConfirmButton: true,
            timer: 3000,
            timerProgressBar: true
        })
    } else if (NINIOS != 0 && ADULTOS == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Debe haber un adulto acompañando a los niños, porfavor selecciona una entrada para adultos',
            showConfirmButton: true,
            timer: 3000,
            timerProgressBar: true
        })
    } else {
        let TOTAL = NINIOS + ADULTOS

        if (SOUVENIR) {
            TOTAL += 1700
        }

        codes.forEach(a => {
            console.log(a);
            if (CODE == a) {
                let TODISCOUNT = TOTAL * 0.20
                TOTAL -= TODISCOUNT
            }
        });
        console.log("El total a pagar es de: ", TOTAL);

        Swal.fire({
            icon: 'success',
            title: 'Tu total es de $' + TOTAL,
            text: 'Muchisimas gracias por elegirnos! Recibiras tus entradas en los proximos dias habiles, por consultas escribinos a grcarranza@uade.edu.ar',
            footer: '<a href="../../Contacto.html">Podes escribirnos directamente dede este formulario</a>',
            showConfirmButton: true,
            timer: 10000,
            timerProgressBar: true
        })
    }



}