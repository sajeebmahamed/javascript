function Person() {
    this.name = 'Sajeeb'
}
function Teacher() {
    Person.call(this)
    this.subject = 'Javascript'
}
var teacher = new Teacher()
var name = teacher.name
console.log(name);