let person1={name:"홍길동",age:16};
// let person2={name:person1.name,age:person1.age};
let person2=Object.assign({},person1);
person2.age=18;
console.log(person1);
console.log(person2);