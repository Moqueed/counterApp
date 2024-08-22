const IncrementBtn = document.querySelector('#plus');
const DecrementBtn = document.querySelector('#minus');
const countElement = document.querySelector('#count span');
const InputElement = document.querySelector('input');

let count = 0;
let incrementDecrementBy = 1;

InputElement.addEventListener('change',()=>{
    const value = parseInt(InputElement.value);
    if(value){
        incrementDecrementBy = value;
    }else{
        incrementDecrementBy = 1;
    }
})

IncrementBtn.addEventListener('click',(e)=>{
    count+=incrementDecrementBy;
    countElement.innerText = count;
})
DecrementBtn.addEventListener('click',(e)=>{
    if(count-incrementDecrementBy < 0){
        return;
    }
    count-=incrementDecrementBy;
    countElement.innerText = count;
})