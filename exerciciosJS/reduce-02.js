const alunos = [
    { nome: 'Matheus', nota: 7.3, bolsista: false },
    { nome: 'Bruno', nota: 4, bolsista: false },
    { nome: 'Chirlene', nota: 8, bolsista: true },
    { nome: 'Karina', nota: 7.3, bolsista: false },
    { nome: 'Lola', nota: 10, bolsista: true },
    { nome: 'Bolsonaro', nota: 0, bolsista: false },
]

//Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
const result = alunos.map(e => e.bolsista).reduce((todosBolsistas));
console.log(result)

//Algum aluno é bolsista?

const todosBolsistas2 = (resultado, bolsista) => resultado || bolsista
const result2 = alunos.map(e => e.bolsista).reduce((todosBolsistas2));
console.log(result2)