console.log("Hello");
let input=document.querySelector(".input");
let list=document.querySelector(".list")
let btn=document.querySelector(".btn");

let taskList=document.createElement('li');

btn.addEventListener('click',()=>addTask());
let doneBtn=document.createElement('input');
function addTask(){
    if(input.value){
         enteredTask=input.value;
        taskList.textContent=enteredTask;
        list.appendChild(taskList);
        input.value="";
        input.focus();

        let doneBtn=document.createElement('input');
        doneBtn.setAttribute('type','checkbox')
        taskList.appendChild(doneBtn);

        doneBtn.addEventListener('click',()=>taskDone());
    }
}
function taskDone(){
    // taskList.setAttribute('style',' text-decoration: line-through')
    if(doneBtn.value == ''){
            console.log(doneBtn.value)
            taskList.classList.add("done");
    } 
    else
    {
        taskList.classList.add("undone");
    }
}



let primeInput=document.querySelector(".prime-input");
let primeBtn=document.querySelector(".prime-btn");
primeBtn.addEventListener('click',()=>checkPrime());
let result=document.querySelector(".result");


function checkPrime(){
    result.textContent=""
    let ip=primeInput.value;
    ip=+ip;
    for(i=2;i<ip;i++){
        let flag=true;
        for(j=2;j<Math.sqrt(i)+1;j++){
         if(i%j===0){
            // resultNote.textContent="";
            // resultNote.textContent="Entered value is not prime";
            flag=false;
            break;
         }
      
        }
        if(flag){
            // resultNote.textContent="Entered value is prime";
            let resultNote=document.createElement('p');
            resultNote.textContent=i
            result.appendChild(resultNote);
        }
        

    }
    
       
   
}
