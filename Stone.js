class Stone{
    constructor(x,y,width,height){
        var options = {
            restitution : 0.8
        }
        this.x=x;
        this.y=y;
        this.height=height;
        this.width=width;
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);

    }
    display(){
        ellipseMode(CENTER);
        push ();
        translate (this.body.position.x,this.body.position.y);
        fill ("grey");
        ellipse(0,0,this.width,this.height);
        pop ();
    }
}