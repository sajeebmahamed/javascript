function myFun(){
    console.log("Say! Hello");
}
myFun();
myFun();
myFun();

function doubleIt(num){
    var result = num * 2;
    console.log(result);
}
doubleIt(5);
doubleIt(10);
doubleIt(15);

function multiFun(a , b){
    var sum = a+b;
    return sum;
}
var value = multiFun(11,11);
console.log(value);
// multiFun(5,7);