class Dustbin {

    constructor(x,y,width,height){
  
  var options={
      isStatic:false,
      restitution:0,
      friction:1,
      density:15
  
  }
  this.body = Bodies.rectangle(x, y, width, height, options);
  this.width = width;
  this.height = height;
  this.image = loadImage("5a3861a486d651.2925654915136444525523.png");
  
  World.add(world,this.body);
    }
  
  display(){
   rectMode(CENTER);
  
   fill(255);
  
   rect(this.body.position.x,this.body.position.y,this.width,this.height);
   imageMode(CENTER);
   image(this.image,610,625,200,150);
  
   }
  }