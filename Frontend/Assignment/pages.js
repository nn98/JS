let studentCount = 31;
let pageSize = 10;
console.log(Math.ceil(studentCount/10)/(pageSize/10));
// console.log((studentCount/pageSize)+(studentCount%pageSize==0?0:1));