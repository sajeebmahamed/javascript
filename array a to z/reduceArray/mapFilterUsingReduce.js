const arr = [1,2,3,4,5,6]

const square = arr.reduce((acc, curr) => {
    acc.push(curr*curr)
    return acc
}, [])
console.log(square) 

const odds = arr.reduce((acc, curr) => {
    if(curr%2 == 1) {
        acc.push(curr)
    }
    return acc
}, [])
console.log(odds)

const bigArray = []
for(let i = 0; i< 5000000; i++) {
    bigArray.push(i)
}
console.time('Both')
bigArray.filter(v => v%2 === 0).map(v => v*2)
console.timeEnd('Both')
console.time('Both')
bigArray.reduce((acc, curr) => {
    if(curr %2 === 0) {
        acc.push(curr*2)
    }
    return acc   
}, [])
console.timeEnd('Both')