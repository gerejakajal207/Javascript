setTimeout(()=>{console.log('hello')},0); 
console.log("world");

console.log(document.getElementsByTagName('h1'));
// brings all with tag as h1

console.log(document.getElementsByClassName('foo'));

let elem=document.getElementById('temp');
elem.classList.add('bar');
console.log(document.querySelectorAll('.foo'));

let paraElements=document.getElementsByTagName('p');
for(elem of paraElements ){
    elem.classList.add('danger');
}

// we cannot do paraElements.classList.add()
// Since paraElements is a Html Collection and this will return undefined
// and this will give error reading add of undefined

let para=document.querySelector('#para');
para.style='color:green'

// element.attributeName='attributeValue'

// if i want to give a class to para:
para.className='random1 random2'
// = overwrites the name 
//classList.add adds more classes
//my-text.classList.add('Danger')
// my-text.className='success'
//  this removes the class danger from the list and replaces it with success

let link=document.querySelector('#link')
setTimeout(
    ()=>{
        link.href='https://github.com/';
        link.target='blank';
        link.style='color:red'
    },10000
)

link.setAttribute('class','success random')
// element.setAttribute('attributeName','attributeValue');
