var myclass = "Logig Training One";
let myNewName = 'Osei Gyapong';
const myWorkPlace = "LoGig";

let name = 'Bernice'
let age = 23
let school = 'TTU'

let details = 'My name is ' + name + ', I am ' + age + ' years old and I attend ' + school
let newDetails = `My name is ${name} I am ${age} years old and I attend ${school}`

let addTwoValues = 5 % 3

let yearOfBirth = 2000
let year = new Date().getUTCFullYear()
let myAge = year - yearOfBirth

let myBoolean = false

let myArray = ['1st item', '2nd items', 20, '4th item']
let list = [
    'dhjfjfjgjgjgj fhfhfh fbfhf',
    'dshgdfghfd fhfghfg ufgjgf fg',
    'ghghg fjgjgj gjgjg'
]

myArray[1] = 'jhgjhgj'

let myRemote = {
    color: 'black',
    height: 15,
    width: 5,
    numberOfKeys: 30,
    brand: 'Nasco',
    data: {
        list: ['dog', 'cat', {
            name: 'Grace',
            age: 80
        }, 'mango'],
        mother: {
            name: 'woman',
            age: 120
        }
    }
}

myRemote.brand = 'Samsung'

myRemote.data.mother.age


// String
// Array
// Object
// Number
// Float
// Double
// Boolean

// console.log(myclass)
// console.log(myNewName)
// console.log(myWorkPlace)
// console.log(details)
// console.log(newDetails)
// console.log(addTwoValues)
// console.log(myAge)
// console.log(myArray.length)
// console.log(myArray[3])
// console.log(myArray)
// console.log(myRemote)
// delete myRemote.numberOfKeys
// console.log(myRemote.data.list[2])

const exercise = {
	"items": {
        "item": [
            {
                "id": "0001",
                "type": "donut",
                "name": "Cake",
                "ppu": 0.55,
                "batters": {
                    "batter": [
                        { "id": "1001", "type": "Regular" },
                        { "id": "1002", "type": "Chocolate" },
                        { "id": "1003", "type": "Blueberry" },
                        { "id": "1004", "type": "Devil's Food" }
                    ]
                },
                "topping": [
                    { "id": "5001", "type": "None" },
                    { "id": "5002", "type": "Glazed" },
                    { "id": "5005", "type": "Sugar" },
                    { "id": "5007", "type": "Powdered Sugar" },
                    { "id": "5006", "type": "Chocolate with Sprinkles" },
                    { "id": "5003", "type": "Chocolate" },
                    { "id": "5004", "type": "Maple" }
                ]
            }
        ]
    }
}


console.log(exercise.items.item[0].topping[2].type)