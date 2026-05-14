function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  drawGrid();

  let s = 50; 
  push();
  translate(25, 25); // 여백

  stroke(0);
  triangle(3*s, 3*s, 4*s, 1*s, 6*s, 3*s);

  beginShape();
  vertex(4*s, 5*s);
  vertex(5*s, 3*s);
  vertex(1*s, 4*s);
  vertex(4*s, 3*s);
  vertex(4*s, 2*s);
  vertex(1*s, 2*s);
  endShape(CLOSE);
}
