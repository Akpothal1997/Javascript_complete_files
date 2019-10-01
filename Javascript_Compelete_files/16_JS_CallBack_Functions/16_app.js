let sum = (a , b) => {
    return a + b;
};

let mul = (a , b) => {
    return a * b;
};

let calculate = (a , b , calc) => {
    return calc(a , b);
};

console.log(calculate(10,20,sum)); // 30
console.log(calculate(10,20,mul)); // 200
console.log(calculate(10,20,(a , b) => a - b));
console.log(calculate(10,20,(a , b) => a / b));
