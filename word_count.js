var sent = "Hello  Im Sajeeb. Currently im living in dhaka Bangladesh.";
var count = 0;
for(i = 0; i<sent.length;i++){
    var char = sent[i];
    if(char == " " && sent[i-1] !=" "){
        count++;
    }
}
count++;
console.log(count);