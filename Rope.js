class Rope{
  constructor(b1,p1){
     var RopeProp = {
     bodyA:b1,
     pointB:p1,
     stiffness:1,
     length:200
     }


this.constraint = Constraint.create(RopeProp)

World.add(world,this.constraint)

    }

    display(){

        line(this.constraint.bodyA.position.x,this.constraint.bodyA.position.y,this.constraint.pointB.x,this.constraint.pointB.y);
    }
}