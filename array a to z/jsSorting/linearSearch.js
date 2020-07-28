const arr = [10, 1, 3, 11, 3, 2, 6, 8, 4]
const linearSearch = (arr, key) => {
    for(let i = 0; i < arr.length ; i++) {
        if(arr[i] === key) {
            return i;
        }
    }
    return -1;
}
// console.log(linearSearch(arr, 3))

const team = [
    { id: 4, name: 'arg' },
    { id: 2, name: 'bra' },
    { id: 5, name: 'sfa' },
    { id: 1, name: 'eng' },
    { id: 3, name: 'ca' },
    { id: 6, name: 'fra' },
    { id: 7, name: 'zer' },
]

const findTeam = (arr, cb) => {
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            return i
        }
    }
    return -1
}
const result = findTeam(team, (item) => item.name === 'arg')
console.log(result)