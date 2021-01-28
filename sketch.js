
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, groundObject, crumbledpaper;
var world;




function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	groundObject = new ground(width / 2, 670, width, 20);
	dustbinObj = new dustbin(1200, 650);
	crumbledpaper = new CrumbledPaper(200, 300, 100);
	

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(230);



	groundObject.display();
	dustbinObj.display();
	crumbledpaper.display();

	
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		//Body.setVelocity(crumbledpaper.body, { x:3, y: -1 });
		Matter.Body.applyForce( crumbledpaper.body, crumbledpaper.body.position, {x: 200, y: -500});
	}
}

