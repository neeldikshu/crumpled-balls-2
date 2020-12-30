
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world,ground,paperBall,ds1,ds2,ds3,ds4;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	ground= new Ground(500,390,1000,10);
	paperBall = new Paper(100,100,40,40);
	ds1 = new Dustbin(700,370,200,20);
	ds2 = new Dustbin(800,330,20,100);
	ds3 = new Dustbin(600,330,20,100);
	ds4 = new Dust(700,310,300,140)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paperBall.display();
  ds1.display();
  ds2.display();
  ds3.display();
  ds4.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:1050,y:-1000});
		
	}
}

