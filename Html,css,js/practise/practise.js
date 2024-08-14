let a=[1,2,3,4,5]
a.forEach((value,index,a)=>{
     a[index]=value*2;
});
console.log(a)

console.log(a.map((val)=>val*5))