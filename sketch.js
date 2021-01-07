const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,engine, world,dustbin,paper;
function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  
  paper = new Paper(100, 300, 15);
  dustbin = new Dustbin(650, 377, 100, 10);
  ground = new Ground(400,380,800,15);
 
}

function draw() {
    background("lightBlue");
    rectMode(CENTER);
  textSize(25);
  fill("black")
  
    text("Put the Crumpled Ball in the trash by pressing the UP ARROW key",50,150);
    ground.display();
    dustbin.display();
    paper.display();
    
}


function keyPressed(){
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 34,
      y: -30
    });
  }
}
