// Crie um programa que receba duas notas de 0 a 10;
// e exiba as seguintes mensagens para cada faixa de valores;
// nota < 5 = I, nota >= 5 e < 6.5 = R, nota > 6.5 e < 8.5 = B;
// e nota >= 8.5 MB

let entrada = require('prompt-sync')();

let n, n1, n2, media;

n = entrada('Digite a 1º nota: ');
n1 = parseFloat(n);
n = entrada('Digite a 2º nota: ');
n2 = parseFloat(n);

media = (n1 + n2)/2

if (media < 5) {
    console.log('Sua nota é: I');,

}else if (media >= 5 && media <6.5) {
    console.log('Sua nota é: R');

}else if (media > 6.5 && media <8.5) {
    console.log('Sua nota é: B');
    
}else{
    console.log('Sua nota é: MB');
}

console.log('');
console.log('Fim do programa!');
entrada();