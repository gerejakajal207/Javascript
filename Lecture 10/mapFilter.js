let originalList = document.querySelector(".og-list");
let ansList = document.querySelector(".ans-list");
let btn = document.querySelector(".btn");
let val=""
let data = [
  { name: "John", marks: 100 },
  { name: "Abc", marks: 85 },
  { name: "Pqr", marks: 60 },
  { name: "Foo", marks: 50 },
];
for (let item of data) {
    val=item.name+"-"+item.marks
    originalList.textContent+=val
  }
val=""
btn.addEventListener("click", () => {
  let newData = data.filter((elem) => elem.marks > 75);
  for (let item of newData) {
    // val=item.name+"-"+item.marks
    // ansList.textContent+=val
    let li=document.createElement('li')
    li.textContent=item.name+"-"+item.marks
    ansList.appendChild(li)
  }
  let names=newData.map((elem)=>elem.name)
  ansList.textContent+=names

//   You can also do this
// let names=data.filter((elem)=>elem.marks>75).map((elem)=>elem.name)
// This will directly give the array of names of students with marks>75

});
