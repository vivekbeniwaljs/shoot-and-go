class Ball{
    constructor(x,y){
        var options = {
            'density':1,
            'restitution':0.8
            
        
        }
       
          this.body = Bodies.circle(x,y,20,options)
          this.r = 20
          World.add(world, this.body )
              


    }
     display(){

        var pos = this.body.position
        var angle = this.body.angle
push()
        
        
    translate(pos.x,pos.y)
    rotate(angle)
    ellipseMode(RADIUS)
    ellipse(0,0,this.r, this.r)  
   

pop()
    }


}
