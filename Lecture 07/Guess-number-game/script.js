let randomNumber=generateRandom();
let numberOfTries=0;
console.log(randomNumber);

let ip=document.querySelector('#guess');
let btn=document.querySelector('#btn');

let container=document.querySelector('.container')

let resetBtn=document.createElement('button')
resetBtn.setAttribute('style','z-index:10');
resetBtn.classList.add('submit-btn');
btn.addEventListener('click',()=>checkGuess());


let guesses=document.querySelector('#guesses');
let statusValue=document.querySelector('#statusValue');
let lowOrHi=document.querySelector('#loworhi');

function generateRandom(){
    let value=Math.random()*100;
    value=(Math.ceil(value));
    return value;

}

function checkGuess(){
    enteredValue=ip.value
    enteredValue=+enteredValue;
    console.log(enteredValue);
    // if(isNaN(enteredValue)){
    //     alert('Enter valid number');
    //     return;
    // }
    if(enteredValue==randomNumber){
        statusValue.textContent='Congratulations 🤩';
        statusValue.className='pass';

        lowOrHi.textContent='';
        gameOver();
        return;
    }
    else if(enteredValue>randomNumber){
        statusValue.textContent='WRONG 😝';
        statusValue.className='fail';

        lowOrHi.textContent='TOO HIGH!'
    }
    else{
        statusValue.textContent='WRONG 😝';
        statusValue.className='fail';

        lowOrHi.textContent='TOO LOW!'
    }
    guesses.textContent+=`${enteredValue} `
    ip.value='';
    ip.focus();
    numberOfTries++;
    if(numberOfTries===7){
        statusValue.textContent='GAME OVER'
        gameOver();
        return;
    }

}
function gameOver(){
    ip.disabled=true;
    container.appendChild(resetBtn);
    resetBtn.textContent='Reset';
    // resetBtn.classList.add('d-block');
    resetBtn.classList.remove('d-none')
    resetBtn.addEventListener('click',()=>resetGame())
    btn.classList.add('d-none');
    btn.classList.remove('d-block')
}
function resetGame(){
    guesses.textContent='';
    statusValue.textContent='';
    lowOrHi.textContent='';
    ip.value='';
    numberOfTries=0;
    randomNumber=generateRandom();
    console.log(randomNumber);
    resetBtn.classList.add('d-none');
    btn.classList.add('d-block','submit-btn');       
    ip.disabled=false;
    ip.focus();
}