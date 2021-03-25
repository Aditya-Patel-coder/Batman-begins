class Drop{
    constructor(x,y){
        var options={
            restitution:0.001,
            friction:0.001,
        }
  this.rain=Bodies.circle(x,y,4);
  this.radius=4;
  World.add(world,this.rain)
    }

updateY(){
    if(this.rain.position.y >height){

        Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
    }
}
 display(){
     var pos= this.rain.position
     fill("blue")
     ellipseMode(CENTER)
     ellipse(pos.x,pos.y,this.radius)
    

 }

}
