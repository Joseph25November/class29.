class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.chain1 = loadImage("sprites/sling1.png");
        this.chain2 = loadImage("sprites/sling2.png");
        this.chain3 = loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.chain1,200,20)
        image(this.chain2,170,20)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(10);
            stroke(48,22,8)
            //line(pointA.x, pointA.y, pointB.x, pointB.y);

         line(pointA.x,pointA.y,pointB.x - 20,pointB.y)
         line(pointA.x,pointA.y,pointB.x + 20,pointB.y)

        }
    }
    
}