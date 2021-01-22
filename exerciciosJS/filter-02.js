Array.prototype.filter2 = function (callback) {
    const newArray = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i]);
        }
    }

    return newArray; i
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragril: false },
    { nome: 'Ipad Pro', preco: 4199, fragril: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragril: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragril: false }
]

const fragil = produtos.filter2(e => e.fragril).filter2(e => e.preco >= 500);

console.log(fragil);