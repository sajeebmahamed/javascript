// function leapYear(year) {
//     if(year % 4 === 0 && year % 400 === 0 || year % 100 !== 0) {
//         console.log(`${year} is leaf year`)
//     }
//     else {
//         console.log(`${year} is not leaf year`)
//     }
//     return year
// }
// console.log(leapYear(1700))

const leapYear = year => year % 4 === 0 && year % 400 === 0 || year % 100 !== 0 ? `${year} is leaf year` : `${year} is not leaf year`
console.log(leapYear(1700))