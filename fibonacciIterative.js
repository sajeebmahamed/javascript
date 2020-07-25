//iterative method
//fibo[5] = fibo[5-1] + fibo[5-2]
//fibo[n] = fibo[n-1] + fibo[n-2]
//fibo[i] = fibo[i-1] + fibo[i-2]

let fibo = [0, 1]
// for(let i = 2; i<=12; i++) {
//     fibo[i] = fibo[i-1] + fibo[i-2]
// }

function fibonacci(num) {
    for(let i= 2; i<=num; i++) {
        fibo[i] = fibo[i-1] + fibo[i-2]
    }
    return fibo
}


console.log(fibonacci(10))