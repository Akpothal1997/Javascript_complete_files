let employees = [
    {
        sno : 100,
        name : 'John',
        age : 40,
        designation : 'Manager'
    },
    {
        sno : 101,
        name : 'Wilson',
        age : 45,
        designation : 'Sr.Manager'
    },
    {
        sno : 102,
        name : 'Laura',
        age : 25,
        designation : 'Software Engineer'
    }
];

// String Concatenation
let tableBody = document.querySelector('#table-body');

let stringConcat = '';
for(let employee of employees){
    stringConcat += '<tr>' +
                        '<td>' + employee.sno + '</td>' +
                         '<td>' + employee.name + '</td>' +
                         '<td>' + employee.age + '</td>' +
                         '<td>' + employee.designation + '</td>' +
                    '</tr>';
}

// tableBody.innerHTML = stringConcat;

let templateString = ``;
for(let employee of employees){
    templateString += `<tr>
                           <td>${employee.sno}</td>
                           <td>${employee.name}</td>
                           <td>${employee.age}</td>
                           <td>${employee.designation}</td>
                       </tr>`;
}
tableBody.innerHTML = templateString;