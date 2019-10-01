// document
let val  = document;

// head
val = document.head;

// title
val = document.title;

// links
val = document.links;

// body
val = document.body;

// Scripts
val = document.scripts;
console.log(val);

// Tag Selection
let aTag = document.querySelector('nav a');
console.log(aTag);

// Id Selection
let h1Tag = document.querySelector('#home h1');
console.log(h1Tag);

// Class Selection
let divTag = document.querySelector('.abc');
console.log(divTag);

// change the title
console.log(document.title);
document.title = 'Changed by US';

// access the HTML Tag
h1Tag = document.querySelector('#home h1');
let content = h1Tag.innerText;
console.log(content);

// change the content
h1Tag.innerText = 'Good Evening';

// Add Styles to HTML Content
h1Tag.style.backgroundColor = 'orangered';
h1Tag.style.color = 'white';
h1Tag.style.textAlign = 'center';
h1Tag.style.padding = '15px';
h1Tag.style.boxShadow = '0 0 10px black';