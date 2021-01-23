const obj = { a: 1, b: 2, c: 3 };

console.log(Object.values(obj));
console.log(Object.keys(obj));


const myName = 'Matheus';

const pessoa = {
    myName,
    ola() {
        return `Olá ${myName}`
    }
}

console.log(pessoa.myName, pessoa.ola());

class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Cachorro extends Animal {
    falar() {
        return 'Au Au'
    }
}

console.log(new Cachorro("Lola"));
console.log(new Cachorro().falar);