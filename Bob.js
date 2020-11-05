class Bob {
    constructor(x,y,r){

        this.body = Bodies.circle(x,y,r,{density:0.1,restitution:1});
        World.add(world,this.body);
        this.r = r;
    }
    
display(){
ellipse(this.body.position.x,this.body.position.y,this.r*2,this.r*2);

}


}