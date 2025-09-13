// Arrow function
let fun=(a,b)=>{ return a+b}
console.log(fun(4,5))

// declaration 
function calcAvg(grades){
    let sum=0
    for(key of grades){
        sum=sum+key 
    }
    avg=sum/grades.length
    return avg;
}
let grades=[2,2,2]
console.log(calcAvg(grades));

// anonymous function 
(function(){
    console.log('called')
})()

// Expression function
let exp=function(){
    console.log('expression called')
}
exp()
