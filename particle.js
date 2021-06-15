class Balls{
    constructor(x,y){
    var options= {
      'restitution': 0.1,
      'friction': 0.0001  
    }
    
    this.body= Bodies.circle(x,y,10,options)
    this.colour= color(random(0,255),random(0,255), random(0,255));

    World.add(world,this.body)
    }

    display(){
      var p= this.body.position
      var angle= this.body.angle

     translate(p.x,p.y)
     rotate(angle)
     
     push();
     fill(this.colour);
    // ellipseMode()
       ellipse(0,0,20,20);
       
    pop();
    }
}