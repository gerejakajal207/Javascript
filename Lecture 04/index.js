let names="Kajal"
console.log("My name is "+names)
console.log(`My name is ${names}`)
// template string

// property of string
console.log(names.length)

console.log(names[6]) 
// this will give undefined

console.log(names.toLowerCase())
console.log(names.toUpperCase())

let sentence="Hello, my name is hello"
console.log(sentence.replace("hello","xyz"))
// it is not going to replace in the existing string
// it will return a new string 
// this will replace the first occurence only

console.log(sentence.replaceAll("hello","xyz"))
// it is not going to replace in the existing string
// it will return a new string 
// this will replace all occurences 

console.log(sentence.includes("helloss"))
// checks whether sting is present or not returns boolean value you can also pass a position to search
// position parameter is optional

let flag='any'
// any non empty string results into a truthy value
// empty string results into falsy value
// truthy/falsy-isko if me dalne ke baad u get true or false
if(flag){
    console.log("hello");
}
else{
    console.log("hi")
}
console.log("--------------")
let flag2=10
// 0-> flasy value
// any other value is even negative is truthy
if(flag2){
    console.log("hello");
}
else{
    console.log("hi")
}   

// to convert string to a interger:
let numString='1.5'
console.log(Number(numString))
console.log(Number.parseInt(numString))//give int here it will give 1
console.log(Number.parseFloat(numString))//gives float here it will give 1.5
console.log(+numString)//easier and common way