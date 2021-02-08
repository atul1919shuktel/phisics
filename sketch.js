const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world,engine;
var ground,ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var option = {
    isStatic:true
  }
  ground = Bodies.rectangle(200,400,400,20,option)
  ball = Bodies.circle(200,200,50,{restitution:1.0})
  ball.shapeColo
  console.log(box);
  World.add(world,ground);
  World.add(world,ball);
}

function draw() {
  
  background(0);
  Engine.update(engine);
  
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,50,50);
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y, 400,20);
}