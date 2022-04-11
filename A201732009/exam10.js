let a=[1,"a",2,3,"four",5,6,"c","d",7]
let b=[]
for(let i of a)
    if(typeof i=="number")
        b.push(i);
console.log(b);