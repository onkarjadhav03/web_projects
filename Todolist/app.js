const inp=document.querySelector('#inp');
const btn=document.querySelector('#btn');
const list=document.querySelector('#list');


btn.addEventListener('click',()=>{


    const todoTxt=inp.value;

// if item added is empty simply return
    if(todoTxt===""){
        alert("empty to do");
        return;
    }
    const li=document.createElement('li');

    li.innerHTML=todoTxt;



    // adding remove to do event

    li.addEventListener('click',()=>{
        li.remove();
    })



    list.append(li);

    inp.value=""

})