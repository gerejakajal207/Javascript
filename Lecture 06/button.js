function setSuccess(){
   let elem=document.getElementById('text');
   elem.classList.remove('dangerText')
   elem.classList.add('successText');
  
   
}
function setDanger(){
   let elem2=document.getElementById('text');
   elem2.classList.remove('successText')
   elem2.classList.add('dangerText');
    
   
}
function resetStyles(){
   let elem3=document.getElementById('text');
   elem3.classList.remove('dangerText', 'successText') //remove can takes multiple class names
    // elem3.classList.remove('successText')
   elem3.classList.add('resetStyles');
    
   
}
//remove- hai toh remove krega else skip krega so contains wli condition skip kr skte hai
// elem.remove('danger')
//elem.add('sucess')


// function setSuccess(){
//    let elem=document.getElementById('text');
//    elem.classList.add('successText');
//    if(elem.classList.contains('dangerText')){
//     elem.classList.remove('dangerText')
//    }
   
// }
// function setDanger(){
//    let elem2=document.getElementById('text');
//    elem2.classList.add('dangerText');
//     if(elem2.classList.contains('successText')){
//         elem2.classList.remove('successText')
//     }
   
// }
// function resetStyles(){
//    let elem3=document.getElementById('text');
//    elem3.classList.add('resetStyles');
//     if(elem3.classList.contains('sucessText')){
//         elem3.classList.remove('successText');
//     }
//     if(elem3.classList.contains('dangerText')){
//         elem3.classList.remove('dangerText');
//     }
   
// }
