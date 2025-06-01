const input = document.querySelector("input"); // Selecciona la caja de texto donde escribes la tarea
const añbtn = document.querySelector(".btn"); // Selecciona el botón para agregar la tarea
const listd = document.querySelector("ul");   // Selecciona la lista donde se mostrarán las tareas

añbtn.addEventListener("click", (e) => { //escucha un evento cuando el usurario le da click al boton y ejecuta la función
    e.preventDefault(); // Evita que el formulario se recargue

    const texto = input.value; // Toma el texto que escribiste
    const li = document.createElement("li"); // Crea un nuevo elemento de lista
    const parrafo = document.createElement("p");   // Crea un párrafo para el texto
    parrafo.textContent = texto;                   // Pone el texto en el párrafo
    li.appendChild(parrafo);                       // Mete el párrafo dentro del elemento de lista
    li.appendChild(eliminar());              // Agrega un botón de eliminar a la tarea
    listd.appendChild(li);                   // Agrega la tarea completa a la lista
});

function eliminar() {
    const btnelimin = document.createElement("button"); // Crea un botón
    btnelimin.textContent = "Eliminar";                 // Le pone el texto "Eliminar"
    btnelimin.className = "btn-eliminar";               // Le da una clase para el estilo

    btnelimin.addEventListener("click", (e) => {        // Cuando haces clic en "Eliminar"...
        const item = e.target.parentElement;            // Busca el elemento de la tarea
        item.remove();                                  // Lo elimina de la lista
    });
    return btnelimin;                                   // Devuelve el botón listo para usar
}

