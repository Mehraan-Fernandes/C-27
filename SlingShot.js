class SlingShot{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            length:10,
            stiffness:0.4
        }
        this.Sling=Matter.Constraint.create(options);
        World.add(world,this.Sling)
    }
    display(){
        var pointA = this.Sling.bodyA.position
        var pointB = this.Sling.bodyB.position
        push();
        strokeWeight(5)
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    }
}