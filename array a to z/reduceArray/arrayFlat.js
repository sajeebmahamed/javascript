const multipleArr  = [1,2,[3,2],[4,5,6,],[7]]
const flatMethod = multipleArr.flat()

const reduce = multipleArr.reduce((acc, curr) => {
    return acc.concat(curr)
}, [])
console.log(reduce)