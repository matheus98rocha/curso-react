const alunos = [
    { nome: 'Matheus', nota: 7.3, bolsista: false },
    { nome: 'Bruno', nota: 4, bolsista: false },
    { nome: 'Chirlene', nota: 8, bolsista: true },
    { nome: 'Karina', nota: 7.3, bolsista: false },
    { nome: 'Lola', nota: 10, bolsista: true },
    { nome: 'Bolsonaro', nota: 0, bolsista: false },
]

const result = alunos.map(e => e.nota).reduce((acumulador, atual) => {
    console.log(acumulador, atual)
    return acumulador + atual;
});

console.log(result);
