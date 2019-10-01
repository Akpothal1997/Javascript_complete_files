// Change Event on Select Box
let selectBox = document.querySelector('#tech-select');
selectBox.addEventListener('change',function() {
    let selectedOption = selectBox.value;
    let spanTag = document.querySelector('#selected-option');
    spanTag.innerText = selectedOption;
});

// Change event on Check Box
let checkBox = document.querySelector('#check-box');
checkBox.addEventListener('change',function() {
    let passwordBox = document.querySelector('#password-box');
    let theAttribute = passwordBox.getAttribute('type');
    if(theAttribute === 'password'){
        passwordBox.setAttribute('type','text');
    }
    else{
        passwordBox.setAttribute('type','password');
    }
    // another way
   // (theAttribute === 'password') ? passwordBox.setAttribute('type','text'): passwordBox.setAttribute('type','password');
});


// Keyup on TextBox

let reverseString = (str) => {
    let tempStr = '';
    for(let i=str.length-1; i>=0 ; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
};


let textBox = document.querySelector('#text-box');
textBox.addEventListener('keyup',function() {
    let textEntered = textBox.value;
    let textMsgElement = document.querySelector('#text-msg');
    textMsgElement.innerText = reverseString(textEntered);
});

