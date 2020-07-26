const matrixA = [
    [1, 2],
    [3, 1],
    [0, 2]
]
const matrixB = [
    [0, 0],
    [1, 1],
    [0, 2]
]

const matrixSum = (matrixA, matrixB) => {
    const result = []
    for(let i = 0; i < matrixA.length; i++) {
        const row = []
        for(let j = 0; j< matrixA[i].length; j++) {
            row.push(matrixA[i][j] + matrixB[i][j])
        }
        result.push(row)
    }
    return result
}
console.log(matrixSum(matrixA,matrixB))