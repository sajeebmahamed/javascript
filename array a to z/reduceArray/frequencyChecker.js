const votes = [
    'Java',
    'Python',
    'Javascript',
    'Javascript',
    'Python',
    'Javascript',
    'Javascript',
    'Java',
    'Java'
]

const result = votes.reduce((acc, curr) => {
    if(acc[curr]) {
        acc[curr]++
    } else{
        acc[curr] = 1
    }
    return acc
}, {})
console.log(result)