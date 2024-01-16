let listaDeNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroSecrto();
let tentativas = 1;
 

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Famale', {rete:1.2} );
}

function exibirMensagemInicial() {
    exibirTextoNaTela ('h1','Jogo do Número Secreto');
    exibirTextoNaTela ('p','escolha um Número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1','acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descubriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('h1','Errou');
            exibirTextoNaTela('p','O número secreto é menor!');
        } else{
            exibirTextoNaTela('h1','Errou');
            exibirTextoNaTela('p','O número secreto é maoir');
        }
        tentativas++;
        limparCampo()
    }
    console.log (chute == numeroSecreto);
}

function gerarNumeroSecrto() {
    let numeroEscolido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolido)) {
        return gerarNumeroSecrto();
    } else {
        listaDeNumerosSorteados.push(numeroEscolido);
        console.log (listaDeNumerosSorteados);
        return numeroEscolido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroSecrto()
    limparCampo()
    tentativas = 1;
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled','true');
}