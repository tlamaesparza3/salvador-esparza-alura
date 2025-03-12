// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; // Array para almacenar los nombres de los amigos
let sorteados = [];

function agregarAmigo() { // Función para agregar un amigo a la lista
    let input = document.getElementById("amigo"); // Seleccionar el input
    let nombre = input.value.trim(); // Obtener el valor del input y eliminar los espacios en blanco
    if (nombre === "") { // Si el nombre está vacío
        alert("Por favor, ingresa un nombre válido."); // Mostrar un mensaje de alerta
        return; // Salir de la función
    }

    if (amigos.includes(nombre)) { // Evitar nombres duplicados
        alert(" Este nombre ya ha sido agregado.");
        return;
    }

    amigos.push(nombre); // Agregar el nombre al array de amigos
    actualizarLista(); // Llamar a la función para actualizar la lista
    input.value = ""; // Limpiar el campo de entrada
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    let html = "";
    
    amigos.forEach(nombre => {
        html += `<li>${nombre}</li>`; // Concatenar los elementos a un string
    });
    
    lista.innerHTML = html; // Asignar el HTML a la lista
}


function sortearAmigo() { // Función para sortear un amigo secreto
    if (amigos.length === 0) { // Si no hay amigos en la lista
        alert("No hay nombres para sortear."); // Mostrar un mensaje de alerta
        return; // Salir de la función
    }
    
    if (sorteados.length === amigos.length) { // Verificar si ya se han sorteado todos los nombres
        alert("¡Todos los amigos han sido sorteados! No puedes sortear más."); // Mostrar mensaje de alerta
        return; // Salir de la función
    }

    let nombreSorteado;
    do {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Generar un índice aleatorio
        nombreSorteado = amigos[indiceAleatorio]; // Obtener el nombre sorteado
    } while (sorteados.includes(nombreSorteado)); // Repetir hasta que el nombre no haya sido sorteado

    sorteados.push(nombreSorteado); // Agregar el nombre sorteado al array de sorteados

    let resultadoLista = document.getElementById("resultado"); // Seleccionar el elemento de resultado
    resultadoLista.innerHTML = `<li>🎉 El amigo secreto es: <strong>${nombreSorteado}</strong> 🎉</li>`; // Mostrar el nombre sorteado
}

function reiniciarJuego() { // Función para reiniciar el juego
    amigos = []; // Limpiar el array de amigos
    sorteados = []; // Limpiar el array de sorteados
    document.getElementById("listaAmigos").innerHTML = ""; // Limpiar la lista de amigos
    document.getElementById("resultado").innerHTML = ""; // Limpiar el resultado
    alert("El juego ha sido reiniciado."); // Mostrar un mensaje de alerta
}



