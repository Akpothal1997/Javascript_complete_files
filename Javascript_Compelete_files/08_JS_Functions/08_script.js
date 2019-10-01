// function declaration
function printNumbers(startNumber, endNumber,increNumber) {
    let output = '';
    for(let i=startNumber; i<=endNumber; i+= increNumber){
        output += `${i} `;
    }
    console.log(output);
}
printNumbers(0,20,2);
printNumbers(0,100,5);
printNumbers(0,1000,10);

// Function without arguments
function greet() {
    console.log('Good Morning');
}
greet();

// function with arguments
function greetMe(name) {
    console.log(`Good Morning ${name}`);
}
greetMe('John');
greetMe('Wilson');

// function with more / less arguments
function greetArgs(name,age) {
    console.log(`Hello ${name} You are ${age} yrs Old`);
}
greetArgs('John',40);
greetArgs('John');
greetArgs();

// function with return Type
function sum(a , b) {
    let theSum = a + b;
    return theSum;
}
let addition = sum(10,20);
console.log(addition);

// function Expression
let printMessage = function(name) {
    let theMessage = `Welcome to Function Express ${name}`;
    console.log(theMessage);
};
printMessage('Wilson');

// Object as parameters
let student1 = {
    name : 'Rajan',
    age : 22,
    course : 'Engineering'
};

let printStudent = function(student) {
    console.log(`NAME : ${student.name}
                 AGE : ${student.age}
                 COURSE : ${student.course}`);
};
printStudent(student1);

// Array as parameters
let colors = ['red','green','blue','orange','white'];

let printArray = function(array) {
    let output = '';
    for(let index in array){
        output += `${index} => ${array[index]} \n`;
    }
    console.log(output);
};
printArray(colors);

let technologies = ['html','css','javascript','bootstrap'];
printArray(technologies);

// Function inside an object
let student = {
    firstName : 'Arjun',
    lastName : 'Reddy',
    fullName : function() {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(student.fullName());

// Nested Function
let outerFn = function() {
    let innerFn = function() {
        console.log('Iam from Inner Function');
    };
    innerFn();
    console.log('Iam from Outer Function');
};
outerFn();

// Arrow Functions ES6
let printStars = (number) => {
    output = '';
    for(let i = 1; i<= number; i++){
        for(let j = 1; j <= i; j++){
            output += '*';
        }
        output += '\n';
    }
    console.log(output);
};
printStars(4);

// Prepare Chicken with Function
let glassBowl = function(rawchicken,masala) {
  let marinatedChicken = `Mixing(${rawchicken} with ${masala})`;
  return marinatedChicken;
};

let cookingBowl = function(marinatedChicken,water) {
    let cookedChicken = `Cooking(${marinatedChicken} with ${water})`;
    return cookedChicken;
};

let eatingPlate = function(cookedChicken,rice) {
    console.log(`Eating (${cookedChicken} with ${rice})`);
};

let rawChicken = '2kg Chicken';
let masala = 'pepper + Garlic + salt';
let marinatedChicken = glassBowl(rawChicken,masala);
let water = `1 ltr Water`;
let cookedChicken = cookingBowl(marinatedChicken,water);
let rice = `1kg rice`;
eatingPlate(cookedChicken,rice);