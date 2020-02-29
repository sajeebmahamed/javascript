var array = [1,3,5,3,6,8,2,6,9];
var max = array[0];
for(var i = 0; i<array.length; i++){
    var element = array[i];
    if(element>max){
        max = element;
    }
}
console.log(max);