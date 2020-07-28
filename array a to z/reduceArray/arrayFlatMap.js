const arr = [1, 2, 3,4,5]

const map = arr.map(x => x*2)

const flatMap = arr.flatMap(x => x*2)

const flatMap1 = arr.flatMap(x => [x, x*2])

const reduce1 = arr.reduce((acc, curr) => {
    return acc.concat(curr*2)
}, [])

const reduce2 = arr.reduce((acc, curr) => {
    return acc.concat([curr, curr*2])
}, [])

console.log(reduce2)