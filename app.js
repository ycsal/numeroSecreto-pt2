let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Digite um número entre 1 e 100 e tente adivinhar o número secreto!');
}

exibirMensagemInicial();
console.log(numeroSecreto);

function verificarChute(){
    let chute = document.querySelector('input').value;
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
    return parseInt(Math.random() * 100 + 1);
}

function limparInput(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    exibirMensagemInicial();
    console.log(numeroSecreto);
    document.getElementById('reiniciar').setAttribute('disabled', true);
    limparInput();
}