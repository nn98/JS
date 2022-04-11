function insert(a, index, value) {
    a.splice(index,0,value);
}
let a = [1, 2, 3];
insert(a, 2, 33)
console.log(a)
insert(a, 1, 22)
console.log(a)
insert(a, 0, 11)
console.log(a)