const buttons=document.querySelectorAll('button');
const screen=document.getElementById('screen');

for(let button of buttons){
    button.addEventListener('click',(e)=>{

   const buttontext=e.target.innerText;



   if(buttontext==='C'){
    screen.value="";
   }
   else if(buttontext==='x'){
    screen.value+='*';
   }
   else if(buttontext==='='){

    try{
        screen.value=eval(screen.value);
    }
    catch(e){
        screen.value='Invalid operation'
    }
   }
   else{
  screen.value+=buttontext;

   }
   
       
    })
}