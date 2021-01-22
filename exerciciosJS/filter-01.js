const produtos = [
    { nome: 'Notebook', preco: 2499, fragril: false },
    { nome: 'Ipad Pro', preco: 4199, fragril: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragril: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragril: false }
]


const fragil = produtos.filter(e => e.fragril).filter(e => e.preco >= 500);

console.log(fragil);