const arr = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8]
]

const res = arr.reduceRight((acc, curr) => {
    return acc.concat(curr)
},[])
// console.log(res)
const newArr = [1,2,3,4,5]
const sum = newArr.reduceRight((acc, curr) => {
    return acc + curr
}, 0)
console.log(sum)