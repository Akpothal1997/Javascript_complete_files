// Block Scoping

let course = 'Engineering';
let job = 'Govt';
if(course = 'Engineering'){
    let job = 'Software';
    console.log(course);
}

// Function Scoping
let greet = () => {
    let msg = 'Good Morning';
    let innerFn = () => {
        console.log(msg);
    };
    innerFn();
};
greet();

// Scopes
let a = 10;
let outerFn = () => {
    let a = 20;
    let innerFn = () => {
        let a = 30;
        console.log(a);
    };
    innerFn();
};
outerFn();

