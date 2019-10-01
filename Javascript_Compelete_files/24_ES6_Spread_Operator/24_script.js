// Spread operator
let numbers = [78,45,65,84,6545,984,950,8161,91,91,9,85];
let minNumber = numbers[0];
for(let number of numbers){
    if(minNumber >= number){
        minNumber = number;
    }
}
console.log(minNumber);

let min= Math.min(...numbers);
console.log(`min Number : ${min}`);

// Using Spread Operator to mix the array elements
let array1 = [10,20,30];
let array2 = [...array1 , 40,50,60];
console.log(array2);