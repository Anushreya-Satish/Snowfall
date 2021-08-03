class snowflake {
    constructor(x,y){
        var options = {
            friction: 0.001,
            restitution:0.1           
        }
        this.img = loadImage("snowflake1.png");
        this.trajectory = [];
        World.add(world, this.body);
    }
    display(){
        for(var i=0; i<this.trajectory.length; i++){
            image(this.img, this.trajectory[i][0], this.trajectory[i][1]);
          }
    }
}