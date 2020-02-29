var x = 5;
var y = 7;
x = x+y;
y = x-y;
x = x-y;
console.log("after swap : x =", x, "y =", y);

var p = 11;
var q = 12;
[p,q] = [q,p];
console.log("after swap : p =", p, "q =", q);