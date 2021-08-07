var ground, board
var ball
const Engine  = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies



function setup() {
  createCanvas(800,400);
  
  engine = Engine.create()
 world = engine.world
 

 
 ground =   new Ground(width/2,390, width, 15)   
 ball = new Ball(100,365)
 board = new Board(790,100,10,80)


}
  
function draw() {
  background("black");  
 
  Engine.update(engine)

    ground.display()
    ball.display()
   
    bringBackBall()
    board.display()


    
    
  }

 function keyPressed(){

  if(keyCode === 32){
Matter.Body.applyForce(ball.body, {x:ball.body.position.x, y:ball.body.position.y},{x:30, y:-30} )
  }

 }

function bringBackBall(){
if(ball.body.position.x>800){
  Matter.Body.setPosition(ball.body, {x:100,y:365})
  Matter.Body.setVelocity(ball.body, {x:0,y:0})
}


}