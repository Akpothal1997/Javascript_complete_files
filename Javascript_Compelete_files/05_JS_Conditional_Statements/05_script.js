// If Else condition Example
let time = -5;
if(time >= 0 &&  time <= 12){
    console.log('Good Morning');
}
else if(time > 12 && time <= 17){
    console.log('Good Afternoon');
}
else if(time > 17 && time <= 23){
    console.log('Good Evening');
}
else{
    console.log('Please Proper Time Dude')
}

// Switch Statement Example
let month = 7;
let currentMonth = 'Month is : ';
switch(month){
    case 1:
        currentMonth += 'JANUARY';
        break;
    case 2:
        currentMonth += 'FEBRUARY';
        break;
    case 3:
        currentMonth += 'MARCH';
        break;
    case 4:
        currentMonth += 'APRIL';
        break;
    case 5:
        currentMonth += 'MAY';
        break;
    case 6:
        currentMonth += 'JUNE';
        break;
    case 7:
        currentMonth += 'JULY';
        break;
    case 8:
        currentMonth += 'AUGUST';
        break;
    case 9:
        currentMonth += 'SEPTEMBER';
        break;
    case 10:
        currentMonth += 'OCTOBER';
        break;
    case 11:
        currentMonth += 'NOVEMBER';
        break;
    case 12:
        currentMonth += 'DECEMBER';
        break;
    default:
        currentMonth += 'Enter Proper Month Number Dude';
        break;
}
console.log(currentMonth);


// For loop Example to display from 1 - 10 values
let output = '';
for(let i = 0; i<=10; i++){
    if(i <= 9){
        output += `${i} , `;
    }
    else{
        output += `${i}`;
    }
}
console.log(output);

// for loop to print 20 - 0 diff by 2
output = '';
for(let i=20; i>= 0; i-=2){
    if(i > 0){
        output += `${i} , `;
    }
    else{
        output += `${i}`;
    }
}
console.log(output);

// Print the stars
let number = 5;
output = '';
for(let i = 1; i<= number; i++){
    for(let j = 1; j <= i; j++){
        output += '*';
    }
    output += '\n';
}
console.log(output);

// Print Numbers Triangle ascending
output = '';
number = 8;
for(let i = 1; i<= number; i++){
    for(let j = 1; j <= i; j++){
        output += i;
    }
    output += '\n';
}
console.log(output);

// Print Numbers Triangle descending
output = '';
number = 8;
for(let i = number ; i >= 1; i--){
    for(let j = 1; j<= i; j++){
        output += i;
    }
    output += '\n';
}
console.log(output);

// print numbers ascending Order
output = '';
number = 8;
for(let i = 1; i<= number; i++){
    for(let j = 1; j <= i; j++){
        output += j;
    }
    output += '\n';
}
console.log(output);

// print numbers descending Order
output = '';
number = 8;
for(let i = number ; i >= 1; i--){
    for(let j = 1; j<= i; j++){
        output += j;
    }
    output += '\n';
}
console.log(output);



console.log('------------------------ While Loop -------------');
// While loop Example to display from 1 - 10 values
output = '';
let i = 0;
while(i <= 10){
    if(i <= 9){
        output += `${i} - `;
    }
    else{
        output += `${i}`;
    }
    i++; // increment
}
console.log(output);

// While loop to print 20 - 0 diff by 2
output = '';
i = 20;
while(i>= 0){
    if(i > 0){
        output += `${i} - `;
    }
    else{
        output += `${i}`;
    }
    i-=2;
}
console.log(output);

// Print the stars with while loop
number = 5;
output = '';
i = 1;
while(i<= number){
    let j = 1;
    while(j <= i){
        output += '*';
        j++;
    }
    output += '\n';
    i++;
}
console.log(output);

// Print Numbers Triangle ascending With while Loop
output = '';
number = 8;
i = 1;
while(i<= number){
    let j = 1;
    while(j <= i){
        output += i;
        j++;
    }
    output += '\n';
    i++;
}
console.log(output);

// Print Numbers Triangle descending
output = '';
number = 8;
i = number;
while(i >= 1){
    let j = 1;
    while(j<= i){
        output += i;
        j++;
    }
    output += '\n';
    i--;
}
console.log(output);

// print numbers ascending Order
output = '';
number = 8;
i = 1;
while(i<= number){
    let j = 1;
    while(j <= i){
        output += j;
        j++;
    }
    output += '\n';
    i++;
}
console.log(output);

// print numbers descending Order
output = '';
number = 8;
i = number;
while(i >= 1){
    let j = 1;
    while(j<= i){
        output += j;
        j++;
    }
    output += '\n';
    i--;
}
console.log(output);

// Do while loop Example to display from 1 - 10 values

console.log('------------------------ Do While Loop -------------');
// Do-While loop Example to display from 1 - 10 values
output = '';
i = 0;
do{
    if(i <= 9){
        output += `${i} - `;
    }
    else{
        output += `${i}`;
    }
    i++; // increment
}
while(i <= 10);
console.log(output);

// Do-While loop to print 20 - 0 diff by 2
output = '';
i = 20;
do{
    if(i > 0){
        output += `${i} - `;
    }
    else{
        output += `${i}`;
    }
    i-=2;
}
while(i>= 0);
console.log(output);

// Print the stars with DO-while loop
number = 5;
output = '';
i = 1;
do{
    let j = 1;
    do{
        output += '*';
        j++;
    }
    while(j <= i);
    output += '\n';
    i++;
}
while(i<= number);
console.log(output);

// Print Numbers Triangle ascending With while Loop
output = '';
number = 8;
i = 1;
do{
    let j = 1;
    do{
        output += i;
        j++;
    }
    while(j <= i);
    output += '\n';
    i++;
}
while(i<= number);
console.log(output);

// Print Numbers Triangle descending
output = '';
number = 8;
i = number;
do{
    let j = 1;
    do{
        output += i;
        j++;
    }
    while(j<= i);
    output += '\n';
    i--;
}
while(i >= 1);
console.log(output);

// print numbers ascending Order
output = '';
number = 8;
i = 1;
do{
    let j = 1;
    do{
        output += j;
        j++;
    }
    while(j <= i);
    output += '\n';
    i++;
}
while(i<= number);
console.log(output);

// print numbers descending Order
output = '';
number = 8;
i = number;
do{
    let j = 1;
    do{
        output += j;
        j++;
    }
    while(j<= i);
    output += '\n';
    i--;
}
while(i >= 1);
console.log(output);

