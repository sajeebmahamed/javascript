const review = [
    { id: 1, review: 3.00 },
    { id: 2, review: 3.00 },
    { id: 3, review: 4.00 },
    { id: 5, review: 5.00 },
    { id: 6, review: 1.00 },
]

const score = [
    { id: 1, review: 300 },
    { id: 2, review: 300 },
    { id: 3, review: 400 },
    { id: 5, review: 500 },
    { id: 6, review: 100 },
]

const profile = score.some(value => value.review> 300) 
console.log(profile)

const positive = review.every(value => value.review>=3.00)
if(positive) {
    console.log('Customer satisfied')
}
else {
    console.log('Customer doesent satisfied')
}