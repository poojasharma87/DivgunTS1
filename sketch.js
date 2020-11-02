const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var sling1;
var polygon_img;
 function preload(){

   polygon_img=loadImage("polygon.png");
 }
function setup() {
  createCanvas(900,400);

 engine=Engine.create();
 world=engine.world;

 ground1 = new Ground();
 stand1 = new stand(390,300,250,10);
 stand2 = new stand(700,200,200,10);

 block1 = new block(300,275,30,40);
 block2 = new block(330,275,30,40);
 block3 = new block(360,275,30,40);
 block7 = new block(390,275,30,40);
 block4 = new block(420,275,30,40);
 block5 = new block(450,275,30,40);
 block6 = new block(480,275,30,40);


 block8 = new block(330,235,30,40);
 block9 = new block(360,235,30,40);
 block10 = new block(390,235,30,40);
 block11= new block(420,235,30,40);
 block12= new block(450,235,30,40);


 block13=new block(360,195,30,40);
 block14=new block(390,195,30,40);
 block15=new block(420,195,30,40);
 block16 = new block(390,195,30,40);


 blocks1 = new block(640,175,30,40);
 blocks2 = new block(670,175,30,40);
 blocks3 = new block(700,175,30,40);
 blocks5 = new block(730,175,30,40);
 blocks4 = new block(760,175,30,40);
 
 blocks6 = new block(670,135,30,40);


 blocks7 = new block(700,135,30,40);
 blocks8 = new block(730,135,30,40);
 blocks9=new block(700,95,50,40)

 ball=Bodies.circle(50,200,20);
 World.add(world,ball);
 sling1=new slingshot(this.ball,{x:100,y:200});
 
 Engine.run(engine);

}

function draw() {
  background(56,44,44); 
  textSize(20);
fill("lightblue");
text("Drag the Hexagonal Stone And release it, to launch it towards the block");
 
ground1.display();
stand1.display();
stand2.display();
strokeWeight(2);
stroke(15);
fill("skyblue");
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
fill("pink");
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
fill("turquoise");
block13.display();
block14.display();
block15.display();
block16.display();
fill("grey");
blocks1.display();
blocks2.display();
blocks3.display();
blocks4.display();
blocks5.display();
fill("turquoise");
blocks6.display();
blocks7.display();
blocks8.display();
fill("pink")
blocks9.display();
fill("gold");

imageMode(CENTER);
image(polygon_img,ball.position.x,ball.position.y,40,40);
sling1.display();


  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  sling1.fly();
}
