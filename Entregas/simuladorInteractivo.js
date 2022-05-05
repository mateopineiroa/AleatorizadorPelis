
/* creo varios arreglos para los tipos de peliculas, todas, accion, comedia, etc. */
const listaPelis = []
const listaPelisAccion = []
const listaPelisComedia = []
const listaPelisRomance = []

/* Creo un objeto de las caracteristicas de una pelicula */                     //Mas adelante puedo hacer que busque la sinopsis, estrellas, actores y demás
class pelicula{
    constructor(nombre, categoria){                                        //Categoria la obtengo con el select
        this.nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1),                                      //Capitalize: 
        this.categoria = categoria
    }
}





/* Funcion que me devuelve un elemento al azar entre a y b */
function elementoAlAzar (a,b){              //Devuelve un numero al azar entre a y b
    return a + Math.round(Math.random()*(b-a))
}

/* Funcion que me devuelve una pelicula al azar */
/* luego se lo asigno al texto de html de la pagina */
function devuelvePeli(arreglo){
    return arreglo[ elementoAlAzar(0,arreglo.length-1) ]
}

/* Boton randomizador */
const RandomizadorInador = () => {
    if(listaPelis.length == 0 ){
        
    } else {
        let nombreAzar = document.getElementById("nombreAzar")
        let clasificacionAzar = document.getElementById("clasificacionAzar")
        let peliculita = devuelvePeli(listaPelis)
        nombreAzar.innerHTML = peliculita.nombre
        clasificacionAzar.innerHTML = peliculita.categoria
    }
}

const AgregarPelisPorDefecto = () => {
    agregarPelicula(listaPelis, "The wolf of wall street", "Accion") 
    agregarPelicula(listaPelis, "Piratas del Caribe", "accion")
    agregarPelicula(listaPelis, "Matrix", "accion")
    agregarPelicula(listaPelis, "Batman", "accion")
    agregarPelicula(listaPelis, "Cumbres Borroscosas", "romance")
    agregarPelicula(listaPelis, "Jack & Jill", "comedia")
    agregarPelicula(listaPelis, "Arcane", "accion")
    agregarPelicula(listaPelis, "The Vault", "accion")
    //listaPelis.map( (el) => el.categoria.charAt[0].toUpperCase())               //No anda(?)
}


const obtenerContenido = () => {
    let nombre = document.getElementById("nombrePeli").value
    let clasificacion = document.getElementById("categoria").value

    agregarPelicula(listaPelis, nombre, clasificacion)
    imprimirPelis(listaPelis)
    addElemento(listaPelis)
}

function addElemento(listaPelis){
    let main = document.getElementById("plantillas")
    let caja = document.createElement("div")
    let nombre = document.createElement("h3")
    let clasificacion = document.createElement("h3")
    nombre.innerHTML = listaPelis[0].nombre
    clasificacion.innerHTML = listaPelis[0].categoria
    caja.className += "plantilla-pelicula"
    caja.appendChild(nombre)
    caja.appendChild(clasificacion)
    main.appendChild(caja)
}






function imprimirPelis(array){
    for(const peli of listaPelis){
        console.log(peli)
    }
}


/* cuando haga click, que agregue una peli a la lista general y a la lista del genero correspondiente */
/* Quiero que cada elemento del arreglo sea un objeto */
function agregarPelicula(arreglo, nombre, categoria){

        let peli = new pelicula(nombre, categoria)                              //como es let, la variable peli existe solo dentro de la function?
        switch (peli.categoria.toUpperCase()) {
            case "ACCION":
            listaPelisAccion.push(peli)
            break;
            case "COMEDIA":
                listaPelisComedia.push(peli)
            break;
        case "ROMANCE":
            listaPelisRomance.push(peli)
            break;
            default:
                console.log("Error: La categoria no coincide con accion, ni comedia ni romance.")
                console.log("No se podrá agregar a la lista de su genero correspondiente.")
                break;
            }
            return arreglo.unshift(peli)
    
}


/* Buscador de pelis. */                //Ingreso texto. Busca objeto por objeto y compara el string ingresado con los nombres de cada uno.
//Cambio a mayuscula, manejo diferencias de tildes y comparo fracciones de strings
function buscarPelicula(){
    let nombre = document.getElementById("busca").value.toUpperCase()
    var primero = document.getElementById("buscador").firstElementChild
    while (primero) {
        primero.remove()
        primero = document.getElementById("buscador").firstElementChild         //Cuando no tiene child, devuelve false
    }
    if(nombre.length != 0){
        let i = 0
        for(let i = 0; i<listaPelis.length; i++){
            if(listaPelis[i].nombre.toUpperCase().includes(nombre)) {
                let buscador = document.getElementById("buscador")
                let peliEncontrada = document.createElement("div")
                let name = document.createElement("h3")
                let clas = document.createElement("h4")
                name.innerHTML = listaPelis[i].nombre
                clas.innerHTML = listaPelis[i].categoria
                peliEncontrada.appendChild(name)
                peliEncontrada.appendChild(clas)
                peliEncontrada.className += "plantilla-pelicula"
                buscador.appendChild(peliEncontrada)
            }
        }
    }
}
/* const palabra = "wall"
if( buscarPelicula(listaPelis, palabra)){
    console.log("FUNCIONA!!")
} else {
    console.log("aun no bro")
} */


/* Agregar lista a localStorage */

/* Agregar hora de subida a cada plantilla */

