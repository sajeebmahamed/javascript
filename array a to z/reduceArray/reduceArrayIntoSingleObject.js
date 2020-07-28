const cart = [
    { name: 'A', price: 1230 },
    { name: 'B', price: 3434 },
    { name: 'C', price: 444 },
    { name: 'D', price: 222 },
    { name: 'E', price: 1121 },
    { name: 'f', price: 13 }
]

const invoice = cart.reduce((acc, curr) => {
    if(acc[curr.name]) {
        acc[curr.name].quantity++
        acc[curr.name].price += curr.price 
    }else {
        acc[curr.name] = {
            price: curr.price,
            quantity: 1
        }
    }
    return acc
}, {})
console.log(invoice)