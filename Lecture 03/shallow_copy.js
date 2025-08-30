let person1={
    "name":"Kajal",
    "address":{
        "street":"XYZ road",
        "building":"ABC building"
    }
}

let person2={
    ...person1
}
console.log(person1,person2)

person2.name="Updated name"
person2.address.building="Updated ABC Building"
console.log(person1,person2)

// ...person1 will only do one level copy (shallow copy), Address will point to same object in both the objects, thus changing address data of variable 2 will also reflect in variable 1
// shallow copy - copy one level in object
// Deep object - copy nested objects

let numbers=[1,2,3,4,5]
let sum=0
for(let i=0; i<numbers.length;i++){
    sum=sum+numbers[i]
}

let sum2=0
for(let elem of numbers){
    sum2+=elem
}
console.log(sum,sum2)

let book={
    "id":1,
    "title":"Title1"
}
for(let key in book){
    console.log(book[key])
}
// of (like foreach loop in java) - single single element in an array(iterable) but not object because object is not iterable
// in- loop over keys of an object
//------------------------------------------------------------------------
// for(let key of book){
//     console.log(book[key])
// }
// this will give an error since book is not iterable and of works on iterable items
//------------------------------------------------------------------------
for(let x in numbers){
    console.log(x)
}
// here it will print index because index is key for an array and in always loops over keys
// arrays ka keys is indices and in takes keys therefore indices in case of in for arrays