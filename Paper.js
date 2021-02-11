class Paper{
	constructor(x,y)	{
		
		var options = {
			isStatic: false
		}

		this.x=x;
		this.y=y;
		this.radius=30;
		
	
     				

		this.body=Bodies.circle(x, y, 30, options);
        this.image = loadImage("paper.png");
 		World.add(world, this.body);

	}

	display(){		
			var paperPos=this.body.position;		
	
			
			imageMode(CENTER);
			image(this.image,paperPos.x,paperPos.y,30);
			

			
	}

}