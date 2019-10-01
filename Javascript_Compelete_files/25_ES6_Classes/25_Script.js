class Person {

    constructor(name,age,address){
        this._name = name;
        this._age = age;
        this._address = address;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }
}
let person = new Person('John',40,'Bangalore');
console.log(`Name : ${person.name}
             AGE : ${person.age}
             ADDRESS : ${person.address}`);
