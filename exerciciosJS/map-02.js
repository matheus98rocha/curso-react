const carrinho = [
    '{"nome": "Borracha", "preco":3.45}',
    '{"nome": "Caderno", "preco":13.90}',
    '{"nome": "kit de lapis", "preco":41.22}',
    '{"nome": "Caneta", "preco":7.50}'
]

//Convertendo para objeto
const toObjt = (json) => JSON.parse(json);

//Pegando apenas o preço
const onlyPrice = (produto) => produto.preco;

const resultado = carrinho.map(toObjt).map(onlyPrice);

console.log(resultado);
