var seqVitorias = 0;

function iniciar() {
    let elemento = document.getElementsByTagName('section');
    elemento.item(0).style.display = "none";
    elemento.item(1).style.display = "flex";

    let nomeDoPlayer = document.getElementById('nome').value;

    if (nomeDoPlayer != "") {
        document.getElementById('player').innerHTML = nomeDoPlayer;
    }
}

function jogar(escolha) {
    let iconeIA = document.getElementById('icone-ia');
    let iconePlayer = document.getElementById('icone-player');
    let elementoRes = document.getElementById('resultado');

    let numeroIA = randomIA();
    let imgIA = pegarImg(numeroIA);
    let imgPlayer = pegarImg(escolha);
    let res = resultado(numeroIA, escolha);
   
    iconeIA.src = `./assets/images/${imgIA}.png`; //template string
    iconePlayer.src = `./assets/images/${imgPlayer}.png`;

    placar(res);

    if (res === "Você ganhou!") {
        elementoRes.style.color = "#62BE71";

        iconeIA.style.height = "100px";
        iconeIA.style.width = "100px";
        iconeIA.style.color = "#BC2828";
        iconeIA.style.backgroundColor = "rgba(188, 40, 40, 0.2)";

        iconePlayer.style.height = "156px";
        iconePlayer.style.width = "156px";
        iconePlayer.style.color = "#62BE71";
        iconePlayer.style.backgroundColor = "rgba(98, 190, 113, 0.2)";

    } else if (res === "Você perdeu!") {
        elementoRes.style.color = "#BC2828";

        iconeIA.style.height = "156px";
        iconeIA.style.width = "156px";
        iconeIA.style.color = "#62BE71";
        iconeIA.style.backgroundColor = "rgba(98, 190, 113, 0.2)";

        iconePlayer.style.height = "100px";
        iconePlayer.style.width = "100px";
        iconePlayer.style.color = "#BC2828";
        iconePlayer.style.backgroundColor = "rgba(188, 40, 40, 0.2)";
    } else {
        elementoRes.style.color = "#FF9900";

        iconeIA.style.height = "128px";
        iconeIA.style.width = "128px";
        iconeIA.style.color = "#FF9900";
        iconeIA.style.backgroundColor = "rgba(255, 153, 0, 0.2)"

        iconePlayer.style.height = "128px";
        iconePlayer.style.width = "128px";
        iconePlayer.style.color = "#FF9900";
        iconePlayer.style.backgroundColor = "rgba(255, 153, 0, 0.2)"
    }

    elementoRes.innerHTML = res;
}

function randomIA() {
    let numero = (Math.random() * 3); // 1.1111
    return Math.floor(numero); // 1
}

function pegarImg(num) {
    switch (num) {
        case 0:
            return "papel";            
        case 1:
            return "pedra";
        case 2:
            return "tesoura";
    }
}

function resultado(numeroIA, escolhaPlayer) {
    // 0 = papel // 1 = pedra // 2 = tesoura
    switch (numeroIA) {
        case 0: //papel
            if (escolhaPlayer == 2) { //tesoura
                return "Você ganhou!"
            } else if (escolhaPlayer == 1) { // pedra
                return "Você perdeu!"
            } else { //papel
                return "Empatou!"
            }
        case 1://pedra
            if (escolhaPlayer == 0) { //papel
                return "Você ganhou!"
            } else if (escolhaPlayer == 2) { // tesoura
                return "Você perdeu!"
            } else { //pedra
                return "Empatou!"
            }
        case 2: //tesoura
            if (escolhaPlayer == 1) { //pedra
                return "Você ganhou!"
            } else if (escolhaPlayer == 0) { // papel
                return "Você perdeu!"
            } else { //tesoura
                return "Empatou!"
            }
    }
}

function placar(texto) {
    let venceuBool;

    let vitorias = document.getElementById('vitorias');
    let derrotas = document.getElementById('derrotas');
    let empate = document.getElementById('empates');
    let seqVitoriasElemento = document.getElementById('seq-vitorias');
    let totalPartidas = document.getElementById('total-partidas');

    if (texto === "Você ganhou!") {
        vitorias.innerHTML = parseInt(vitorias.innerHTML) + 1;
        venceuBool = true;
    } else if (texto === "Você perdeu!") {
        derrotas.innerHTML = parseInt(derrotas.innerHTML) + 1;
        venceuBool = false;
    } else {
        empate.innerHTML = parseInt(empate.innerHTML) + 1;
    }

    if (venceuBool) {
        seqVitorias = seqVitorias + 1;
        if (seqVitorias >= parseInt(seqVitoriasElemento.innerHTML)) {
            seqVitoriasElemento.innerHTML = seqVitorias;
        }
    } else {
        seqVitorias = 0;
    }

    totalPartidas.innerHTML = parseInt(totalPartidas.innerHTML) + 1;
}

function resetar() {
    let vitorias = document.getElementById('vitorias');
    let derrotas = document.getElementById('derrotas');
    let empate = document.getElementById('empates');
    let seqVitoriasElemento = document.getElementById('seq-vitorias');
    let totalPartidas = document.getElementById('total-partidas');
    let elementoRes = document.getElementById('resultado');
    let iconeIA = document.getElementById('icone-ia');
    let iconePlayer = document.getElementById('icone-player');    

    vitorias.innerHTML = 0;
    derrotas.innerHTML = 0;
    empate.innerHTML = 0;
    seqVitoriasElemento.innerHTML = 0;
    totalPartidas.innerHTML = 0;
    elementoRes.innerHTML = "";
    seqVitorias = 0;
    venceuBool = false;    
    iconeIA.src = `./assets/images/vazio.png`;
    iconePlayer.src = `./assets/images/vazio.png`;
    iconeIA.style.color = "#000000";
    iconeIA.style.height = "128px";
    iconeIA.style.width = "128px";
    iconePlayer.style.color = "#000000";
    iconePlayer.style.height = "128px";
    iconePlayer.style.width = "128px";
}