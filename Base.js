class Base{
    constructor(x,y,width,height){
        var options ={
            isStatic:true
        }
        this.x=x;
        this.y=y;
        this.height=height;
        this.width=width;
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);

    }
    display(){
        rectMode(CENTER);
        push ();
        translate (this.body.position.x,this.body.position.y);
        fill ("brown");
        rect(0,0,this.width,this.height);
        pop ();
    }
}