/* ------------------------------------------------------------------
                            Math Object Examples
 -------------------------------------------------------------------- */

// Math PI
let pivalue = Math.PI;
console.log(`piValue : ${pivalue}`);

// Math sqrt
let sqrt = Math.sqrt(144);
console.log(`Sqrt of 12 is : ${sqrt}`);

// find the min of 4 numbers
let min = Math.min(10,5,6546,48,494,891,981,98,1);
console.log(`Min is : ${min}`);

// find the Max of 4 numbers
let max = Math.max(10,5,6546,48,494,891,981,98,1);
console.log(`Max is : ${max}`);

// find the 'x' to the power of 'y' value, ex: 2^4
let pow = Math.pow(2,5);
console.log(`2 ^ 5 is : ${pow}`);

// generate the random numbers from 0 to 100
let random = Math.round(Math.random() * 100000);
console.log(random);

/* For more details about Math Object, please have a look at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

/* ------------------------------------------------------------------
                            Date Object Examples
 -------------------------------------------------------------------- */

// get today's date
let date = new Date();
console.log(date);

// Get proper date
let currentDate = new Date().toLocaleDateString();
console.log(currentDate);

// Get the Time
let currentTime = new Date().toLocaleTimeString();
console.log(currentTime);

// get full day of the week using switch statement
let today = new Date().getDay();
let fullDay = '';
switch(today){
    case 0:
        fullDay = 'SUNDAY';
        break;
    case 1:
        fullDay = 'MONDAY';
        break;
    case 2:
        fullDay = 'TUESDAY';
        break;
    case 3:
        fullDay = 'WEDNESDAY';
        break;
    case 4:
        fullDay = 'THURSDAY';
        break;
    case 5:
        fullDay = 'FRIDAY';
        break;
    case 6:
        fullDay = 'SATURDAY';
        break;
    default:
        fullDay = '-';
        break;
}
console.log(`Today is  : ${fullDay}`);

// Display a Digital Clock on the web page


/* For More Details about Date() please have a look at
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

/* ------------------------------------------------------------------
                            Number Object Examples
 -------------------------------------------------------------------- */
let minNumber = Number.MIN_SAFE_INTEGER;
console.log(minNumber);

let maxNumber = Number.MAX_SAFE_INTEGER;
console.log(maxNumber);

let posInfinity = Number.POSITIVE_INFINITY;
console.log(posInfinity);

let negInfinity = Number.NEGATIVE_INFINITY;
console.log(negInfinity);

let theNumber = 100;
console.log(`Value : ${theNumber} Type : ${typeof  theNumber}`);

let theStr = theNumber.toString();
console.log(`Value : ${theStr} Type : ${typeof  theStr}`);

theStr = '1000.151';
console.log(`Value : ${theStr} Type : ${typeof  theStr}`);

theNumber = Number(theStr);
console.log(`Value : ${theNumber} Type : ${typeof  theNumber}`);

/* ------------------------------------------------------------------
                            String Object Examples
 -------------------------------------------------------------------- */
let message = 'Good Morning';

// uppercase
console.log(message.toUpperCase());

// lowercase
console.log(message.toLowerCase());

// Length
console.log(`Length : ${message.length}`);

// substring
console.log(`Substring : ${message.substr(0,4)}`); // Good

// substring
console.log(`Substring : ${message.substr(5)}`); // Morning

// char At
console.log(`Char @ 0 : ${message.charAt(0)}`); // G

// char Code At
console.log(`CharCode @ 0 : ${message.charCodeAt(0)}`); // 71

// Programs

// Example 1: count th no of o's in the given string
let theMessage = 'Good MOrning';
let countZeros = (str) => {
    let count = 0;
    for(let i=0; i<str.length; i++){
        let char = str.charAt(i);
        if(char === 'o' || char === 'O'){
            count++;
        }
    }
    return count;
};
console.log(`No of Zeros : ${countZeros(theMessage)}`);

// Example 2 : reverse String
theMessage = 'Good Morning';
let reverseString = (str) => {
    let tempStr = '';
    for(let i=str.length-1; i>=0 ; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
};
console.log(`Reverse String : ${reverseString(theMessage)}`);

// Example 3 : Palindrome or Not
theMessage = 'ACA';
let isPalindrome = (str) => {
    return str === reverseString(str);
};
console.log(`${theMessage} isPalindrome ? ${isPalindrome(theMessage)}`);

// Example 4 : convert to Palindrome
theMessage = 'AB';
let convertToPalindrome = (str) => {
    return str + reverseString(str.substr(0,str.length-1));
};
console.log(`${theMessage} => ${convertToPalindrome(theMessage)}`);

// Example 5 : 123 -> ONE TWO THREE
theNumber = '08574';
let convertWordNumber = (str) => {
    let wordNumber = '';
    for(let i=0; i<str.length; i++){
        let digit = Number(str.charAt(i));
        switch(digit){
            case 0:
                wordNumber += ' ZERO ';
                break;
            case 1:
                wordNumber += ' ONE ';
                break;
            case 2:
                wordNumber += ' TWO ';
                break;
            case 3:
                wordNumber += ' THREE ';
                break;
            case 4:
                wordNumber += ' FOUR ';
                break;
            case 5:
                wordNumber += ' FIVE ';
                break;
            case 6:
                wordNumber += ' SIX ';
                break;
            case 7:
                wordNumber += ' SEVEN ';
                break;
            case 8:
                wordNumber += ' EIGHT ';
                break;
            case 9:
                wordNumber += ' NINE ';
                break;
        }
    }
    return wordNumber;
};
console.log(convertWordNumber(theNumber));

// Example 6 : Convert String Number
theNumber = '0123';
let numbers = ['ZERO','ONE' , 'TWO' , 'THREE' , 'FOUR' , 'FIVE' , 'SIX', 'SEVEN' , 'EIGHT' , 'NINE'];
let convertStringNumber = (str) => {
    let wordNumber = '';
    for(let i=0; i<str.length; i++){
        let digit = Number(str.charAt(i));
        wordNumber += ` ${numbers[digit]} `;
    }
    return wordNumber;
};
console.log(convertStringNumber(theNumber));

// Example 7 : Triangle String One
theMessage = 'NAVEEN SAGGAM';
let triangleOne = (str) => {
    let output = '';
    for(let i=str.length ; i>=1; i--){
        output += `${str.substr(0,i)} \n`;
    }
    return output;
};
console.log(triangleOne(theMessage));

// Example 8 : Triangle String TWO
theMessage = 'NAVEEN SAGGAM';
let addSpace = (number) => {
    let tempSpace = '';
    for(let i=1; i<=number; i++){
        tempSpace += ' ';
    }
    return tempSpace;
};
let triangleTwo = (str) => {
    let output = '';
    for(let i=str.length-1; i>=0 ; i--){
        output += `${addSpace(i)}${str.substr(i)} \n`;
    }
    return output;
};
console.log(triangleTwo(theMessage));