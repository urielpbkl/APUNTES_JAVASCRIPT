
//CREAR UN ARRAY
const tecnologias = [20, true, 'react', 'javascript']

console.table(tecnologias)

//SELECCIONAR EL TERCER ELEMENTO DEL ARRAY, USANDO SU INDEX
//console.log(tecnologias[2]) 



//AÑADIR ELEMENTOS AL ARRAY
const nuevoArreglo = [...tecnologias, 'Python']; //USAMOS EL SPREAD OPERATOR(...) QUE COPIA EL ARREGLO ORIGINAL Y AÑADE ELEMENTOS AL FINAL
const nuevoArregloDos = ['Python', ...tecnologias]; //USAMOS EL SPREAD OPERATOR(...) QUE COPIA EL ARREGLO ORIGINAL Y AÑADE ELEMENTOS AL INICIO



//ELIMINAR ELEMENTOS AL ARRAY
const quitarElementoArray = tecnologias.filter( function (tech) {
    return tech === 'react'
})


//REEMPLAZAR ELEMENTOS DEL ARRAY
const reemplazarElementArray = tecnologias.map( function (tech) {
    if (tech === 'react') {
        return 'PHP'
    } else{
        return tech
    }
})


//DESTRUCTURING DE ARRAYS

const frameWorks = ['bootstrap', 'tailwind', 'reactjs', 'nodejs']

const [var1, var2, var3, var4] = frameWorks //SE EXTRAEN LOS VALORES, SEGÚN LA POSICIÓN

console.table(var3) //reactjs


//-----------------------------------------ITERADORES DE ARRAYS----------------------------------------------

//PERMITE CREAR UN NUEVO ARREGLO
const arrayMap = tecnologias.map(function (framework) {
    return framework    
})

console.log(arrayMap)