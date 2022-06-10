// number2.js
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(-Number.MAX_VALUE);
console.log(-Number.MIN_VALUE);
// significantDigits.js
let a;
a = 999999999999999; // 15 자리
console.log(a);
a = 9999999999999999; // 16 자리
console.log(a);
a = 0.9999999999999999; // 16 자리
console.log(a);
a = 0.99999999999999999; // 17 자리
console.log(a);
// infinity1.js
a = Infinity;
console.log(a);
console.log(typeof a);
let b = 3 / 0;
console.log(b);
console.log(typeof b);
// infinity2.js
a = Infinity;
b = 3 / a;
console.log(b);
let c = 3 + a;
console.log(c);
// NaN.js
a = 3 * "ABC";
console.log(a);
console.log(typeof a);
b = Number("abc");
console.log(b);
console.log(typeof b);
