// Array of Objects
let users=[
    {id:1,name:"Kajal",isActive: true},
    {id:2,name:"Laveena",isActive: true},
    {id:3,name:"XYZ",isActive: false},
]
let activeUsers=[]
for (let obj of users){
    if(obj.isActive){
        activeUsers.push(obj)
    }
}
console.log(activeUsers)
console.log("--------------")

let values={
    "1":"yellow",
    1:"red",
    2:"green"
}
console.log(values)
// This will give only 2 keys becausenumber 1 gets converted to string internally and overrides string '1'

console.log("--------------")

// to filter out failed students (avg<45)
let students=[
    {name:"abc",avg:60},
    {name:"pqr",avg:30},
    {name:"xyz",avg:90}
]
failedStudents=[]
for(let obj of students){
    if(obj.avg<45){
        failedStudents.push(obj)
    }
}
console.log(failedStudents)

console.log("--------------")

const studentsData=[
    {name:"abc",grades:[50,60,70]},
    {name:"pqr",grades:[30,20,40]},
    {name:"xyz",grades:[90,85,95]}
]
let avgStudentsData=[]
for(let obj of studentsData){
    let sum=0
    let average=0
    for(let grade of obj.grades ){
        sum=sum+grade
    }
    average=sum/obj.grades.length
    let elem={name:obj.name,avg:average}
    avgStudentsData.push(elem)
}
console.log(avgStudentsData)

console.log("--------------")

let items=[
    {
        id:1,
        name:"laptop",
        price:5000,
        quantity:1
    },
    {
        id:2,
        name:"Headphones",
        price:2000,
        quantity:2
    },
    {
        id:1,
        name:"Mouse",
        price:800,
        quantity:1
    },

]
let sum=0
for(let elem of items){
    sum=sum+(elem.price*elem.quantity)
}
console.log(sum)

//new question
let student=[
    {name:"John",dept:"CSE"},
    {name:"Mary",dept:"ECE"},
    {name:"Peter",dept:"CSE"},
    {name:"Sara",dept:"EEE"},
]
let newObj={
}
for (let elem of student){
    if(newObj[elem.dept]){   
        // agar dept exist krta hai toh uska value return krega which will be a truthy value
        //agar dept exist nhi krta toh it will return undefined which is a falsy value->else mei jayega
        newObj[elem.dept].push(elem.name)
        // agar exist krta hai toh newOj[elem.dept] will return an array of names and therefore push 
    }
    else{
        newObj[elem.dept]=[elem.name]
        // else mein aaya matlab exist nhi krta hai , exist nhi krta toh array bnana pdega newObj[elem.dept] se dept milega ab dept ke key mein [elem.name] -> naam array m aayega [] aur value banjayega for the key dept
    }
}
console.log(newObj)

