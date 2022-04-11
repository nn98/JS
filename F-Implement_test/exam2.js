function countNumber(a) {
    let r=0;
    for (let i of a) {
        if (typeof i == "number")
            r++;
    }
    return r;
}
console.log(countNumber([1, 2, 3]));
console.log(countNumber(["1", 2, 3]));
console.log(countNumber(["1", 2, 3, 4, true]));