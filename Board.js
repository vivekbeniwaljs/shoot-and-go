class Board {
    constructor(x,y,w,h){
        var options = {
            'density':1,
        'isStatic':true
      }
      this.body =  Matter.Bodies.rectangle(x,y,w,h, options)
      this.w = w
      this.h = h
      World.add(world,this.body)  

      
  
    }
  display(){
  
    rectMode(CENTER)

    rect(this.body.position.x, this.body.position.y, this.w,this.h)
    
stroke("white")
noFill()
strokeWeight(2)
ellipseMode(RADIUS)
ellipse(this.body.position.x - 50, this.body.position.y, 50, 10)

    
  }




} 
       