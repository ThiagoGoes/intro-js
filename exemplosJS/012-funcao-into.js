let entrada = require('prompt-sync')();

// função sem parametro e sem retorno
function data() {
    const timeElapse = Date.now();
    const hoje = new Date(timeElapse);
    console.log('Hoje é: ' + hoje.toUTCString());
}

// Função sem parametro e com retorno

function caracterAleatorio() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const nAletorio = characters.charAt(Math.floor(Math.random() * (62 - 0) + 0));
    const caracter = characters.charAt(nAletorio);
    return caracter;

}

// função com parametro sem retorno
function olaNome(nome = 'não foi inserido um nome') {
    console.log('Ola ' + nome);
}

// função com parametro com retorno
function soma(n1 = 0, n2 = 0) {
    return  n1 +n2;
}

 // função sem parametro e sem retorno
data();

// Função sem parametro e com retorno
console.log(caracterAleatorio());

// função com parametro sem retorno
olaNome('Thiago');

// função com parametro com retorno
const resultado = soma(1, 2);
console.log(resultado);