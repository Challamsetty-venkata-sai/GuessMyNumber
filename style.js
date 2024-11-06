const number=Math.floor(Math.random()*20)
console.log(number);
const body=document.querySelector('.body');
let count=0;
const initial=document.querySelector('.initial');
initial.textContent=20;//string
const final=document.querySelector('.final');
const again=document.querySelector('.again-btn');
const question=document.querySelector('.question');







const check=document.querySelector('.check-btn');
check.addEventListener('click',()=>{
    count=count+1;

    const userValue=Number(document.querySelector('.number').value);
    if(number===userValue)
    {
        let result=document.querySelector('.result');
        result.textContent='🥇 you won game';
        body.style.backgroundColor='green';
        let r1=Number(initial.textContent);
        
        final.textContent=r1;
        question.textContent=number;
        question.style.fontSize='2rem';
        question.style.marginTop='20px';

        


        
    }
    else{
        let result=document.querySelector('.result');
        result.textContent='😭 loose...';
        body.style.backgroundColor='red';
        let r1=Number(initial.textContent)
        r1=r1-1;
        initial.textContent=r1;
        

    }

})
again.addEventListener('click',()=>{
    initial.textContent=20;
    let result=document.querySelector('.result');
    result.textContent='start guessing...';
    body.style.backgroundColor='black';
    question.textContent='?';
    

})
