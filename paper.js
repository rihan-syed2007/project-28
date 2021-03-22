class Paper{

constructor(x,y,radius){

var options={

   isStatic:false,
   restitution:0.3,
   friction:0.5,
   density:1.2

}
this.body = Bodies.circle(x, y,radius, options);    
this.radius=radius;
this.image = loadImage("kisspng-white-desktop-wallpaper-leaf-paper-angle-5b171a3c05c605.0636138115282407000237.png");

World.add(world,this.body);

}
 
display(){

   
   ellipseMode(RADIUS);

   fill("yellow");

   
 imageMode(CENTER);
 image(this.image,this.body.position.x,this.body.position.y,33,33);

 }
}