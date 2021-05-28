class Connection
{
constructor(x,y){
var connect_features = {
 bodyA:x,
 pointB:y,
 stiffness:0.04,
 length:15
}
this.connection = Constraint.create(connect_features,)
World.add(myWorld,this.connection)
}
display(){
if(this.connection.bodyA!=null){
var a = this.connection.bodyA.position
var b = this.connection.pointB
strokeWeight(4)
stroke ("#311708")
line (a.x,a.y,b.x,b.y)
}
}
break(){
this.connection.bodyA = null
}
}