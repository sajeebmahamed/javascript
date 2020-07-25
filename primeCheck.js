function isPrime(n) {
    for(i = 2; i<n; i++) {
        if(n%i === 0) {
            return 'Not a prime number'
        }
    }
    return 'Prime num'
}
console.log(isPrime(139))