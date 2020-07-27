const arr = [1,2,3,4,5,6,7,8,9,10]
// arr.shift()
// arr.pop()
// arr.length = arr.length - 1
// arr.splice(2,4)

const toBeDeleted = 5;

// for(let i=0; i<arr.length; i++) {
//     if(arr[i] === toBeDeleted) {
//         arr.splice(i,1)
//     }
// }
// newArr = arr.filter(item => item !== toBeDeleted)

//delete operator
// delete arr[1]
// arr[0] = undefined
// reset whole array
// let x = [1,2,3,4]
// let y = x
// x = []
// console.log(x)

// let xx = [1,2,3]
// let yy = xx
// xx.length = 0
// console.log(xx)

//reset array using while loop // pop method

while(arr.length) arr.pop()

console.log(arr)