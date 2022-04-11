function createArray(count, min, max) {
    let a=[];
    for(let i=0;i<count;i++){
        a.push(Math.floor(Math.random()*(max-min+1))+min);
    }
    return a;
}
console.log(createArray(4, 11, 15));
console.log(createArray(5, 21, 25));
console.log(createArray(6, 31, 35));