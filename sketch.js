const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var dustbin,dustbin1,dustbin2,dustbin3,dustbinImage;

function preload()
{
	dustbinImage = loadImage("sprites/dustbin.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	ground = new Ground(400,680,800,20);

	dustbin = createSprite(700,570,150,200);
	dustbin.addImage("dustbin",dustbinImage);

	dustbin1 = new Dustbin(700,650,150,20);

	paper = new Paper();

	dustbin2 = new Dustbin(625,605,20,130);
	dustbin3 = new Dustbin(775,605,20,130);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();

  dustbin.scale = 0.7;

  //dustbin1.display();

  paper.display();
  //dustbin2.display();
  //dustbin3.display();

  drawSprites();
}

function keyPressed() {
	if (keyCode == UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-135});
	}
}

