const notas = [2, 7, 10, 4, 5, 6, 7, 8, 9, 7, 1, 3, 10];

for (nota of notas) {
    if (nota < 7) {
        console.log(nota);
    }
}

notasBaixas = notas.filter(e => e < 7)

console.log(notasBaixas);
