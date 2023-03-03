let entrada = require('prompt-sync')();

let n, n1, n2;

n = entrada('Digite o 1º valor: ');
n1 = parseInt(n);
n = entrada('Digite o 2º valor: ');
n2 = parseInt(n);

let soma, sub, mult, div, resto;

soma = n1 + n2;
sub = n2 - n2;
mult = n1 * n2;
div = n1 / n2;
resto = n1 % n2;

console.log('Soma:          ' + n1 + ' + ' + n2 + ' = ' + soma);
console.log('Subtração:     ' + n1 + ' - ' + n2 + ' = ' + sub);
console.log('Multiplicação: ' + n1 + ' * ' + n2 + ' = ' + mult);
console.log('Divisão:       ' + n1 + ' / ' + n2 + ' = ' + div.toFixed(2));
console.log('Resto:         ' + n1 + ' % ' + n2 + ' = ' + parseInt(div) + ' (Inteiro da Divisão)');

console.log('');
console.log('Fim do programa!');
entrada();