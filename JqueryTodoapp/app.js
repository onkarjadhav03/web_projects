//creating new to dos
$('#inp').keypress(function (e){
    if(e.which===13){  //13 is ascii value of which
        const todotext=$('#inp').val();
        $('#list').append(`<li><span><i class="fa-solid fa-trash-can"></i></span> ${todotext}</li>`);
        $('#inp').val("");
    }
})


//mark as completed
$('ul').on('click','li', function (){
    $(this).toggleClass('completed'); 
})


//remove 
$('#list').on('click','span',function(){
    $(this).parent().fadeOut(700,function(){
        $(this).remove();
    })
   e.stopPropagation(); //stops event bubbling
})

$('#plus').click(function(){
    $('#inp').fadeToggle();
})