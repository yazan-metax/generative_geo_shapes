class layer{
	constructor(){
		this.sides = line_num;
		this.crystal_size = grid.size;
		this.shapeNum =  random_select() ? this.sides: this.sides * 2;
		this.W = w;
		this.strokeColor = color(random_color());
		this.angle = 360/this.shapeNum;
		this.thinstroke = 1;
		this.thickstroke = 3;
		this.weight = random_select() ? this.thinstroke : this.thickstroke;
		this.allSteps = 8;
		this.linesCount = random_select ? this.allSteps: int(this.allSteps * 1.25);
		this.step = (this.crystal_size/2)/ this.linesCount;
		this.radius = this.crystal_size/2;
	}
}

class circles extends layer{
	constructor(){
		super();
		this.circleSize = random_select() ? (this.crystal_size/2) * 0.93:(this.crystal_size/2) * 0.7;
		this.posisiton = (this.crystal_size/2 - this.circleSize/2);
	}
	render(){
		push();
		noFill();
		stroke(this.strokeColor);
		strokeWeight(1);
		for(let i = 0;i < this.shapeNum;i++){
			rotate(this.angle);
			ellipse(this.posisiton,0,this.circleSize,this.circleSize);
		}
		pop();
	}
}
class draw_full_line extends layer{
	constructor(){
		super();
	}
	render(){
		push();
    noFill();
    stroke(this.strokeColor);
    for(let i = 0;i < this.shapeNum;i++){
      rotate(this.angle);
      line(0,0,0,this.radius);
    }
  pop();
	}
}

class outLineShape extends layer{
	constructor(){
		super();
	}
	render(){
		push()
  noFill()
  strokeWeight(3);
  if(picker() < 0.3){
    stroke(this.strokeColor);
    ellipse(0,0,this.crystal_size,this.crystal_size);
  }else{
    stroke(this.strokeColor);
		hexagon(0,0,this.radius);
  }
  pop()
	}
}

class  determine_lines extends layer{
	constructor(){
		super();
		this.start = floor(random(0,this.linesCount));
		this.stop = floor(random(this.start,this.linesCount + 1));
	}
	render(){
		strokeWeight(this.weight);
		push()
			noFill()
			stroke(this.strokeColor);
			for(let i = 0;i < this.shapeNum;i++){
				rotate(this.angle);
				line(this.start * this.step,0,this.stop * this.step ,0);
			}
		pop();
	}
	}
	class  determine_lines2 extends layer{
		constructor(){
			super();
			this.start = floor(random(0,3));
			this.stop = floor(random(this.start,3));
		}

		render(){
			strokeWeight(this.weight);
			push()
				noFill()
				stroke(this.strokeColor);
				for(let i = 0;i < this.shapeNum;i++){
					if(this.start === this.stop ){
					rotate(this.angle);
					line(this.start * this.step,0,0,this.stop * this.step);
					}
				}
			pop();
		}
		}
	class DottedLines extends layer{
		constructor(){
			super();
			this.offset = this.step;
			this.dottedSize = random_select()? 5 : 4;
		}
		render(){
			push();
			fill(this.strokeColor);
			noStroke();
			for(let i = 0;i < this.shapeNum;i++){
				for(let x= this.offset;x < this.radius;x += this.step){	
					ellipse(x,0,this.dottedSize,this.dottedSize)
				}
				rotate(this.angle);
			}
			pop();
		}
	} 

	class centershape extends layer{
		constructor(){
			super();
			this.centerCircleSize = random_select()? this.step:this.step * 4;
		}
		render(){
			push();
			noStroke();
			fill(this.strokeColor);
			if(picker() <=0.2){
			ellipse(0,0,this.centerCircleSize,this.centerCircleSize);
			}else if(picker() > 0.8){
				rect(0,0,this.centerCircleSize,this.centerCircleSize);
			}else if(picker() > 0.6 && picker() <= 0.8){
				tringle(0,0,floor(random(this.step,100)));
			}else if(picker() > 0.2 && picker() <= 0.6){
				hexagon1(0,0,this.centerCircleSize);
			}
			pop();
		}
	}

	class multiShape extends layer{
		constructor(){
			super();
			this.direction = random_select();
		}
		render(){
			push();
			noFill();
			strokeWeight(this.weight);
			stroke(this.strokeColor);
			if(picker() <= 0.3){
			for(let i = this.step; i < this.radius;i += this.step){
					ellipse(0,0,i,i);
			}
			}else if(picker() >= 0.3 && picker() < 0.6){
				for(let i = this.step; i < this.radius;i += this.step){
					hexagon1(0,0,i);
			}
			}else if(picker() >=0.6 && picker() < 0.8){
				for(let i = this.step; i < this.radius;i += this.step){
					tringle(0,0,i);
			}}else{
				for(let i = this.step; i < this.radius;i += this.step){
					rect(0,0,i,i);
			}
			}
		pop();
	}
}

class edgeShapes extends layer{
	constructor(){
		super();
		this.rad = floor(random(30,60));
		this.direction = random_select();
		this.spaceFromCenter = this.radius - floor(random(this.rad/3,100));
	}
	render(){
		push()
		if(random_select()){
			noFill();
			strokeWeight(this.weight);
			stroke(this.strokeColor);
		}else{
			noStroke()
			fill(this.strokeColor);
		}
			if(picker() > 0.5){
				for(let i = 0; i < this.shapeNum;i++){
				ellipse(this.spaceFromCenter,0,this.rad,this.rad);
				rotate(this.angle);
				}
			}else{
				for(let i = 0; i < this.shapeNum;i++){
				tringle1(this.spaceFromCenter,this.rad,this.direction);
				rotate(this.angle);
				}
			}

		pop();
	}
}

class leaf extends layer{
	constructor(){
		super();
	}
	render(){
		leafShape(this.shapeNum);
	}
}
