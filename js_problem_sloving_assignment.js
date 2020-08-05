// Problem 1
const feetToMile = feet => isNaN(feet) || feet < 0 ? `${feet} is not valid value` : feet / 5280

// Problem 2
const woodCalculator = (chair, table, bed) => chair * 1 + table * 3 + bed * 5

//Problem 3
const brickCalculator = level => {
    if (isNaN(level) || level > 0 && level <= 10) {
        // return totalBrick = (level * 15) * 1000
        return totalBrick = 15 * 1000
    }
    else if (level > 10 && level <= 20) {
        // return totalBrick = (level * 12) * 1000
        return totalBrick = 12 * 1000
    }
    else if (level > 20) {
        // return totalBrick = (level * 10) * 1000
        return totalBrick = 10 * 1000
    }
    else {
        return "Please enter a valid level number"
    }
}

//Problem 4

// const tinyFriend = arr => arr.sort((a, b) => a.length - b.length)[0] 
// const tinyFriend = arr => arr.filter(e => typeof e === 'string').sort((a, b) => a.length - b.length)[0];

function tinyFriend(arr) {
    let shortLength = Infinity;
    let shortest = ''
    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'string' && arr[i].length < shortLength) {
                shortest = arr[i];
                shortLength = arr[i].length;
            }
        }
    }
    return shortest;
}
let friends = ['Sajeeb', 'Shakib', 'AlexX', 'alex', 'John', 'Smith']



