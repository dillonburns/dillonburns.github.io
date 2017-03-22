function Jitter() {

   this.diameter = random(10, 30);

   this.position = createVector(random(windowWidth), random(windowHeight));
   this.velocity = createVector(random(-10, 10), 0);
   this.acceleration = createVector(0, 0);
   this.mass = this.diameter / 5;
   this.restitution = 0.9;

   this.update = function() {
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
      this.acceleration.mult(0);
   };

   this.display = function() {
      ellipse(this.position.x, this.position.y, this.diameter, this.diameter);
   }

   this.applyForce = function(force) {
      var f = p5.Vector.div(force, this.mass);
      this.acceleration.add(f);
   };

   this.checkEdges = function() {
      var damper = this.diameter * .75;
      if (this.position.y > (height - damper)) {
         //bottom edge checking
         this.velocity.y *= -1 *  this.restitution;
         this.position.y = (height - damper);

      }
      if (this.position.x > (width - damper)) {
         //right edge checking
         this.velocity.x *= -1 *  this.restitution;
         this.position.x = (width - damper);
      }
      if (this.position.x < 0) {
         //left edge checking
         this.velocity.x *= -1 * this.restitution;
         this.position.x = (0 + damper);
      }
      if (this.position.y < (0 + damper)) {
         //top edge checking
         this.velocity.y = -1 * this.restitution;
         this.position.y = (0 + damper);
      }
   }
};