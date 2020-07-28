const array = [45,74,2,11,23,62,49,53,62]
const binarySearch = (arr, key) => {
    let lowest = 0
    let highest = arr.length -1
    while(lowest <=highest) {
        let mid = Math.floor((lowest+highest)/2)
        if(arr[mid] === key) return mid
        if (arr[mid] < key) lowest = mid + 1
        if(arr[mid] > key) highest = mid - 1
    }

    return -1
}
array.sort((a,b) => a - b)
const index = binarySearch(array, 62)
console.log(index)