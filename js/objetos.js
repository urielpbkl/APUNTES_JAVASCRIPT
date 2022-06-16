
//CREAR OBJETO
const producto = {
    nombre: 'tablet',
    precio: 300,
    disponible: true
}

//EXTRAER VALORES DEL OBJETO
//console.log(producto.precio)

//MOSTRAR LOS DATOS DEL OBJETO EN UNA TABLA
//console.table(producto)

//DESTRUCTURING (SACAR DE UNA ESTRUCTURA), EXTRAE VALOR Y CREA LAS VARIABLES
const { nombre, precio, disponible} = producto //SE TIENEN QUE LLAMAR IGUAL LAS VARIABLES Y LO QUE ESTAMOS EXTRAYENDO

//console.log(nombre)
//console.log(precio)
//console.log(disponible)

//OBJECT LITERAL ENHACEMENT, COLOCA VALORES DENTRO DE UN OBJETO
const autenticado = true
const usuario = 'Uriel'

const nuevoObjeto = {
    autenticado,
    usuario
}

//MOSTRAR LOS DATOS DEL OBJETO EN UNA TABLA
//console.table(nuevoObjeto)


//----------------------------------------MANIPULACIÓN DE OBJETOS-------------------------------------------

//AUNQUE LOS OBJETOS SEAN VARIABLES "const" JAVASCRIPT SI NOS PERMITE MODIFICARLOS


const segundoProducto = {
    nombre: 'Tablet',
    precio: 550,
    disponible: true
}

//REESCRIBIR UN VALOR D EUN OBJETO
segundoProducto.nombre = 'Iphone'

//AGREGAR NUEVO ELEMENTO A UN OBJETO
segundoProducto.imagen  = 'imagen.jpg'

//ELMINAR ELEMENTOS DE UN OBJETO
delete segundoProducto.disponible

console.log(segundoProducto.nombre)
console.table(segundoProducto)