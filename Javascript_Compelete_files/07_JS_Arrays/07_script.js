// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// Creation of Arrays
let array = [10,20,30,40,50,60];
console.log(array);

// Access the array values
console.log(array[0]); // 10
console.log(array[5]); // 60
console.log(array[6]); // undefined

// Mixed Array
let mixedArray = [100,'test',true, {name : 'Rajan'},[10,20],null,undefined];
console.log(mixedArray);
console.log(mixedArray[4][0]); // 10

// Size of An Array
console.log(mixedArray.length); // 7

// reverse() -> to reverse the elements
console.log('------------------ reverse() ----------------');
let technologies = ['HTML','CSS','JAVASCRIPT','JQUERY','BOOTSTRAP','AJAX'];
console.log(technologies);
technologies.reverse();
console.log(technologies);

// sort() -> to reverse the elements
console.log('------------------ sort() ----------------');
technologies = ['HTML','CSS','JAVASCRIPT','JQUERY','BOOTSTRAP','AJAX'];
console.log(technologies);
technologies.sort();
console.log(technologies);

// Reverse Sort
console.log('------------------ Reverse Sort ----------------');
technologies = ['HTML','CSS','JAVASCRIPT','JQUERY','BOOTSTRAP','AJAX'];
console.log(technologies);
technologies.sort().reverse();
console.log(technologies);

// shift() to remove the first element of an array
console.log('------------------ shift() ----------------');
technologies = ['HTML','CSS','JAVASCRIPT','JQUERY','BOOTSTRAP','AJAX'];
console.log(technologies);
technologies.shift();
console.log(technologies);

// unShift() to Add the first element of an array
console.log('------------------ unShift() ----------------');
technologies = ['HTML','CSS','JAVASCRIPT','JQUERY','BOOTSTRAP','AJAX'];
console.log(technologies);
technologies.unshift('NODE JS');
console.log(technologies);

// pop() -> to remove the last element
console.log('------------------ pop() ----------------');
technologies = ['HTML','CSS','JAVASCRIPT','JQUERY','BOOTSTRAP','AJAX'];
console.log(technologies);
technologies.pop();
console.log(technologies);

// push() -> to adds the last element
console.log('------------------ push() ----------------');
technologies = ['HTML','CSS','JAVASCRIPT','JQUERY','BOOTSTRAP','AJAX'];
console.log(technologies);
technologies.push('NODE JS');
console.log(technologies);

// splice(index) -> removes all elements from the given index
console.log('------------------ splice(index) ----------------');
technologies = ['HTML','CSS','JAVASCRIPT','JQUERY','BOOTSTRAP','AJAX'];
console.log(technologies);
technologies.splice(2);
console.log(technologies);

// splice(index,noof Elements) -> removes the noof lements from the given index
console.log('------------------ splice(index) ----------------');
technologies = ['HTML','CSS','JAVASCRIPT','JQUERY','BOOTSTRAP','AJAX'];
console.log(technologies);
technologies.splice(2,1);
console.log(technologies);

// splice(index,1,replace Element) -> for replace an element
console.log('------------------ splice(index,1,replace Element) ----------------');
technologies = ['HTML','CSS','JAVASCRIPT','JQUERY','BOOTSTRAP','AJAX'];
console.log(technologies);
technologies.splice(2,1,'NODE JS');
console.log(technologies);

// join -> to join the elements of an array
console.log('------------------ join() ----------------');
technologies = ['HTML','CSS','JAVASCRIPT','JQUERY','BOOTSTRAP','AJAX'];
console.log(technologies);
let theStr = technologies.join(' * ');
console.log(theStr);

// split() -> to split the given to an array
console.log('------------------ split() ----------------');
let newArray = theStr.split(' * ');
console.log(newArray);

// slice() -> to create a copy of an array
console.log('------------------ slice() ----------------');
let array1 = [10,20,30,40,50];
console.log(array1);
let array2 = array1.slice();
console.log(array2);

// Normal for Loop to loop an array
console.log('--------------------- Normal for Loop ---------------');
technologies = ['HTML','CSS','JAVASCRIPT','JQUERY','BOOTSTRAP','AJAX'];
let output = '';
for(let i=0; i<technologies.length; i++){
    output += `${technologies[i]} `;
}
console.log(output);

// for-in Loop from ES5
console.log('--------------------- for-in loop ---------------');
output = '';
for(let index in technologies){
    output += `${technologies[index]} `;
}
console.log(output);

// for-of Loop from ES6
console.log('--------------------- for-of loop ---------------');
output = '';
for(let element of technologies){
    output += `${element} `;
}
console.log(output);

// forEach Function ES5
console.log('--------------------- forEach Function ---------------');
output = '';
technologies.forEach(function(element) {
    output += `${element} `;
});
console.log(output);

// forEach Function ES6
console.log('--------------------- forEach Function with Arrow ---------------');
output = '';
technologies.forEach(element => output += `${element} `);
console.log(output);