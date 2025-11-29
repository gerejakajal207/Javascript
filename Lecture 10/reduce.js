let arr =[25.5,10,45.99,5]
let sum=arr.reduce((acc,current)=>acc+current,0)
console.log(sum)
// in 1st iteran acc=0, current=25.5 then 0+25.5
// in 2nd iteran acc=25.5, current=10 then 25.5+10
//in 3rd iteran acc=35.5, current=45.99 then 35.5+45.99
// and so on