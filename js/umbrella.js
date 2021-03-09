class Umbrella {

    constructor(x,y,diameter) {

        var options = {
            isStatic: true,
        }

        this.body = Bodies.circle(x,y,diameter/4,options);

        this.radius = diameter/2;

        World.add(world, this.body);
    }

    display() {

        var pos = this.body.position;

        noFill();
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius,this.radius);

    }
}