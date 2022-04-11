function sum(a) {
    let r=0;
    for(let i of a)r+=i;
    return r;
}
console.log(sum([1, 2, 3, 4]))
console.log(sum([3, 4, 5]))
console.log(sum([20, 21]))