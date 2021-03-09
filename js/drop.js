class Drop {
    
    constructor(x,y,diameter) {

        var options = {
            "restitution": 0.2,
            "friction": 0.8,
            "density": 1,
        }

        this.body = Bodies.circle(x,y,diameter,options);

        this.radius = diameter/2;

        this.colour = "blue";

        World.add(world, this.body);
    }

    display() {

        var pos = this.body.position;

        fill(this.colour);
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius,this.radius);

        if (pos.y > 800) {
            DropAmount = DropAmount-1
            World.remove(world, this.body);
            this.colour = "black";
        }
    }
}