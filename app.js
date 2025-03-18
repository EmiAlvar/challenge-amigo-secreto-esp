//array
let listaAmigos = [];

//funciones
    //funcion para agregar nombres a una lista visible en pantalla
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    let lista = document.getElementById("listaAmigos");

    if (nombre) {
        listaAmigos.push(nombre);
        //uso de for
        for (let i = 0; i < listaAmigos.length; i++);
        let nuevoElemento = document.createElement("ul");
        nuevoElemento.innerHTML = nombre;
        lista.appendChild(nuevoElemento);
        // limpia después de presionar añadir
        input.value = "";
        //si se presiona el boton sin escribir nada
    } else {
        alert("Por favor, escribe un nombre valido.");
    }
    
}

//funcion para sortear amigo
function sortearAmigo() {
    // verifica si la lista esta vacia
    if (listaAmigos.length === 0) {
        alert("Por favor, escribe el nombre de tus amigos.");
        //cuando ya se han añadido nombres a la lista
    } else {
        //Define nombre aleatorio
        let nombreAmigo = Math.floor(Math.random() * listaAmigos.length);
        let amigoAleatorio = listaAmigos[nombreAmigo];
        //muestra el nombre sorteado
        document.getElementById("resultado").innerHTML = "Su amigo secreto es: " + amigoAleatorio;

}

}
