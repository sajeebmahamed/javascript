const students = [
    { id: 1, name: 'sajeeb', email: 'sajeeb@mail.com', due: 1000 },
    { id: 2, name: 'alex', email: 'alex@mail.com', due: 0 },
    { id: 3, name: 'nexian', email: 'nexian@mail.com', due: 599 },
    { id: 4, name: 'lion', email: 'lion@mail.com', due: 0 },
]

// const filter = students.filter(value => value.due > 0 )
// const msg = filter.map(value => {
//     return{
//         title: `Dear, ${value.name} you have ${value.due} please pay before mid exam`
//     }
// })
// map vs filterw

const filter = students.filter(value => value.due > 0)
                        .map(value => {
                            return {
                                ...value,
                                subject: `Dear, ${value.name} you have ${value.due} please pay before mid exam`
                            }
                        })

// console.log(filter)
console.log(filter)