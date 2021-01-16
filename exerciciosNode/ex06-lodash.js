const lodash = require('lodash');

const alunos = [
    {
        nome: 'Matheus',
        nota: 10,
    },
    {
        nome: 'Bruno',
        nota: 0,
    },
    {
        nome: 'Chirlene',
        nota: 8,
    },
    {
        nome: 'Antonio',
        nota: 8,
    },
    {
        nome: 'Lola',
        nota: 10,
    },
]

for (aluno of alunos) {
    if (aluno.nota > 7) {
        console.log(`${aluno.nome} Aprovado`);
    } else {
        console.log(`${aluno.nome} Reprovado`)
    }
}

const media = lodash.sumBy(alunos, 'nota') / alunos.length;
console.log(media)