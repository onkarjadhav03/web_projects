const canvas=document.getElementById('canvas');
const pen=canvas.getContext('2d');


// pen.fillStyle='yellow';


// let init_x=50;
// let init_y=50;

const cs=67;
const W=1200;
const H=735;
let food=null;
// let gameover=false;
let score=0;

const snake={
    init_len:5,
    direction:'right',
    cells:[],

    createSnake:function(){
         for(let i=0;i<=this.init_len;i++){
            this.cells.push({
                x:i,
                y:0
            });
         }
    },

    drawSnake: function(){
        for(let cell of this.cells){
            pen.fillRect(cell.x*cs,cell.y*cs,cs-1,cs-1);
        }
    },
    updateSnake: function(){

        //getting the value of head of snake i.e last index of the cells array;
        const headx=this.cells[this.cells.length-1].x;
        const heady=this.cells[this.cells.length-1].y;

        if(headx===food.x && heady===food.y){
            food=getRandomFood();
            score++;
        }
        else{
            //removes first cell
        this.cells.shift();
        }

        let nextX;
        let nextY;

        if(this.direction==='down'){
            nextX=headx;;
            nextY=heady+1;

            if(nextY*cs>=H){
                pen.fillStyle='red';
                pen.fillText('Game over',100,100);
                clearInterval(id);
            }
        }
        else if(this.direction==='up'){
            nextX=headx;
            nextY=heady-1;

            if(nextY*cs< 0){
                pen.fillStyle='red';
                pen.fillText('Game over',100,100);
                clearInterval(id);
            }
        }
        else if(this.direction==='left'){
            nextX=headx-1;
            nextY=heady;


            if(nextX*cs< 0){
                pen.fillStyle='red';
                pen.fillText('Game over',100,100);
                clearInterval(id);
            }
        }
        else{
             nextX=headx+1;
            nextY=heady; 

            if(nextX*cs >=W){
                pen.fillStyle='red';
                pen.fillText('Game over',100,100);
                clearInterval(id);
            }
        }

        


        //push the new cell after head inside the cells array
        this.cells.push({
            x:nextX,
            y:nextY
        });
    }
}

//this is gng to initlize the game
function init(){
    // pen.fillRect(init_x,init_y,50,50);
    snake.createSnake();

    food=getRandomFood(); 

    function keyPressed(e){
             if(e.key==='ArrowDown'){
        snake.direction='down';
       }
       else if(e.key==='ArrowUp'){
        snake.direction='up';
       }
       else if(e.key==='ArrowLeft'){
        snake.direction='left';
       }
       else if(e.key==='ArrowRight'){
        snake.direction='right';
       }
    }
  

    document.addEventListener('keydown',keyPressed);

}


//update the properties of game
function update(){
// init_x+=50;
snake.updateSnake();


}

//Draw something on canvas
function draw(){

   
    // pen.clearRect(0,0,1200,735);
    // pen.fillRect(init_x,init_y,100,100);
    pen.clearRect(0,0,W,H);
    
    pen.font='40px sans-serif';
    pen.fillText(`Score ${score}`,100,50)

    pen.fillStyle='blue';
    pen.fillRect(food.x*cs,food.y*cs,cs,cs);
    pen.fillStyle='yellow';
    snake.drawSnake();
}


//game loop
function gameLoop(){
    draw();
    update();
    
}

function getRandomFood(){
    const foodX=Math.round(Math.random()*(W-cs)/cs);
    const foodY=Math.round(Math.random()*(H-cs)/cs);

    food={
        x:foodX,
        y:foodY
    }
    return food;
}

init();

const id=setInterval(gameLoop,100);