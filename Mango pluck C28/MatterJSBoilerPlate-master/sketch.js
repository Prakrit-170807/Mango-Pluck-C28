const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var rock, mango,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var chain,chain2



function preload() {
    backgroundImg = loadImage("Image/bg.jpg");
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,70);

  
    mango = new Mango(880, 270);
    mango1 = new Mango(790,190);
    mango2 = new Mango(1100,240);
    mango3 = new Mango(920,440);
    mango4 = new Mango(810, 420);
    mango5 = new Mango(1010,180);
    mango6 = new Mango(910,90);
    mango7 = new Mango(1090,420); 
    mango8 = new Mango(770,320);
    mango9 = new Mango(990,350)

    rock = new Rock(290,300);
    
    chain = new Chain(rock.body,{x:290,y:300})

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    ground.display();
    
    mango.display()
    mango1.display()
    mango2.display()
    mango3.display()
    mango4.display()
    mango5.display()
    mango6.display()
    mango7.display()
    mango8.display()
    mango9.display()
    

    chain.display()
    
    rock.display()

    collision(rock,mango)
    collision(rock,mango1)
    collision(rock,mango2)
    collision(rock,mango3)
    collision(rock,mango4)
    collision(rock,mango5)
    collision(rock,mango6)
    collision(rock,mango7)
    collision(rock,mango8)
    collision(rock,mango9)
    

    
}

function mouseDragged(){
    Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    chain.fly()
}

function keyPressed(){
    if(keyCode == UP_ARROW){
        Matter.Body.setPosition(rock.body,{x:290,y:300})
        chain.attach(rock.body)
    }
}
function collision(arock,amango){
    amangoBodyPosition=amango.body.position
    arockBodyPosition=arock.body.position

    var distance=dist(arockBodyPosition.x,arockBodyPosition.y,amangoBodyPosition.x,amangoBodyPosition.y)
    if(distance<=amango.width+arock.width){
        Matter.Body.setStatic(amango.body,false)
    }
}