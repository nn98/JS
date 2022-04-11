let rectangles=[
    {width:4,height:3},
    {width:5,height:2},
    {width:2,height:3}
]
rectangles.sort((r1,r2)=>r2.width-r1.width);
console.log(rectangles);