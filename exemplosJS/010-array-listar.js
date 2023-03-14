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

let tamanhoArray = alunos.length;
for (let cont = 0; cont < tamanhoArray; cont++ ){
    console.log((cont + 1) + ' aluno: ');
    console.log('Nome: ' + alunos[cont].nome);
    console.log('Data Nascimento: ' + alunos[cont].dt_nasc);
    console.log('Sexo: ' + alunos[cont].sexo);
    console.log('--------------------------------');
}

// ou fazer como abaixo
for (let cont in alunos) {
    console.log(((parseInt(cont) + 1)) + 'º aluno: ');    
    console.log('Nome: ' + alunos[cont].nome);
    console.log('Data Nascimento: ' + alunos[cont].dt_nasc);
    console.log('Sexo: ' + alunos[cont].sexo);
    console.log('--------------------------------');
}