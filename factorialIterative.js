// 3! = 1*2*3
//  iterative method
let factorial = 1;
function fact(num) {
    // for(let i = 1; i<=num; i++ ) {
    //     factorial = factorial * i;
    // }
    // return factorial
    let i = 1
    while(i<=num) {
        factorial = factorial * i
        i++
    }
    return factorial
}
console.log(fact(5))
