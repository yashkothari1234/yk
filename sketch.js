
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,dustbin;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball = new Paper(50,280,30,30);
ground = new Ground(600,height,1200,20);
box1 = new Box(580,360,20,100);
box2 = new Box(780,360,20,100);
box3 = new Box(680,388,200,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  keyPressed();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:0.3,y:-1});
	}
}


