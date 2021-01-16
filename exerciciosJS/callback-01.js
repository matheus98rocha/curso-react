const alunos = ["Matheus", "Bruno", "Chirlene"];

const imprimir = (nome, indice) => {
    console.log(`${indice + 1}, ${nome}`);
}

alunos.forEach(imprimir);

