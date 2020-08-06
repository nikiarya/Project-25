class Paper {
   constructor() {
    var options =  {
        isStatic : false,
        restitution: 0.3, 
        friction: 0.5,
        density: 1.2
    }
    this.body = Bodies.circle(100,650,25,options);
    this.image = loadImage("sprites/paper.png")
    World.add(world, this.body);
   }
   display(){
    var pos = this.body.position;
    fill("white");
    ellipseMode(RADIUS);
    ellipse(pos.x, pos.y,25,25);
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();
  }
}