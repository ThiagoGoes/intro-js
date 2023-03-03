// Chamando a biblioteca que será utilizada
let entrada = require('prompt-sync')();

let nome = entrada('Digite seu nome: ');
console.log('Nome Digitado: ' + nome);

// Toda entrada é String
let n1 = entrada('Digite um numero: ');
let n2 = entrada('Digite outro numero: ');

let soma = parseInt(n1) + parseInt(n2);

console.log('A soma do nº: ' + n1 + ' com o nº ' + n2 + ' inserido é: ' + soma);

entrada();
console.log('Fim do programa');