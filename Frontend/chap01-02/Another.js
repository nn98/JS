// number1.js
let a = 100;
console.log(a);
a = 3.14159;
console.log(a);
// parse.js
let s = "123.456";
a = parseInt(s); // let a = parseInt(s);
console.log(a);
let b = parseFloat(s);
console.log(b);
let c = Number(s);
console.log(c);
// toString.js
a = 123.456; // let a = 123.456;
s = a.toString(); // let s = a.toString();
console.log(s);
console.log(typeof s);
s = String(a);
console.log(s);
console.log(typeof s);
// pi.js
console.log(Math.PI);
// round.js
console.log(10 / 3);
console.log(Math.round(10 / 3));
console.log(10 / 4);
console.log(Math.round(10 / 4));
// pow.js
console.log(Math.pow(2, 3));
console.log(Math.pow(2, 8));
console.log(Math.pow(2, 10));
// sqrt.js
console.log(Math.sqrt(9));
console.log(Math.sqrt(16));
// abs.js
console.log(Math.abs(-3))
// ceil.js
console.log(Math.floor(4.01));
console.log(Math.floor(4.99));
console.log(Math.ceil(4.01));
console.log(Math.ceil(4.99));
// sin.js
console.log(Math.sin(Math.PI / 2)); // sin 90 도
console.log(Math.cos(Math.PI)); // cos 180 도
// max.js
console.log(Math.max(2, 3));
console.log(Math.max(2, 3, 5));
console.log(Math.min(2, 3));
console.log(Math.min(2, 3, 5));
// random.js
for (let i = 0; i < 20; ++i) {
let a = Math.floor(Math.random() * 6 + 1);
console.log(a);
}
// random2.js
const MAX = 5, MIN = 2;
for (let i = 0; i < 20; ++i) {
let a = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
console.log(a);
}