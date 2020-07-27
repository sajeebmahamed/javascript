const arr = [1,2,3,4]
// const sliced = arr.slice(1,3)

//array like object
function toArray() {
    return Array.prototype.slice.call(arguments)
}
const newArray =  toArray(3,4,5,2,3,'test')
console.log(newArray)
console.log(newArray.__proto__.constructor)
