console.log('Hello World');

let nome            = 'Thiago';
let idade           = 25;
let trabalha        = true;
let altura_pessoa   = 1.89;
let cores_favoritas = ['roxo, ','preto, ','laranja, ','verde'];
let endereco        = {
    logradouro  : 'Rua',
    nmLog       : 'Teste',
    num         : '100-A',
    bairro      : 'Teste 1'
};
let covid           = null;
let dengue;

console.log('Nome: ' + nome) ;
console.log('Idade: ' + idade);
console.log(' Trabalha: ' +  trabalha);
console.log(' Altura: ' + altura_pessoa);
console.log(Array.isArray(' Cores Favoritas: ' + cores_favoritas));
console.log(Array.isArray(' Dados Endereços: ' + endereco));
console.log('Covid: ' + covid);
console.log('Dengue: ' + dengue);

// console.log(`Seu nome é: ${nome}, sua idade é: ${idade}, trabalha: ${trabalha}`);
// console.log('');
// console.log('----------------------------');
// console.log(`Sua altura é: ${altura}, suas cores favoritas são: ${cores_favoritas}`);
// console.log('');
// console.log('----------------------------');
// console.log(Array.isArray`Seus dados de Endereço são: ${endereco}`);
// console.log('');
// console.log('----------------------------');
// console.log(`Teve Covid: ${covid} e dengue: ${dengue}`);