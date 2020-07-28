const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [1, 2, 3]
]

//horizontal sum

const sumH = matrix.map(row => {
    return row.reduce((a,b) => a+b)
})
console.log(sumH)

//vertical sum

const sumV = matrix.reduce((acc, curr) => {
    return acc.map((v, i) => curr[i]+v)
})
console.log(sumV)

//flat sum 
const flatSum = matrix.reduce((acc,curr) => {
    return acc + curr.reduce((a,b) => a+b)
}, 0)

console.log(flatSum)