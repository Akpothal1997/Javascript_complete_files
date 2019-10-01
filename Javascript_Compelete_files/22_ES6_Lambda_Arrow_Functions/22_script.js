// Normal Function
function reverseStringNormalFn(str) {
    let tempStr = '';
    for(let i=str.length-1; i>=0 ; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
}
console.log(reverseStringNormalFn('Good Morning'));

// Function Expression
let reverseStringFnExpression = function(str) {
    let tempStr = '';
    for(let i=str.length-1; i>=0 ; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
};
console.log(reverseStringFnExpression('Good Morning'));

// Arrow Function ES6
let reverseStringArrowFunction = (str) => {
    let tempStr = '';
    for(let i=str.length-1; i>=0 ; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
};
console.log(reverseStringArrowFunction('Good Morning'));