const plus = (x, y) => {
    return x + y;
}

const sub = (x, y) => x - y;

const myName = n => n;



console.log(plus(2, 2));
console.log(sub(7, 5));
console.log(myName("Matheus"));

const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({});
lexico1();
lexico2();


const noneValue = (texto = 'Node') => {
    return (texto);
}

console.log(noneValue());

// Rest
function total(...nums) {
    let total = 0;
    nums.forEach(n => total += n);
    return total;
}

console.log(total(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

function values(...values) {
    return parseInt(Math.max(...values));

}

console.log(values(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

