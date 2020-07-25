//recursive method
// 0! = 1 
// 5! = 1*2*3*4*5
// 6! = (6-1)! * 6
// n! = (n-1)!*n

const factorial = num => num === 0 ? 1 : num * factorial(num - 1)

// function factorial(num) {
//     if(num === 0) {
//         return 1;
//     }
//     else {
//         return num * factorial(num -1)
//     }
// }

console.log(factorial(7))