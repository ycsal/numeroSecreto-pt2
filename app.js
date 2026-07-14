let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let listaDeChutes = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Digite um número entre 1 e 10 e tente adivinhar o número secreto!');
}

exibirMensagemInicial();
console.log(numeroSecreto);

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    //Verifica se o chute já foi inserido antes
    if (listaDeChutes.includes(chute)){
        exibirTextoNaTela('p.observacao', `Você já inseriu o número ${chute} antes. Tente outro número!`);
        limparInput();
        return;
    }
    
    exibirTextoNaTela('p.observacao', '');
    listaDeChutes.push(chute);
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Parabéns!');
        let palavraTentativas = tentativas === 1 ? 'tentativa' : 'tentativas';
        let mensagemAcerto = `Você acertou o número secreto com ${tentativas} ${palavraTentativas}!`;
        exibirTextoNaTela('p', mensagemAcerto);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        tentativas++;
        if (chute > numeroSecreto){
            exibirTextoNaTela('h1', 'Errou!');
            exibirTextoNaTela('p', 'O número secreto é menor que ' + chute);
        } else {
            exibirTextoNaTela('h1', 'Errou!');
            exibirTextoNaTela('p', 'O número secreto é maior que ' + chute);
        }
        limparInput();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista === numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if( listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparInput(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    listaDeChutes = [];
    exibirMensagemInicial();
    console.log(numeroSecreto);
    document.getElementById('reiniciar').setAttribute('disabled', true);
    limparInput();
}