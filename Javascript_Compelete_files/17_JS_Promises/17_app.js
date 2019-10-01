// Promise with Callback functions
let doTask = (success,failure) => {
    // performing the task
    let isDone = true;
    if(isDone){
        success('Task is Finished');
    }
    else{
        failure('Task is NOT Finished');
    }
};

doTask((message) => {
    console.log(message);
},(message) => {
    console.log(message);
});

// Actual Promise in JavaScript
let cleanLaptop = new Promise((resolve, reject) => {
    // cleaning Laptop
    let isCleaned = false;
    if(isCleaned){
        resolve('Laptop is Cleaned');
    }
    else{
        reject('Laptop is NOT Cleaned');
    }
});
cleanLaptop.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
});

// Dependent Promises
let doProject = new Promise((resolve, reject) => {
    // doing the Project
    let isDone = true;
    if(isDone){
        resolve('Project is Finished');
    }
    else{
        reject('Project is NOT Finished');
    }
});

let doTechnicalRound = new Promise((resolve, reject) => {
    // doing the Technical Round
    let isDone = true;
    if(isDone){
        resolve('Technical Round is Finished');
    }
    else{
        reject('Technical Round is NOT Finished');
    }
});

let doManagerRound = new Promise((resolve, reject) => {
    // doing the Manager Round
    let isDone = true;
    if(isDone){
        resolve('Manager Round is Finished');
    }
    else{
        reject('Manager Round is NOT Finished');
    }
});

let doHRRound = new Promise((resolve, reject) => {
    // doing the HR Round
    let isDone = true;
    if(isDone){
        resolve('HR Round Finished and GOT JOB');
    }
    else{
        reject('HR Round is NOT Finished');
    }
});

doProject.then((message) => {
    let result = `${message} => `;
    doTechnicalRound.then((message) => {
        result += `${message} => `;
        doManagerRound.then((message) => {
            result += `${message} => `;
            doHRRound.then((message) => {
                result += `${message}`;
                console.log(result);
            }).catch((message) => {
                console.error('Do HR ' +message);
            });
        }).catch((message) => {
            console.error('Do Manager ' + message);
        });
    }).catch((message) => {
        console.error('Do Technical ' + message);
    });
}).catch((message) => {
    console.error('Do Project ' + message);
});
