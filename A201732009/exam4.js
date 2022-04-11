let a=[],b=[],r=[];
for(let i=0;i<10;i++){
    a.push(Math.floor(Math.random()*(9-5+1)+5));
}
for(let i=0;i<10;i++){
    if(b[a[i]]==undefined)b[a[i]]=0;
    b[a[i]]++;
}
for(let i=0;i<10;){
    if(b[i]>0){
        r.push(i);
        b[i]--;
    }else i++;
}
console.log(r);