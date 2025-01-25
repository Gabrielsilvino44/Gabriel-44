//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// variaveis.
let arrayDeAmigos = [];
let listaDeAmigos = document.querySelector("#listaAmigos");
let resultadoLista = document.querySelector("#resultado");
// Funçao quem adiciona um amigo
function adicionarAmigo() {
    let amigo = (document.querySelector('input').value);
    // if e else para gerar a comperaçao de nomes e verificao se foi digitado um nome.
    if (arrayDeAmigos.includes(amigo)) {
        alert('Este nome já esta na lista, por favor adicione outro');
        return
    }
    else if (amigo == "") {
        alert('voce ainda nao adiciou um nome');
        return
    }
    else {
        arrayDeAmigos.push(amigo);
        console.log(`${arrayDeAmigos}`);
        renderizarListaDeAmigos(amigo);
    }
}
// funçao para mostar os nomes e limpar a array para nao gerar duplicidade.
function renderizarListaDeAmigos() {
    listaDeAmigos.innerHTML = "";
    for (let indice = 0; indice < arrayDeAmigos.length; indice++) {
        listaDeAmigos.innerHTML += '<li>' + arrayDeAmigos[indice] + '</li>';
    }
}
// funçao que faz o sorteio do nome aleatorio.
function sortearAmigo() {
    let numeroAleatorio = Math.floor(Math.random() * arrayDeAmigos.length);
    resultadoLista.innerHTML = arrayDeAmigos[numeroAleatorio];
}
