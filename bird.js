function Bird(){
    this.y = height / 2
    this.x = 60
    this.gravity = 0.6
    this.velocity = 0
    this.lift = -15
    this.show = function(){
        fill(255);
        ellipse(this.x, this.y, 32, 32);
    }
    this.update = function(){
        //velocity increases from gravity
        //the longer the fall, the faster the velocity
        this.velocity += this.gravity

        //update y value so that our object is together with velocity
        this.y += this.velocity

        //for air resistance, to slow down the drop
        this.velocity *= 0.9

        if(this.y > height){
            this.y = height
            this.velocity = 0
        }
        if(this.y < 0) {
            this.y = height
            this.velocity = 0
        }
    }

    this.up = function(){
        this.velocity += this.lift
    }
}