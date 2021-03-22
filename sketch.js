
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

paper1 = new Paper(100,600,10);
ground = new Ground(600,height,1200,20);
dustbin1 = new Dustbin(550,620,20,100);
dustbin2 = new Dustbin(610,660,105,20);
dustbin3 = new Dustbin(670,620,20,100);

slingshot1 = new Slingshot(paper1.body,{x:200, y:400});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  Engine.update(engine);

paper1.display();
ground.display();
dustbin1.display();
dustbin2.display();
dustbin3.display();
slingshot1.display();
 
  drawSprites();
  
}
function mouseDragged(){

  Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY});

  Matter.Body.applyForce(paper1.body,{x:paper1.body.position.x, y:paper1.body.position.y}, {x:15,y:-15});
  
}
function mouseReleased(){
  slingshot1.fly();
}
