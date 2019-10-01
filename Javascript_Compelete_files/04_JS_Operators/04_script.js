// Assignment operator =
let empName = 'John';
console.log(empName);

// Arithmetic operators + - * /
let num1 = 10;
let num2 = 20;
console.log(`Sum is : ${num1 + num2}`);
console.log(`Sub is : ${num1 - num2}`);
console.log(`Mul is : ${num1 * num2}`);
console.log(`Div is : ${num1 / num2}`);
console.log(`Mod is : ${num1 % num2}`);

// Short hand math += , -= , *= , /=
let a = 10;
let b = 20;
let add = 0;
add = add + (a + b); // 0 + 10 + 20 = 30
add += (a + b); // 30 + 10 + 20 = 60
console.log(add); // 60

// Conditional operators < , > , <= , >= , !=
let marks = 35;
if(marks <= 35){
    console.log('You Failed the Exam');
}
else {
    console.log('Congratulations');
}

// Unary Operator ++ , -- (pre , post)
let x = 10;
x = x + 1;
x += 1;
x++;
console.log(x);

// Logical operators AND , OR
let inRelation = true;
let parentsAgreed = false;
if(inRelation && parentsAgreed){
    console.log('Get Marry Soon');
}
else{
    console.log('Wait until parents Agreed');
}

// String Concatenation Operator
let name = 'John';
let age = 40;
console.log(name + " , " + age);
console.log(`${name} , ${age}`);

// Ternary operator (? :)
// (condition) ? true : false;
marks = 45;
let result = '';
(marks <= 35) ? result = 'You Failed the Exam' : result = 'Congratulations';
console.log(result);

// Typeof operator
a = 'test';
console.log(`Value : ${a} Type : ${typeof a}`);

// == operator
a = 10;
b = '10';
if(a == b){
    console.log('Both are Equal');
}
else{
    console.log('Both are NOT Equal');
}

// === operator
a = 10;
b = '10';
if(a === b){
    console.log('Both are Equal');
}
else{
    console.log('Both are NOT Equal');
}