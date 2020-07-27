const arr1 = [1,2,3]
// arr1[2] = 4

//array of objects

const students = [
    {id: 1, name: 'Sajeeb'},
    {id: 2, name: 'Alex'},
    {id: 3, name: 'John'}
]
const givenId = 1
const updatedName = 'Alexcies'

for(let i = 0; i<students.length; i++) {
    if(givenId === students[i].id) {
        students[i].name = updatedName
        break
    }
}

console.log(students)