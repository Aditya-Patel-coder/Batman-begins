const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var drops=[]
var maxDrops=100;
var umbrella;

function preload(){
}

function setup(){
    engine= Engine.create()
    world= engine.world;
createCanvas(400,600)

umbrella=new Umbrella(200,500)
if(frameCount%120 === 0){
    for(i=0;i<maxDrops; i++){
        drops.push(new Drop(random(0,400),random(0,400)))
    }
}

}
 function draw(){
     Engine.update(engine)
 background(0)
 for(var i =0; i<maxDrops; i++){
 drops[i].display();
 drops[i].updateY();}
 umbrella.display();
 drawSprites();

 
 }
