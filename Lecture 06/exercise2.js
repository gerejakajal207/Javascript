// function view(){
//     let para=document.querySelector('.para');
//     para.setAttribute('style','display:block')
// }
// function hide(){
//     let para=document.querySelector('.para');
//     para.setAttribute('style','display:none')
// }
let para=document.querySelector('.para');
let flag=true;
let btn=document.querySelector('#btn')
function toggle(){
    
    if(flag){
        para.setAttribute('style','display:none');
        btn.textContent='View Details'
    }
    else{
        para.setAttribute('style','display:block');
        btn.textContent='Hide Details'
    }
    flag=!flag;
}

// agar btn.textContent+='Hide'
// aisa kia toh view hide view hide aisa append hota jayega