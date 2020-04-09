function Looping(iterate) {
    for (let i = 0; i < iterate.length; i++) {
        const element = iterate[i];
        OddEvenChecker(element);

    }
}

function OddEvenChecker(oddeven) {
    if (oddeven % 2 == 0) {
        console.log(oddeven, 'is even');
    }
    else {
        console.log(oddeven, 'is odd');
    }
}


var num = [10, 11, 12, 13, 14, 15, 16];
Looping(num)
var age = [8,6,4,3,22,3,4,56];
Looping(age);
