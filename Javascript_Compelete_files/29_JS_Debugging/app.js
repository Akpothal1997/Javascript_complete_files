let number = 5;
let output = '';
for(let i = 1; i<= number; i++){
    for(let j = 1; j <= i; j++){
        output += '*';
    }
    output += '\n';
}
console.log(output);