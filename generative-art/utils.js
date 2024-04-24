
function random_select(){
  const rand_1 = random(0,1);
  if(rand_1 > 0.5){
    return true;
  }
  else{
    return false;
  }
}

function random_color(){
  let rand_2 = floor(random(0,colors.length));
  return colors[rand_2];
}

function hexagon(pos_x,pos_y,rad){
	let angle = 360/6;
	beginShape();
	for(let i = 0; i < 6 ; i++){
		let pointOnCircle = getPoints(pos_x,pos_y,rad,angle * i);
		vertex(pointOnCircle.y,pointOnCircle.x);
	}
	endShape(CLOSE);
}
function hexagon1(pos_x,pos_y,rad){
	let angle = 360/6;
	beginShape();
	for(let i = 0; i < 6 ; i++){
		let pointOnCircle = getPoints(pos_x,pos_y,rad,angle * i);
		vertex(pointOnCircle.x,pointOnCircle.y);
	}
	endShape(CLOSE);
}
function tringle(pos_x,pos_y,rad){
	
		var angle = 360/3
	beginShape();
	for(let i = 0; i < 3 ; i++){
		let pointOnCircle = getPoints(pos_x,pos_y,rad,angle * i);
		vertex(pointOnCircle.y,pointOnCircle.x);
	}
	endShape(CLOSE);

}
function tringle1(pos_x,rad,direction){
	if(direction){
		beginShape();
    vertex(pos_x + rad * cos(0), rad * sin(0));
    vertex(pos_x + rad * cos(120), rad * sin(120));
    vertex(pos_x + rad * cos(240), rad * sin(240));
    endShape(CLOSE); 
	}else{
		beginShape();
    vertex(pos_x + rad * cos(180), rad * sin(180));
    vertex(pos_x + rad * cos(300), rad * sin(300));
    vertex(pos_x + rad * cos(60), rad * sin(60));
    endShape(CLOSE); 
	}
}
function getPoints(pos_x,pos_y,rad,angle){
	let x = pos_x + rad * cos(angle);
	let y = pos_y + rad * sin(angle);
	return createVector(x,y);
}

function picker(){
	let randi;
	randi = random(1);
	return randi;
}

function leafShape(leafNum){
	let dist;
	if(picker() >=0.5){
		dist = 100;
	}else{
		dist = 150;
	}
	let angle = 360/leafNum
  rotate(90); 
	push()
  for (let i = 0; i < leafNum; i++) {
    push();
    rotate( i * angle);
    translate(0, dist);
    drawLeaf();
    pop();
  }
	pop()
}

function drawLeaf() {
  let leafLength =100
  let leafWidth = 50

  fill(leafColor);
  noStroke(); 
  push()
  beginShape();
  vertex(0, 0);
  bezierVertex(leafWidth / 4, -leafLength / 4, 
               3 * leafWidth / 4, -leafLength / 2, 
               0, -leafLength);
  bezierVertex(-3 * leafWidth / 4, -leafLength / 2, 
               -leafWidth / 4, -leafLength / 4, 
               0, 0);
  endShape(CLOSE);
  pop()
}