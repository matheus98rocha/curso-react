function Carro(velocidadeMax = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0;

    //metodo publico
    this.acelerar = () => {
        if (velocidadeAtual + delta <= velocidadeMax) {
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = velocidadeMax;
        }
    }

    //metodo publico
    this.getVelocidadeAtual = () => {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());

console.log(typeof (Carro))
console.log(typeof (ferrari))
