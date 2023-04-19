const form=document.querySelector('form');
const list= document.getElementById('list');



//get and display moviess
function getMovies(searchText){



    //remove all displayed movies first
    while(list.firstChild){
        list.removeChild(list.firstChild);
    }


    const url=`https://api.tvmaze.com/search/shows?q=${searchText}`;//tvmaze url link


    //traversing through all the shows and displaying by creating new element;
    axios.get(url)
    .then((res) => {

    for(let item of res.data){
        if(item.show.image){
            const image=document.createElement('img');
            image.src=item.show.image.medium;

            image.style.margin='10px';
            list.append(image);
    }
}
    })
    .catch((err)=>{
        console.log(err);
    })
}



//take input after submitting and  refreshing the input value
form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const inpText=form.elements[0].value;  //taking input value 

    getMovies(inpText);


    form.elements[0].value="";  //setting input value back to null

})