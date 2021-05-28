
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground
var box1
var box2
var box3
var ball
var boximage
function preload()
{
boximage=loadImage("dustbingreen.png")	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	myWorld = engine.world;
ground=new Ground(400,690,800,10)
box1=new Box(525,670,20,200)
box2=new Box(723,670,20,200)
box3=new Box(615,680,200,20)
ball=new Ball(100,680,50)
slingshot=new Connection(ball.ball,{x:100,y:350})
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("hotpink");
 image (boximage,525,490,200,200) 
  drawSprites();
 ground.display()
 ball.display()
}
function mouseDragged(){
	Matter.Body.setPosition(ball.ball,{x:mouseX,y:mouseY})
	}
	function mouseReleased(){
		slingshot.break()
		}
