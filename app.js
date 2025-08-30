// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Esta variable contiene los nombres de los amigos
let amigos = [];
let inputNombreAmigo;

function agregarAmigo() {
    inputNombreAmigo = document.getElementById("amigo").value;

    if (inputNombreAmigo === "") {
        alert ("Por favor, inserte un nombre ");
    } else {
        mostrarLista()
        document.getElementById("amigo").value = "";  
    }
}

function mostrarLista (){       
    let lista = document.getElementById("listaAmigos")
    lista.innerHTML="";
    amigos.push(inputNombreAmigo);

    for (let i=0; i < amigos.length; i++){
        let elementoLista= document.createElement("li");
        elementoLista.innerHTML=amigos[i];
        lista.appendChild(elementoLista);
     }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 amigos para sortear");
    }

    else{
    let lista = document.getElementById("listaAmigos")
    let amigoSorteado = Math.floor(Math.random() * amigos.length);
    let mostrarResultado = document.getElementById("resultado");
    mostrarResultado.innerHTML = (`El amigo secreto sorteado es: ${amigos[amigoSorteado]}`);
    lista.innerHTML="";
    amigos=[];
    }   
}