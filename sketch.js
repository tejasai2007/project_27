
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof ;
//var roof1,roof2,roof3,roof4,roof5;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var chains,chains1,chains2,chains3,chains4;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;


	startBobPositionX = width/2;
	startBobPositionY = height/4+500;
	bobDiameter = 40;


	roof = new Roof(width/2,height/4,width/7,20);
	
	bobObject1 = new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);	
//	roof1 = new Roof(220,50,100);
	chains = new Chain(bobObject1.body,roof.body,-bobDiameter*2,0);

	bobObject2 = new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
//	roof2 = new  Roof(300,50,100)	
	chains1 = new Chain(bobObject2.body,roof.body,-bobDiameter*1,0)

	bobObject3 = new Bob(startBobPositionX,startBobPositionY,bobDiameter);
//	roof3 = new  Roof(380,50,100);
	chains2 = new Chain(bobObject3.body,roof.body,0,0);

	bobObject4 = new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);	
	//roof4 = new  Roof(460,50,100);
	chains3 = new Chain(bobObject4.body,roof.body,bobDiameter*1,0);

	bobObject5 = new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);	
//	roof5 = new  Roof(540,50,100);
	chains4 = new Chain(bobObject5.body,roof.body,bobDiameter*2,0);
	
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER)
  background("pink");
 Engine.update(engine);
 
 if (keyDown("UP_ARROW")){
	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x: -15,y:-45})


 }


  roof.display();
  
  
 // roof1.display();
 // roof2.display();
 // roof3.display();
 // roof4.display();
 // roof5.display();

  chains.display();
  chains1.display();
  chains2.display();
  chains3.display();
  chains4.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  drawSprites();
}



