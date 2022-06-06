
/* creo varios arreglos para los tipos de peliculas, todas, accion, comedia, etc. */
const listaPelis = []
const listaPelisAccion = []
const listaPelisComedia = []
const listaPelisRomance = []

/* Key para el fetch */
const key = "7aac869a"
//var contador = 0

/* Creo un objeto de las caracteristicas de una pelicula */                     //Mas adelante puedo hacer que busque la sinopsis, estrellas, actores y demás
class pelicula {
    constructor(nombre, categoria){                                        //Categoria la obtengo con el select
        this.nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1),
        this.categoria = categoria
    }
    
}


 const agregoDatosModal = (iEsimo) => {              //Le asigno el evento de la funcion con el parametro correspondiente
    let nombre = iEsimo.nombre
    console.log(iEsimo)
    
    fetch(`http://www.omdbapi.com/?t=${nombre.split(" ").join("+")}&apikey=${key}`)
        .then( (response) => response.json() )
        .then( (data) => {
            console.log(data)
            let titulo = document.getElementById("tituloPeli")
            let actores = document.getElementById("actoresPeli")
            let anio = document.getElementById("anioPeli")
            let duracion = document.getElementById("duracionPeli")
            let calificacion = document.getElementById("calificacionPeli")
            let descripcion = document.getElementById("descripcionPeli")
            let img = document.getElementById("imgPeli")
            img.setAttribute("src", data.Poster)
            titulo.innerHTML = data.Title
            actores.innerHTML = data.Actors
            anio.innerHTML = data.Year
            duracion.innerHTML = data.Duration
            calificacion.innerHTML = data.Ratings[0].Value
            descripcion.innerHTML = data.Plot
            
            console.log(titulo)
        }) 
}
/*
   
let nombrePrueba = "pirates of the caribbean" */


/* function crearModal(){
    // Creo elementos html 
    let main = document.getElementsByName("body")
    let modalFade = document.createElement("div")
    let modalDialog = document.createElement("div")
    let modalContent = document.createElement("div")
    let modalHeader = document.createElement("div")
    let modalHeaderH5 = document.createElement("h5")
    let modalHeaderB = document.createElement("button")
    let modalBody = document.createElement("div")
    let modalBodyP1 = document.createElement("p")
    let modalBodyP2 = document.createElement("p")
    let modalBodyP3 = document.createElement("p")
    let modalBodyP4 = document.createElement("p")
    let modalFooter = document.createElement("div")
    let modalFooterB1 = document.createElement("button")
    let modalFooterB2 = document.createElement("button")
     appendChilds 
    modalFade.appendChild(modalDialog)
    modalDialog.appendChild(modalContent)
    modalContent.appendChild(modalHeader)
    modalHeader.appendChild(modalHeaderH5)
    modalHeader.appendChild(modalHeaderB)
    modalBody.appendChild(modalBodyP1)
    modalBody.appendChild(modalBodyP2)
    modalBody.appendChild(modalBodyP3)
    modalBody.appendChild(modalBodyP4)
    
} */

function asd(){

    let main = document.getElementsByClassName("main")
    main[0].insertAdjacentHTML("afterend", `<div></div>`)
}


asd()









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
    addElemento(listaPelis)         //Agrego plantilla

    agregarPelicula(listaPelis, "Pirates of the caribbean", "accion")
    addElemento(listaPelis)    

    agregarPelicula(listaPelis, "Matrix", "accion")
    addElemento(listaPelis)    

    agregarPelicula(listaPelis, "Batman", "accion")
    addElemento(listaPelis)    



    agregarPelicula(listaPelis, "Jack & Jill", "comedia")
    addElemento(listaPelis)    

    agregarPelicula(listaPelis, "Arcane", "accion")
    addElemento(listaPelis)    

    agregarPelicula(listaPelis, "The Vault", "accion")
    addElemento(listaPelis)    

    //listaPelis.map( (el) => el.categoria.charAt[0].toUpperCase())               //No anda(?)
}


const obtenerContenido = () => {
    let nombre = document.getElementById("nombrePeli").value
    let clasificacion = document.getElementById("categoria").value

    agregarPelicula(listaPelis, nombre, clasificacion)
    imprimirPelis(listaPelis)
    addElemento(listaPelis)
}
var contador = 0


function createPlantilla(item, index) {
    let caja = document.createElement("div")
    let nombre = document.createElement("h3")
    let clasificacion = document.createElement("h3")
    nombre.innerHTML = item.nombre
    clasificacion.innerHTML = item.categoria
    caja.className += "plantilla-pelicula"
    caja.appendChild(nombre)
    caja.appendChild(clasificacion)
    caja.setAttribute("data-bs-toggle", "modal")
    caja.setAttribute("data-bs-target", "#exampleModal")
    caja.classList.add(`eventListenerClass${index}`)

    return caja
}

