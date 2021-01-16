let numero = 1;

function exibirProximo() {
    for (let i = 0; i < 10; i++) {
        console.log(numero++);
    }
}

module.exports = { exibirProximo }