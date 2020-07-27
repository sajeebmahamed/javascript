//insert element at the end
const arr1 = [1,2,3,4]
const arr2 = [5,6,7,8,9]
// arr1[4] = 5
// arr1[arr1.length] = 5
// arr1.push(arr2)
// arr1.push(...arr2)

// older version 
// Array.prototype.push.apply(arr1, arr2)

//insert element at the beginning
const arr3 = [1, 2, 3, 4]
const arr4 = [5, 6, 7, 8, 9]
// arr3.unshift(0)
// arr4.unshift(...arr3)
// Array.prototype.unshift.apply(arr3, arr4)

//add elements at the give index

const a = [5,6,7]
const b = [8,9,10]

// a.splice(2, 0, 88)
a.splice(0,0, ...b)
console.log(a)