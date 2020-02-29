var mId = [1,2,3,4,3,5,6,7,6,0,8,7];
var uniqueId = [];

for(i = 0 ; i<mId.length; i++){
    var element = mId[i];
    var index = uniqueId.indexOf(element);
    if(index == -1){
        uniqueId.push(element);
    }
}
console.log(uniqueId);
