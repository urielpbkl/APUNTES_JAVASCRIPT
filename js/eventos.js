

//--------------------------------EVENTOS EN EL DOM--------------------------------------------------

//---------------------------------CLICKS

const heading = document.querySelector('.heading') //SELECCIONAMOS POR SU CLASE AL "HEADER"

// PRIMERO VA ELNOMBRE DEL EVENTO Y DESPUÉS LA FUNCIÓN QUE VA A EJECUTARSE UNA VEZ REALIZADO EL EVENTO
heading.addEventListener('click', function() {
    console.log('Diste Click en el header')
})



const enlaceCuatro = document.querySelector('.enlace4')
// PRIMERO VA ELNOMBRE DEL EVENTO Y DESPUÉS TAMBIÉN PODEMOS PONER UN "ARROW FUNCTION"
enlaceCuatro.addEventListener('click', () => { 
    enlaceCuatro.textContent = 'Diste click en este enlace' //CAMBIAMOS LO QUE DICE EL LINK CUANDO LE DAMOS CLICK
})



//---------------------------------INPUTS

const inputNombre = document.querySelector('.nombre')

inputNombre.placeholder = 'Placeholder, desde JS' //PODEMOS MODIFICAR LAS CARACTERÍSTICAS DE LOS ELEMENTOS HTML DESDE JAVASCRIPT


                    // PASAMOS EL EVENTO EN LOS PARAMETROS DE LA FUNCIÓN , PARA USARLO DENTRO DE LA FUNCIÓN
inputNombre.addEventListener('input', (e) => { 
        // "e.target" NOS MANDA EL ELEMENTO HTML EN DONDE SE ESTPA EJECUTANDO EL EVENTO
    heading.textContent = e.target.value //CUANDO COMENCEMOS A ESCRIBIR EN EL INPUT, VAMOS A MOSTRAR LO QUE ESCRIBIMOS, EN EL HEADING
    console.log(e.target) //VEMOS LO QUE TRAE EL e.target
})



//---------------------------------SUBMIT
const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', (e) => { 

    e.preventDefault() //QUITAMOS LA ACIÓN POR DEFAULT QUE EL EVENTO, QUE EN ESTE CASO ES ENVIAR EL FORMULARIO

    heading.textContent = 'Enviaste el Formulario' //CAMBIAMOS LO QUE DICE EL HEADING CUANDO LE DAMOS CLICK A ENVIAR
})