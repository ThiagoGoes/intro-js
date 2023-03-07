/*
    CRIAR UM PROGRAMA QUE RECEBA DOIS VALORES, O INICIAL E O FINAL
    SE O VALOR INICIAL FOR MENOR QUE O FINAL EXIBA UMA CONTAGEM CRESCENTE 
    SE O VALOR INICIAL FOR MAIOR QUE O FINAL EXIBA A CONTAGEM DECRESCENTE 
    DICA: TENTE UTILIZAR A ESTRUTURA DO WHILE.
*/

let entrada = require('prompt-sync')(); 

console.log('REPETIÇÃO');
let valor;
valor = entrada('Insira o valor inicial: ');
let n1 = parseInt(valor);
valor = entrada('Insira o valor final: ');
let n2 = parseInt(valor);


if (n1 < n2) {
    let i = n1;
    do {
        console.log(i);
        i++;

    } while (i <= n2);

}else if (n1 > n2) {
    let i = n1;
    do {
        console.log(i);
        i--;
    } while (i >= n2);
} else {
    console.log('Os valores são iguais');
}