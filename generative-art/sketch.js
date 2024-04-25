const grid = {
  colomn : 3,
  row : 4,
  boxSize: undefined,
  margin: undefined,
  padding:undefined,
  size: undefined
}
let w = 40;
let Shape = [];
let colors = [];
let width_x;
let height_y;
let leafColor;
let start;
const line_num = 6
const color_pal1 = [
  '#000000',
  '#FFFFFF'
]
const color_pal2 = [
  '#FF349A',
  '#040098'
]
const color_pal3 = [
  '#2C5F2D',
  '#97BC62'
]
function setup() {
  // configure grid.
  grid.boxSize = windowWidth/grid.colomn;
  grid.size = grid.boxSize * 0.78
  grid.margin = grid.boxSize / 1.6;
  grid.padding = grid.boxSize * 0.2;
  //congigure the start position
  start = grid.padding + grid.boxSize/4
  // configure canvas
  width_x = grid.colomn * grid.boxSize + grid.margin;
  height_y = grid.row * grid.boxSize + grid.margin;
  createCanvas(width_x/2, height_y/2,SVG);
  background(190);
  frameRate(10);
  noLoop();
  angleMode(DEGREES);
  rectMode(CENTER);
  console_log(size);
  //configure color palette
  const randi = random(1);
  if (randi <= 0.3333) {
    colors = color_pal1;
  } else if (randi <= 0.6666) { 
    colors = color_pal2;
  } else {
    colors = color_pal3;
  }
  leafColor = (colors === color_pal1 || colors === color_pal3) ? color(10, 80) : color(120, 80);
  //clear the canvas to remove the background
  clear()
}

function draw() {
  background(190)
  scale(0.13)
  create_shape();
}

function create_shape(){
  for(let i = 0;i < grid.colomn;i++){
    for(j = 0;j < grid.row;j++){
      let x = start + (grid.boxSize * i)
      let y = start + (grid.boxSize * j)
      Shape.push(new shape(x,y))
    } 
  }
  Shape.forEach(shape=>{
    shape.render();
  })
}

function console_log(size){
  console.log(size)
  console.log("hey")
  console.log(windowWidth, windowHeight);
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    save('myArtwork.svg');
  }
  if(key === 'r' || key === 'R'){
    window.location.reload();
  }
}
