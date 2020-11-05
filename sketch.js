
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(200,200,20);
	bob2 = new Bob(240,200,20);
	bob3 = new Bob(280,200,20);
	bob4 = new Bob(320,200,20);
	bob5 = new Bob(360,200,20);
	rope1 = new Rope(bob1.body,{x:200,y:10} )
	rope2 = new Rope(bob2.body,{x:240,y:10} )
    rope3 = new Rope(bob3.body,{x:280,y:10} )
    rope4 = new Rope(bob4.body,{x:320,y:10} )
    rope5 = new Rope(bob5.body,{x:360,y:10} )

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lime");

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
  rect(275,20,300,50);

}


function keyPressed(){
	if(keyCode == UP_ARROW){
		console.log("POOPOO PEEPEE")
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-1,y:-1});
	}
}


