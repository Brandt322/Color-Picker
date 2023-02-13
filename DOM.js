/*Accedemos al DOM a traves del document*/

// console.log(document.head) //para mostrar el head
// console.log(document.title) //para mostrar el titulo de la pagina
// console.log(document.body) //para mostrar el body
// console.log(document.domain) //para  mostrar la ip de la pagina

// /*El método getElementById recupera un elemento por su ID DOM*/
// console.log(document.getElementById("titulo")) //muestra el elemento h1 con sus propiedades
// console.log(document.getElementById("titulo").textContent) //muestra el contenido del elemento h1
// console.log(document.getElementById("titulo").innerHTML) //muestra el contenido elemento h1

//     Por si usamos el script en el head y no en el final del body
// document-addEventListener("DOMContentLoaded", () => {
//     console.log(document.getElementById("titulo")) //muestra el elemento h1 con sus propiedades
//     console.log(document.getElementById("titulo").textContent) //muestra el contenido del elemento h1
// });

// /*querySelector(), permite recuperar un elemento mediante una consulta de selector de Css, siempre selecciona el primer elemento que coincida con el selector que se ingresa*/

// console.log(document.querySelector("#titulo")) //muestra el elemento h1 con sus propiedades mediante un selector de tipo id

// console.log(document.querySelector(".titulo-clase")) //muestra el elemento h1 con sus propiedades mediante un selector de tipo clase

// console.log(document.querySelector("h1")) //muestra el elemento h1 con sus propiedades mediante un selector de tipo h1

// /*querySelectorAll() puede seleccionar a todos los elementos que coincida con el selector que se ingresa*/

// console.log(document.querySelectorAll(".text-danger")) // muestra a todos los elementos con clase text-danger

// /*Para ser mas especifico y solo seleccionar a los elementos de un bloque que comparten el mismo class, usamos el concepto de especificidad*/
// console.log(document.querySelectorAll(".container .text-danger")) // muestra a todos los elementos con clase text-danger

//
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//

// /*Podemos guardar los elementos en variables para reutilizarlos y acceder a ellos*/
// const h1 = document.getElementById("titulo")

// console.log(h1.className) //className muestra la clase que tiene el h1
// console.log(h1.id) //muestra el id que tiene el h1
// console.log(h1.style) //muestra los estilos que tiene el h1
// console.log(h1.tagName) //muestra que nombre de etiqueta tiene
// console.log(h1.textContent) //muestra el contenido del h1

// /*Tambien podemos modificar las propiedades*/

// h1.textContent = "Nuevo contenido desde Js";
// h1.style.backgroundColor = "purple"
// h1.style.color = "white"

/*
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

/*
    Eventos
    Es una accion del usuario por la cual puede realizar algun proceso, la accion no altera el html.

    addEventListener: Registra un evento a un objeto en especifico, puede ser un simple elemento de un archivo, el mismo documento, una ventana o un XMLHttpRequest.

    Forma estandar de llamar a definir un evento:

    target.addEventListener(tipoDeEvento, listener que acepta una funcion declarativa, expresiva o flecha)

    o tambien:

    document.addEventListener(tipoDeEvento, function() {

    })
*/

/*Evento click*/
// const h1 = document.getElementById("titulo");
// const boton = document.querySelector(".btn");

//console.log(boton)

// boton.addEventListener("click", () => {
//   console.log("Me diste click");
//   h1.textContent = "Texto desde Js";
//   h1.style.color = "red";
// });


/*Practicando: Al dar click en el boton visualizar, que se cambie el texto del parrafo indicando el nuevo color, y que tambien se cambie el color del div card*/

const inputColor = document.querySelector("#inputColor")
const boton = document.querySelector("#btnVisualizar");
const parrafo = document.querySelector("#parrafo");
const cardColor = document.querySelector("#cardColor")
console.log(inputColor.value)

boton.addEventListener("click", () => {
    console.log("Me diste click perro");

    //Para el parrafo
    let nuevoColorParrafo = inputColor.value; //alamacena el valor del color cuando le damos click
    parrafo.textContent = nuevoColorParrafo; //asignamos el nuevo valor del color como nuevo contenido del parrafo
    console.log(inputColor.value)

    //Para la caja
    cardColor.style.backgroundColor = inputColor.value; //asignamos el nuevo valor del color al background del div cardColor
    
})