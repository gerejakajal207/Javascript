console.log("First line");
let btn = document.querySelector("#sbmit");
btn.addEventListener('click',()=>console.log("Clicked!!"));
btn.addEventListener('dblclick',()=>console.log("DoubleClicked!!"));
btn.addEventListener('mouseenter',()=>console.log("Hovered!!"));
btn.addEventListener('mouseleave',()=>console.log("Mouse left!!"));
console.log("Second line");

let ip=document.querySelector('#ip');
let ans=document.querySelector('#ans');
let ans2=document.createElement('span');
// ans2.setAttribute('style','display:inline')
document.body.append(ans2)
ip.addEventListener('input',()=>{
    console.log(ip.value);
    ans.textContent=ip.value
    ans2.textContent=ip.value
})

