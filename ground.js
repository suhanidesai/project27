class Ground
{
constructor(x,y,w,h){
    var ground_features = {
        isStatic : true
        }
        ground = Bodies.rectangle(x,y,w,h,ground_features)
        World.add(myWorld,ground)
    this.w=w
    this.h=h
    this.ground=ground
}
display(){
fill ("#311708")
    rectMode(CENTER)
    rect (this.ground.position.x,this.ground.position.y,this.w,this.h)
}
}

