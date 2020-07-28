const num = [10,1,3,11,3,2,6,8,4]
num.sort((a,b) => {
    return a - b; // ascending order
    // return b - a; // decending order
})

let string = ['hp', 'intel', 'Hp', 'asus']

string.sort((a,b) => {
    a = a.toLowerCase()
    b = b.toLowerCase()
    if(a>b) return 1
    if(b>a) return -1
    return 0
})

const users = [
    { id: 5, name: 'Nell' },
    { id: 1, name: 'Alex' },
    { id: 6, name: 'alex' },
    { id: 2, name: 'Saimon' },
    { id: 3, name: 'Elita' },
    { id: 4, name: 'Valena' },
]

// sort by id 
// users.sort((a,b) => {
//     if(a.id > b.id) return 1
//     if(a.id < b.id) return -1
//     return 0
// })
//sort by name 

users.sort((a,b) => {
    
    if (a.name > b.name) return 1
    if(a.name < b.name) return -1
    return 0
})
console.log(users)
