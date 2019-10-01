// Create an empty Object
let fridge = {};
fridge.veg = 'tomotos';
fridge.eggs = 20;
fridge.chocolates = 5;
console.log(fridge);

// Create an Object Literal
let mobile = {
    brand : 'Apple',
    color : 'Silver',
    price : 35000,
    isInsured : false
};
console.log(mobile);

// Access  the Properties
console.log(`Brand : ${mobile.brand}`); // Apple
console.log(`Color : ${mobile.color}`); // Silver

// Accessing Non Existing Property
console.log(mobile.memory); // undefined

// dot Notation & Brackets Notation
console.log(`Brand : ${mobile.brand}`); // Apple
console.log(`Brand : ${mobile['brand']}`); // Apple

// Nested Objects
let student = {
    name : 'Arjun Reddy',
    age : 22,
    course : 'Medical',
    college : 'Osmania Medical College',
    address : {
        city : 'Hyderabad',
        state : 'TS',
        country : 'India'
    }
};
console.log(student);

// Access Nested Object
console.log(student.address);

// Add Properties to an Object
student.grade = 'Distinction';
console.log(student);

// Add Properties to Nested Object
console.log(student.address);
student.address.street = 'Jubilee Hills';
console.log(student.address);

// Delete a Property from an Object
console.log(student);
delete student.address;
console.log(student);

