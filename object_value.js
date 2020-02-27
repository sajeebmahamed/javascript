var std = {id:111, name:"sajeeb",sec:"a"};
var sId = std.id;
var sName = std["name"];
var sSec = "sec";
var stdSec = std[sSec];
console.log(std);
// console.log(sId);
// console.log(sName);
// console.log(sSec);
// console.log(stdSec);

std.id = 2;
console.log(std);
