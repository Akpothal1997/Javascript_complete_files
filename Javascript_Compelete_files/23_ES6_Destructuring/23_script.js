let student = {
    name : 'Rajan',
    age : 23,
    course : 'Engineering',
    address : {
        city : 'Hyderabad',
        state : 'TS',
        country : 'India'
    }
};

// Access the Student Data with Destructuring
let {name , age , course} = student;
console.log(`NAME : ${name}
             AGE : ${age}
             COURSE : ${course}`);

// Access the Address Object with Destructuring
let {city , state , country} = student.address;
console.log(`CITY : ${city}
             STATE : ${state}
             COUNTRY : ${country}`);

let person = {
    "gender": "male",
    "name": {
        "title": "mr",
        "first": "rolf",
        "last": "hegdal"
    },
    "location": {
        "street": "ljan terrasse 346",
        "city": "vear",
        "state": "rogaland",
        "postcode": "3095",
        "coordinates": {
            "latitude": "54.8646",
            "longitude": "-97.3136"
        },
        "timezone": {
            "offset": "-10:00",
            "description": "Hawaii"
        }
    },
    "email": "rolf.hegdal@example.com",
    "login": {
        "uuid": "c4168eac-84b8-46ea-b735-c9da9bfb97fd",
        "username": "bluefrog786",
        "password": "ingrid",
        "salt": "GtRFz4NE",
        "md5": "5c581c5748fc8c35bd7f16eac9efbb55",
        "sha1": "c3feb8887abed9ec1561b9aa2c9f58de21d1d3d9",
        "sha256": "684c478a98b43f1ef1703b35b8bbf61b27dbc93d52acd515e141e97e04447712"
    },
    "dob": {
        "date": "1975-11-12T06:34:44Z",
        "age": 42
    },
    "registered": {
        "date": "2015-11-04T22:09:36Z",
        "age": 2
    },
    "phone": "66976498",
    "cell": "40652479",
    "id": {
        "name": "FN",
        "value": "12117533881"
    },
    "picture": {
        "large": "https://randomuser.me/api/portraits/men/65.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/65.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/65.jpg"
    },
    "nat": "NO"
};

// without Destructuring
console.log(`OFFSET : ${person.location.timezone.offset}
             DESCRIPTION : ${person.location.timezone.description}`);

// with Destructuring
let {offset , description} = person.location.timezone;
console.log(`OFFSET : ${offset}
             DESCRIPTION : ${description}`);