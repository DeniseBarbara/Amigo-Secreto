//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Lista de amigos
let amigos = [];

// Adiciona um amigo à lista
let adicionarAmigo = function() {
    let inputAmigo = document.getElementById("amigo");
    let nomeAmigo = inputAmigo.value.trim();
    if (nomeAmigo === "") {
        alert("Digite um nome válido!");
        return;
    }
    if (amigos.includes(nomeAmigo)) {
        alert("Esse nome já foi adicionado!");
        return;
    }
    
    amigos.push(nomeAmigo);
    atualizarLista();
    inputAmigo.value = "";
};

// Atualiza a lista de amigos na tela
let atualizarLista = function() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
};

// Embaralha a lista de amigos para o sorteio
let embaralhar = function(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

// Realiza o sorteio do amigo secreto
let sortearAmigo = function() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear!");
        return;
    }
    
    let sorteio = [...amigos];
    embaralhar(sorteio);
    
    let resultado = [];
    for (let i = 0; i < amigos.length; i++) {
        let amigoSecreto = i === amigos.length - 1 ? sorteio[0] : sorteio[i + 1];
        resultado.push(`${sorteio[i]} → ${amigoSecreto}`);
    }
    
    exibirResultado(resultado);
};

// Exibe o resultado do sorteio na tela
let exibirResultado = function(resultado) {
    let listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
    resultado.forEach(par => {
        let li = document.createElement("li");
        li.textContent = par;
        listaResultado.appendChild(li);
    });
};

