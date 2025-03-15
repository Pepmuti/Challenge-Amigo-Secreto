let amigos = [];

function agregarAmigo() {
    let inputNombre = document.getElementById("amigo"); // Captura el campo de entrada
    let nombre = inputNombre.value.trim(); // Elimina espacios en blanco

    if (nombre === "") {
        //El nombre está vacío
        alert("Por favor, inserte un nombre.");
        return;
    } else {
        // El ususario ha ingresado un nombre
        amigos.push(nombre);
        inputNombre.value = ""; // Limpia el campo de entrada
        actualizarLista();
    }
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpia la lista para evitar duplicados

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    
    asignarTextoElemento("#resultado", `El amigo secreto sorteado es: ${amigoSorteado}`);
    
    amigos = [];
    actualizarLista();
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
