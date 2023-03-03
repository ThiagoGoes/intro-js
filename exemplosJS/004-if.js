let entrada = require('prompt-sync')();

let idade = entrada('Digite sua Idade: ');

if (idade === 18) {
    console.log('Você tem idade para carteira de habilitação');
} 
if (idade > 18) {
    console.log('Você já poderia estar dirigindo se tivesse habilitação');
}
if (idade < 18){
    console.log('Você só anda de carona');
}

console.log('');
console.log('Fim do PRograma!');
entrada();