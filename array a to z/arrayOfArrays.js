const pointTable = [
    [0, 0],
    [6,10],
    [11,21],
    [22,32]
]
// one dimensional traverse

for(let i = 0; i < pointTable.length; i++) {
    // console.log(`Point ${i} || x = ${pointTable[i][0]} and y = ${pointTable[i][1]} `)
}

//two dimensional traverse
const numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
for(let i=0; i<numbers.length; i++) {
    for(let j=0; j<numbers[i].length; j++) {
        console.log(`Numbers ${i}, ${j} = ${numbers[i][j]}`)
    }
}