const students = [
    { id: 1, name: 'Sajeeb', gpa: 3.00, email: 'sajeeb@mail.com' },
    { id: 2, name: 'Alex', gpa: 3.40, email: 'alex@mail.com' },
    { id: 3, name: 'Cyan', gpa: 2.00, email: 'cyan@mail.com' },
]

const info = students.map(value => {
    return {
        ...value,
        title: `Hello ${value.name} - your result has been published`,
        msg: `you got ${value.gpa} and you have ${value.gpa >= 3.20 ? 'Passed' : 'Failed'}`
    }
})
console.log(info)