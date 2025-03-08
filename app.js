let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    inputAmigo.value = "";
}

function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    
    amigos.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto es: ${amigos[indiceAleatorio]}</li>`;
}
