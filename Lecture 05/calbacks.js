let fun1=function(){
    console.log("Fun1 done!")
}

// callback - function passed as a parameter to another function
function foo(a,callback){
    console.log(a)
    // joh bhi kaam hai sab khatam kia 
    callback(); 
}
foo(1,fun1)


let random=(a)=>{
    console.log('random '+15)
}

function random2(a,callback){
    a=a+5;
    callback(a);
    console.log(a);
    console.log('last');
}
random2(10,random);


setTimeout(()=>{console.log('hello')},10000); 
// timeout expects 2 arguments 
// inbuilt js funcn 
// second parameter is the time in millisecond
// 1st parameter is the callback
// this means after 2000ms setTimeout will call the callback function
// no hardcoded function , will call whatever function u have given after that given time
setInterval(()=>{console.log('hi')},3000);
// after every 10000ms hi will get printed
// runs again n again

// passed a function as a parameter in both of these
