function Jitter() {

    this.diameter = random(10, 50);

    this.position = createVector(
        random(this.diameter + 10, windowWidth - this.diameter - 10),
        random(this.diameter + 10, windowHeight - this.diameter - 10));
    this.velocity = createVector(random(-10, 10), 0);
    this.acceleration = createVector(0, 0);
    this.mass = this.diameter;
    this.restitution = 0.9;
    this.frictionCoefficient = 0.995;
    this.damper = this.diameter * 0.5;
    this.color = 'rgb(0,0,0)';

    this.update = function() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    };

    this.display = function() {
        fill(this.color);
        ellipse(this.position.x, this.position.y, this.diameter, this.diameter);
    };

    this.applyForces = function(gravity) {
        this.applyGravity(gravity);
        //this.applyFriction();
    }

    this.applyGravity = function(force) {
        var f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);
    };

    this.applyFriction = function() {
        if (this.position.y == height)
            this.velocity.x *= this.frictionCoefficient;
    };

    this.isOnFloor = function() {
        return (this.position.y > (height - this.damper));
    }

    this.checkEdges = function() {
        var colliding = false;
        if (this.position.y > (height - this.damper)) {
            //bottom edge checking
            this.velocity.y *= -1 * this.restitution;
            this.position.y = (height - this.damper);
            colliding = true;
        }
        if (this.position.y < (0 + this.damper)) {
            //top edge checking
            this.velocity.y *= -1 * this.restitution;
            this.position.y = (0 + this.damper);
            colliding = true;
        }
        if (this.position.x > (width - this.damper)) {
            //right edge checking
            this.velocity.x *= -1 * this.restitution;
            //this.position.x = (width + this.damper);
            colliding = true;
        }
        if (this.position.x < 0 + this.damper) {
            //left edge checking
            this.velocity.x *= -1 * this.restitution;
            //this.position.x = (0 - this.damper);
            colliding = true;
        }

        if (colliding) {
            this.velocity.mult(this.frictionCoefficient);
        }
    }
};
