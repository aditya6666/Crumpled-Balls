var ground, paper, dustbin1, dustbin2, dustbin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 200);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(50,155,20);
	dustbin1 = new Dustbin(650,155,200,20);
	dustbin2 = new Dustbin(540,115,20,100);
	dustbin3 = new Dustbin(760,115,20,100);

	ground = new Ground(width/2, 170, width, 10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.setStatic(paper.body,false);
	Matter.Body.applyForce(paper.body,paper.body.position,{x:12,y:-20});
	}

}



