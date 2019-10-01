let employees=[{"id":1,"first_name":"Brooke","last_name":"Lapworth","email":"blapworth0@usgs.gov","gender":"Female","country":"Panama"},{"id":2,"first_name":"Reed","last_name":"Giblin","email":"rgiblin1@accuweather.com","gender":"Male","country":"Costa Rica"},{"id":3,"first_name":"Milly","last_name":"Lyard","email":"mlyard2@livejournal.com","gender":"Female","country":"Czech Republic"},{"id":4,"first_name":"Bay","last_name":"Kelby","email":"bkelby3@studiopress.com","gender":"Male","country":"Guatemala"},{"id":5,"first_name":"Sebastian","last_name":"Hillborne","email":"shillborne4@tripod.com","gender":"Male","country":"France"}];

// Normal for Loop
console.log('---------------------- Normal for Loop ----------------- ');
for(let i =0; i<=employees.length; i++){
    let employee = employees[i];
    console.log(employee);
}

// for-in Loop ES5
console.log('---------------------- for - in loop  ----------------- ');
for(let index in employees){
    let employee = employees[index];
    console.log(employee);
}

// for-of loop ES6
console.log('---------------------- for - of loop  ----------------- ');
for(let employee of employees){
    console.log(employee);
}

// forEach Function ES5
console.log('---------------------- forEach Function  ----------------- ');
employees.forEach(function(employee) {
    console.log(employee);
});

// forEach with Arrow Function ES6
console.log('---------------------- forEach with Arrow Function  ----------------- ');
employees.forEach(employee => console.log(employee));

// Person Name Starts with 'B'
let filteredEmployees = employees.filter((employee) => {
    return employee.first_name.startsWith('B');
});
console.log(filteredEmployees);
