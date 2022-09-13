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


// console.log(exercise.items.item[0].topping[2].type)

const myJson = {
    "problems": [{
        "Diabetes":[{
            "medications":[{
                "medicationsClasses":[
                    {
                        "className":[{
                            "associatedDrug":[{
                                "name":"asprin",
                                "dose":"",
                                "strength":"500 mg"
                            }],
                            "associatedDrug#2":[{
                                "name":"somethingElse",
                                "dose":"",
                                "strength":"500 mg"
                            }]
                        }],
                        "className2":[{
                            "associatedDrug":[{
                                "name":"asprin",
                                "dose":"",
                                "strength":"500 mg"
                            }],
                            "associatedDrug#2":[{
                                "name":"somethingElse",
                                "dose":"",
                                "strength":"500 mg"
                            }]
                        }]
                    }
                ]
            }],
            "labs":[{
                "missing_field": "missing_value"
            }]
        }],
        "Asthma":[{}]
    }]
}

const data = myJson.problems[0].Diabetes[0].medications[0].medicationsClasses[0].className2[0]["associatedDrug#2"]

// console.log(typeof data === 'object' ? (Array.isArray(data) ? 'array' : 'object') : null)

function sendMessage(message) {

    const transfer = () => {
        console.log('Message is transferred: ', 'Value is: ', message)
        return false
    }

    let result = transfer()
    return result
} 

const getMessage = () => {
    //dhdfhfhfhf
    //fhfhfhfg
    //dfhfhfhf
    //dfjhfhjfhjf
}

const add = function(value1, value2) {
    let result = value1 + value2
    return result
}

// console.log(add(4, 9))

/**
 * user = {
 *      accountNumber: '',
        fullName: '',
        dob: '',
        address: '',
        idNumber: '',
        idType: '',
        nextOfKin: '',
        phone: '',
        email: ''
    }

    account = {
        accountNumber: '',
        balance: 0
    }

    transaction = {
        accountNumber: '',
        depositorName: '',
        amount: 0,
        typeOfTransaction: '',
        recipientAccountNumber: ''
    }
 */

const accessBank = {
    users: [],
    account: [],
    transactions: [],
    createAccount: (fullName, dob, address, idNumber, idType, nextOfKin, phone, email) => {
        accessBank.users.push({
            accountNumber: Date.now(),
            fullName: fullName,
            dob: dob,
            address: address,
            idNumber: idNumber,
            idType: idType,
            nextOfKin: nextOfKin,
            phone: phone,
            email: email
        })
    },
    getUsers: () => {
        return accessBank.users
    }
}

accessBank.createAccount('Kingsley Mensah', '1990-05-01', 'Takoradi', '99887766', 'Ghana card', 'Samuel', '0233546789', 'example@mail.com')
accessBank.createAccount('Clement Hateka', '2005-05-27', 'Kokompe', '58730022', 'Voters', 'Emmanuel Hateka', '0592235950', 'emmanuelhateka5@gmail.com')
// console.table(accessBank.getUsers())

const myWeddingList = ['RiNg', 'Bible', 'Bag', 'Wig', 'Heel', 'Panties', 'Kente']
const search = 'ring'

// ===
// !=
// &&
// ||
// >
// <
// >=
// <=

// if (myWeddingList[0] == search && myWeddingList[0] > 'me') {
//     console.log('It exist!')
// } else if (myWeddingList[1] == search) {
//     console.log('It exist!!')
// } else if (myWeddingList[2] == search) {
//     console.log('It exist!!!')
// } else if (myWeddingList[3] == search) {
//     console.log('It exist!!!!')
// } else if (myWeddingList[4] == search) {
//     console.log('It exist!!!!!')
// } else if (myWeddingList[5] == search) {
//     console.log('It exist!!!!!!')
// } else {
//     console.log('Does not exist')
// }

// for (let i = 0; i < myWeddingList.length; i++) {
//     console.log(myWeddingList[i], ' is at the ', i, ' index position')
// }


const studentAges = [9, 9, 10, 10, 13, 16, 20, 20, 22, 50, 88, 88]

//Find mean or average = age sum X / total number
//Mode = age that appears most
//Median = middle number => total number of the set, divided by 2


const calculateMean = (list) => {
    const totalOfStudent = list.length
    let sum = 0
    for (let i = 0; i < list.length; i++) {
        sum += list[i]
    }
    let result = sum / totalOfStudent
    return result
}

// console.log(calculateMean(studentAges))

//Loop to access the numbers
//Check if the number at certain index position exists in the check object
//If it exists, increase the count 
//else add it to the check object with a count of 1

const calculateMode = (list) => {
    const check = {}
    for (let i = 0; i < list.length; i++) {
        let number = list[i]
        if (check[number]) {
            check[number] += 1
        } else {
            check[number] = 1
        }
    }
    // {
    //     '9': 2,
    //     '10': 1,
    //     '13': 1,
    //     '16': 1,
    //     '20': 1,
    //     '22': 1,
    //     '50': 1,
    //     '88': 1
    //   }

    
    let mostAppearedNumbers = {}
    let checkCount = 0
    for (const key in check) {
        if (check[key] >= checkCount) {
            checkCount = check[key]
            for (const newKey in mostAppearedNumbers) {
                if (mostAppearedNumbers[newKey] < checkCount) {
                    delete mostAppearedNumbers[newKey]
                }
            }
            mostAppearedNumbers[key] = check[key]
        }
    }

    console.log(mostAppearedNumbers)
}

const calculateMedian = (list) => {
    const middleNumber = Math.floor(list.length / 2)
    if (middleNumber % 2 === 0) {
        const leftValue = list[middleNumber - 1]
        const rightValue = list[middleNumber]
        const result = (leftValue + rightValue) / 2
        return result
    } else {
        return list[middleNumber]
    }
}

// calculateMode(studentAges)

console.log(calculateMedian(studentAges))