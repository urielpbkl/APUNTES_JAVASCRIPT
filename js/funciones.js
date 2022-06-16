
//-------------------------------------DECLARAR FUNCIONES USANDO FUNCTION DECLARATION-----------------------------

function sumar(a, b) { //DENTRO DEL PARENTESIS VAN LOS PARÁMETROS
    console.log(a + b)
}

//DENTRO DEL PARÉNTESIS VAN ARGUMENTOS
sumar(10, 3) //LLAMAMOS LA FUNCIÓN

// FUNCIÓN CON PARÁMETROS POR DEFAULT
function multiplicar(a = 0, b = 0) { //DENTRO DEL PARENTESIS VAN LOS PARÁMETROS
    console.log(a * b)
}

//DENTRO DEL PARÉNTESIS VAN ARGUMENTOS
multiplicar(10, 3) //LLAMAMOS LA FUNCIÓN




//-------------------------------------FUNCIONES QUE RETORNAN VALORES--------------------------------------

//PUEDEN RETORNAR DATOS, ARREGLOS Y/U OBJETOS

function restar(a = 0, b = 0) { //DENTRO DEL PARENTESIS VAN LOS PARÁMETROS
    return {
        resultado: a - b,
        mensaje: 'Hola Mundo'
    }     
}

    //EXTRAEMOS LOS ELEMENTOS DEL OBJETO QUE RETORNA LA FUNCIÓN, CON "DESTRUCTURING", RECORDAR QUE PARA HACER ESO, 
    //LAS VARIABLES DEBEN DE TENERO EL MISMO NOMBRE QUE LOS ELEMENTOS DEL OBJETO 
    //DE DONDE ESTAMOS EXTRAYENDO LOS ELEMENTOS
const {resultado, mensaje} = restar(10, 3) //LLAMAMOS LA FUNCIÓN

console.log(resultado)
console.log(mensaje)


//-------------------------------------DECLARAR FUNCIONES USANDO FUNCTION EXPRESSION-----------------------------

//SE DECLARAN COMO SI FUERAN VARIABLES

const dividir = function(a=1, b=1) {
    return a / b
}

const resultadoDividir = dividir(30,10)
console.log(resultadoDividir)


//-------------------------------------------ARROW FUNCTIONS-----------------------------------------------------

//ES TRANSFORMAR LAS FUNCTION EXPRESSION EN UNA FORMA MUCHO MÁS SIMPLICIFADA

const dividirDos = (a=1, b=1) => {
    return a / b
}

const resultadoDividirDos = dividirDos(80,10)
console.log(resultadoDividirDos)

//------------------------------SI SOLAMENTE SE TIENE UNA LÍNEA DE CÓDIGO DENTRO DE LA FUNCIÓN

const dividirTres = (a=1, b=1) => a / b 

//------SI SOLAMENTE SE TIENE UNA LÍNEA DE CÓDIGO DENTRO DE LA FUNCIÓN Y UN PARÁMETRO(Y NO TIENE VALOR POR DEFAULT)

                // PARAMETRO => LO QUE RETORNA
const dividirCuatro = a => a / 10 

const resultadoDividirCuatro = dividirCuatro(70)
console.log(resultadoDividirCuatro)