// idea : 1

var a = 5;
var b = 6;
console.log("before swap : a =", a, "b =", b);
var temp = a;
a = b;
b = temp;
console.log("after swap : a =", a, "b =", b);

// idea : 2

var x = 5;
var y = 7;
console.log("before swap : x =", x, "y =", y);

var x = x+y;
var y = x-y;
var x = x-y;

console.log("after swap : x =", x, "y =", y);

// idea : 3
var p = 4;
var q = 6;
console.log("before swap : p =", p, "y =", q);
[p,q] = [q,p]
console.log("after swap : p =", p, "y =", q);
