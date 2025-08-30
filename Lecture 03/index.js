console.log("Hii")
let obj={
    "name":"Kajal",
    "rollNo":49,
    "favSubjs":["Ds","Maths","Java"],
    "address":{
        "street":"ABC",
        "building":"A",
        "landmark":"ABC"
    }
}
console.log(obj)
console.log(obj["address"])
console.log(obj["rollNo"])
console.log(obj["favSubjs"])
console.log(obj.name)
let keyVar="rollNo"
console.log(obj.keyVar)
// it will search for keyVar key which is not present
// and will print undefined
console.log(obj[keyVar])
// it will replace keyVar by rollNo


//console.log(obj[rollNo])
// Inside [] it has to be a string else it will look for variable named rollNo

const numVal=5
// numVal=7;
// This will give an error

const obj2={
    "name":"foo",
    "rollNo":5,
}
obj2.name="changed"
console.log(obj2["name"])
obj2.address="test"
console.log(obj2)

// obj2={
//     "name":"different",
//     "address":"123"
// }
// console.log(obj2)
// This will give an error 
// obj2 is declared as const
// obj2 cannot point to another memory reference

let num1=5;
let num2=5;

console.log(num1==num2)
console.log(num1===num2)

console.log("-------------")

let arr1=[1,2,3,4,5]
let arr2=[1,2,3,4,5]

console.log(arr1==arr2)
console.log(arr1===arr2)

console.log("-------------")

let student1={
    "name":"Test",
    "rollNo":5,
}

let student2={
    "name":"Test",
    "rollNo":5
}
console.log(student1==student2)
console.log(student1===student2)

// In non primitive data types you can never chck equality using == or ===
// since it will check refernces

console.log("-------------")

let student3=student1;
console.log(student1===student3)

let emp1={
    "name":"foo",
    "id":1
}
let emp3=emp1;
emp3.name="kajal"

console.log(emp1,emp3)
// line 91 will change the value of name in both emp1 and emp2
// Since the memorry locan is same just the reference is diff

let emp2={
    ...emp1
    // spread operator spread all the key value of emp1 into emp2

}
// create new obj spread out all value from emp1 into that object and let emp2 refer to that new object
console.log(emp1,emp2)
emp2.name="Updated"
console.log(emp1,emp2)