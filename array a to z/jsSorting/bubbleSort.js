const MyArray = [1,5,3,7,9,4,2,0,8]
//ascending oreder
const bubbleSort = array => {
    for(let i = 0; i < array.length-1; i++) {
        for(let j = 0; j < array.length - 1; j++ ) {
            if(array[j] > array[j+1]) {
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
            }
        }
    }
}
const bubbleSortd = array => {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] < array[j + 1]) {
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
}
//decending order
bubbleSortd(MyArray)
console.log(MyArray)