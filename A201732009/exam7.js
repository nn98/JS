let rectangles=[
    {width:4,height:3},
    {width:5,height:2},
    {width:2,height:3}
]
console.log(rectangles.reduce(
    (r1,r2)=>((r1.width*r1.height>r2.width*r2.height)?r1:r2)));