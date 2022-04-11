function doSomething(a, b, c) {
    return a>(b>c?b:c)?a:(b>c?b:c);
}
console.log(doSomething(5, 1, 2));
console.log(doSomething(1, 2, 4));
console.log(doSomething(1, 8, 2));