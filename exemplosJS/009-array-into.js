console.log('Exemplo array');
let notas = [9, 8.5, 7];
console.log(notas);

console.log('1ª nota: ' + notas[0]);
console.log('2ª nota: ' + notas[1]);
console.log('3ª nota: ' + notas[2]);

// Editar posição  do Array
notas[0] = 'MB';
notas[1] = 'MB';
notas[2] = 'B';
console.log('Notas convertidas: ');
console.log(notas[0] + ' - ' + notas[1] + ' - ' + notas[2]);
console.log('');
console.log('Dados Alunos');
let alunos = [
    {
        nome: 'Sebastião da silva',
        dt_nasc: '11/11/1957',
        sexo: 'M'
    },

    {
        nome: 'Sebastiana da silva',
        dt_nasc: '11/11/1959',
        sexo: 'F'
    },

    {
        nome: 'Tião da silva',
        dt_nasc: '11/11/1977',
        sexo: 'M'
    },

    {
        nome: 'Tiana da silva',
        dt_nasc: '11/11/1977',
        sexo: 'F'
    },
];
console.log('');
console.log(alunos);
console.log('Dados do 3º aluno: ');
console.log('Nome: ' + alunos[2].nome);
console.log('Data Nascimento: ' + alunos[2].dt_nasc);
console.log('Sexo: ' + alunos[2].sexo);