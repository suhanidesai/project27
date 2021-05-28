class Ball
{
constructor(x,y,r)
{
    var ball_features = {
        isStatic : false,
       restitution : 1
      
      }
this.ballimage=loadImage("paper.png")
  
      ball = Bodies.circle(x,y,r,ball_features)
      
World.add(myWorld,ball)
this.r=r
this.ball=ball

}
display() {
  push()
  translate(this.ball.position.x,this.ball.position.y)
  rotate(this.ball.angle)
  imageMode(CENTER)
  image (this.ballimage,0,0,50,50) 
  pop()
}
}