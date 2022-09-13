


const myTitle = document.getElementsByClassName('myTitle')
myTitle[0].innerHTML = 'Hello Me'

const myIdTitle = document.getElementById('myIdTitle')
myIdTitle.innerHTML = 'Hello World...'
myIdTitle.style.backgroundColor = 'pink'
myIdTitle.style.color = 'blue'
const add = (first, second) => {
    first + second
}

add(2, 3)

const mouseOver = (event) => {
    event.target.style.backgroundColor = 'blue'
    event.target.style.color = 'pink'
}

const mouseLeave = (event) => {
    event.target.style.backgroundColor = 'pink'
    event.target.style.color = 'blue'
}

myIdTitle.addEventListener('mouseover', mouseOver)
myIdTitle.addEventListener('mouseleave', mouseLeave)

const myButton = document.getElementById('myButton')

const toggleH1 = () => {
    if (myIdTitle.style.display == 'none') {
        myIdTitle.style.display = 'block'
        myButton.innerHTML = 'Remove H1'
    } else {
        myIdTitle.style.display = 'none'
        myButton.innerHTML = 'Add H1'
    }
}

myButton.addEventListener('click', toggleH1)

const array = [{
    item: 'mango',
    quantity: 2,
    price: 4
},{
    item: 'mango1',
    quantity: 3,
    price: 4
},{
    item: 'mango2',
    quantity: 4,
    price: 4
},{
    item: 'mango3',
    quantity: 6,
    price: 4
},{
    item: 'mango4',
    quantity: 3,
    price: 4
}]


const myTBody = document.getElementById('myTBody')

let html = ''
let subtotal = 0
for (let i = 0; i < array.length; i++) {
    const item = array[i]
    subtotal += Number(item.quantity * item.price)
    html += `
        <tr>
            <td> ${i + 1} </td>
            <td> ${item.item} </td>
            <td> ${item.quantity} </td>
            <td> ${item.price} </td>
            <td> ${Number(item.quantity * item.price)} </td>
        </tr>
    `
}

html += `
    <tr>
        <td colspan="4"> Sub Total </td>
        <td> ${subtotal.toFixed(2)} </td>
    </tr>
`
myTBody.innerHTML = html




window.localStorage.setItem('myData', JSON.stringify(array))
let myData = window.localStorage.getItem('myData')
console.log(JSON.parse(myData))
window.localStorage.removeItem('myData')
window.localStorage.clear()