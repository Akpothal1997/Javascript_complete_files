// applyColors
let applyColors = (message,color) => {
    let h1Tag = document.querySelector('#msg-1');
    h1Tag.innerText = message;
    h1Tag.style.backgroundColor = color;
    h1Tag.style.boxShadow = '0 0 10px black';
};

/*
JavaScript Event Listeners
    1) get the html element
    2) attach an event to that element
    3) write the functionality
 */

// Good Morning Button
let goodMorningButton = document.querySelector('#gm');
goodMorningButton.addEventListener('click',function() {
    applyColorsNew('Good Morning','limegreen');
});

// Good Afternoon Button
let goodAfternoonButton = document.querySelector('#ga');
goodAfternoonButton.addEventListener('click',function() {
    applyColorsNew('Good Afternoon','orangered');
});

// Good Evening Button
let goodEveningButton = document.querySelector('#ge');
goodEveningButton.addEventListener('click',function() {
    applyColorsNew('Good Evening','blueviolet');
});


// Good Night Button
let goodNightButton = document.querySelector('#gn');
goodNightButton.addEventListener('click',function() {
    applyColorsNew('Good Night','teal');
});

// applyColorsNew
let applyColorsNew = (message,color) => {
    let h1Tag = document.querySelector('#msg-2');
    h1Tag.innerText = message;
    h1Tag.style.backgroundColor = color;
    h1Tag.style.boxShadow = '0 0 10px black';
};

// Change The Image
let changeImage = (imageName) => {
    let imageTag = document.querySelector('#laptop-image');
    imageTag.setAttribute('src',`../img/${imageName}`);
};