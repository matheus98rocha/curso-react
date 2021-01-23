const funcionario = { nome: 'Maria', salario: 12348.99 };
const clone = { ativo: true, ...funcionario };

console.log(clone);

const grupoA = ['Matheus', 'Bruno', 'Lola'];
const grupoB = ['Antonio', 'Chirlene', ...grupoA];

console.log(grupoB);