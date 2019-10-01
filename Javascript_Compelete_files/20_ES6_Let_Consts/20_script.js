// var vs let
let course = 'Engineering';
if(course === 'Engineering'){
    let job1 = 'Software';
    var job2 = 'Govt';
}
console.log(job2);// Govt
// console.log(job1); // ReferenceError: job1 is not defined

// let vs const
let month = 'July';
month = 'August';
console.log(month);

// const
const year = 2019;
//year = 2020; // cannot assign any other value
console.log(year); // TypeError: Assignment to constant variable.

// const
const student = {
    name : 'Mahesh',
    age : 23,
    course : 'CSE',
    college : 'CBIT'
};
student.college = 'IIT Mumbai';
console.log(student);

const greet = function() {
    console.log('Iam from greet Function');
};
greet();
