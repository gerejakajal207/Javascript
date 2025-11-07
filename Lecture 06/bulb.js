let on=document.querySelector('.on');
let off=document.querySelector('.off');
let flag=true;
let btn=document.querySelector('#btn');
on.setAttribute('style','display:none');
off.setAttribute('style','display:block');
function toggle(){
    if(flag){
        on.setAttribute('style','display:block;transition: opacity 0.2s linear');
        off.setAttribute('style','display:none;transition: opacity 0.2s linear');
        btn.setAttribute('style','position:relative;top:15px;background-color:green;transition: opacity 0.2s linear;box-shadow:2px -4px 4px grey');
        // btn.textContent='Off'
    }
    else{
        off.setAttribute('style','display:block;transition: opacity 0.2s ease');
        on.setAttribute('style','display:none;transition: opacity 0.2s ease');
        btn.setAttribute('style','position:relative;bottom:15px;background-color:red;transition: opacity 0.2s linear;box-shadow:2px 4px 4px grey');
       
        // btn.textContent='On'
    }
    flag=!flag;
}