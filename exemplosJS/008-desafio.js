// Crie um programa que receba notas de 0 a 10 até que a nota digitada 
// seja a palavra "fim", calcule a média
// e exiba as seguintes mensagens para cada faixa de valores
// nota < 5 = I, nota >= 5 e < 6.5 = R, nota > 6.5 e < 8.5 = B 
// e nota >= 8.5 MB

let entrada = require('prompt-sync')(); 

console.log('Programa de cáculo de notas da ETEC');
let valor, n; 
let cont = 0, soma = 0;

do {
    valor = entrada('Digite a ' + (cont + 1) + 'ª nota ou "fim" para encerrar: ');
    n = parseFloat(valor);
    if (!isNaN(n)){
        soma += n;
        cont++;
    }
} while (valor.toLowerCase() !== 'fim');

if (cont > 0) { // Verificar se houve notas digitadas
    let media = soma / cont;

    console.log(media);

    if (media < 5) {
        valor = 'I';
    } else if (media >= 5 && media < 6.5) {
        valor = 'R';
    } else if (media >= 6.5 && media < 8.5) {
        valor = 'B';
    } else {
        valor = 'MB';
    }

    console.log('A nota final é: ' + valor);
} else {
    console.log('Não foram digitadas notas válidas!');
}