function addElemento(listaPelis){
    /* let main = document.getElementById("plantillas")
    let caja = document.createElement("div")
    let nombre = document.createElement("h3")
    let clasificacion = document.createElement("h3")
    nombre.innerHTML = listaPelis[0].nombre
    clasificacion.innerHTML = listaPelis[0].categoria
    caja.className += "plantilla-pelicula"
    caja.appendChild(nombre)
    caja.appendChild(clasificacion)
    caja.setAttribute("data-bs-toggle", "modal")
    caja.setAttribute("data-bs-target", "#exampleModal")
        
    //contador++
    //caja.classList.add(`eventListenerClass${contador}`)
    //caja.addEventListener("click", agregoDatosModal())                         //Agrego event listener a cada elemento para saber cual abri
    main.appendChild(caja)

    main.lastChild.addEventListener("click", function(){agregoDatosModal({...listaPelis[0]})})     */  //Como paso un parametro a eventListener sin ejecutar la funcion?

    let main = document.getElementById("plantillas")
    main.innerHTML = ""

    listaPelis.forEach((item, index) => {
        const plantillaElement = createPlantilla(item, index)
        main.appendChild(plantillaElement)
        plantillaElement.addEventListener("click", () => {
            agregoDatosModal(item)                              //No le mando la referencia, le mando el elemento en si
        })
    })


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
    arreglo.unshift(peli)
    localStorage.setItem("listaPelis", JSON.stringify(arreglo))
    console.log(JSON.parse(localStorage.getItem("listaPelis")))
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
            if(nombre.toUpperCase().includes(nombre)) {
                let buscador = document.getElementById("buscador")
                let peliEncontrada = document.createElement("div")
                let name = document.createElement("h3")
                let clas = document.createElement("h4")
                let { nombre, categoria } = listaPelis[i]                       //Deconstruccion
                name.innerHTML = nombre
                clas.innerHTML = categoria
                peliEncontrada.appendChild(name)
                peliEncontrada.appendChild(clas)
                peliEncontrada.className += "plantilla-pelicula"
                buscador.appendChild(peliEncontrada)
            }
        }
    }
}

/* Agrego event listener a buscador */
//let enter = document.addEventListener()


/* Cuando inicie, setea el listaPelis según el que está en el localStorage */
let listaParseada = JSON.parse(localStorage.getItem("listaPelis"))
if(listaParseada === "null"){
    console.log("No hay items")
} else {
    for(elemento in listaParseada){
        listaPelis.unshift(listaParseada[elemento])
        addElemento(listaPelis)
    }
}

function formatearLista(){
    localStorage.clear()
    var primero = document.getElementById("plantillas").firstElementChild
    while (primero) {
        primero.remove()
        primero = document.getElementById("plantillas").firstElementChild         //Cuando no tiene child, devuelve false
        //console.log(primero)
    }
}


function eliminarElemento(){
    Swal.fire({
        title: "Estas a punto de eliminar la peli de la lista",
        text: "¿Estas seguro?",
        icon: "warning",
        confirmButtonText: "Eliminar" 
    })
}

function eliminadoExitosamente(){               /* Que esto se muestre dos segundos y se vaya */
    Swal.fire({
        position: 'bottom-end',
        title: "La pelicula ha sido eliminada con exito!",
        icon: "success",
        showConfirmButton: false,
        timer: 1000 
    })
}




/* API que me da descripciones de pelis!! https://www.omdbapi.com/*/
fetch(`http://www.omdbapi.com/?t=pirates+of+the+caribbean&apikey=${key}`)
    .then( (response) => response.json() )
    .then( (data) => console.log("Titulo de la pelicula(?):",data.Title))


/* Solucion facil: Cada vez que agrego una peli, agrego un modal nuevo */

/* Cuando haga click en una peli, voy a modificar el modal que ya existe para que quede con los datos de la peli correspondiente */
/* Agrego listener a cada elemento. Cuando se ejecuta el listener salta el modal y se le modifican los datos por el evento del click. */
/* Tendria que crear muchas funciones o no??? */

/* Como agrego cosas a un json local?? */

/* Libreria o API que traduce el nombre de la peli al ingles para buscarlo en la api (solo admite los titulos originales) */

/* Agregar icono de eliminar que cuando hago click ejecuta la funcion que lo quita de el arreglo y ademas borra el elemento del html */

/* Agregar libreria de alertar para cuando el usuario elimine una peli, te pregunte si estas seguro */

/* Agregar libreria chart.js para crear graficas segun la popularidad de la pelicula obteniendo la informacion con una api */

/* Agregar libreria Luxon para agregarle fecha de subida a cada pelicula. Agregar datos al objeto pelicula */

/* Agregar hora de subida a cada plantilla */

/* Agregar boton de borrar a cada plantilla */

/* Agregar arreglos a localStorage */

/* Agregar boton de resetear y boton de "estas seguro de que eres resetear?" */

/* Crear un const path para la carpeta de imagenes, en una celda de las pelis pongo el nombre de cada archivo imagen correspondiente */

/* Agregar seccion de comentarios de la comunidad a cada pelicula. Puedo usar una ventana modal. */