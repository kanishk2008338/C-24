const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box3,box4;
var pig1;
var log1,log2;
var bird;

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,780,50,50);
    box2 = new Box(240,780,50,50);
    box3 = new Box(265,695,50,50);
    box4 = new Box(165,695,50,50);
    ground = new Ground(400,height,800,20)
    pig1 = new Pig(220,780)
log1 = new Log(220,720,150,PI/2)
log2 = new Log(220,670,150,PI/2)
bird = new Bird(20,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box2.display();
    box3.display();
    box4.display();
    log2.display();
    bird.display();
}