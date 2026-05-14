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
  fill(200, 100, 100, 150);
  triangle(3*s, 3*s, 4*s, 1*s, 5*s, 3*s);

  // --- 2. Draw a 6 sided shape (우측 상단 활동) ---
  fill(100, 200, 100, 150);
  beginShape();
  vertex(1*s, 3*s); // Point 1
  vertex(4*s, 5*s); // Point 2
  vertex(5*s, 5*s); // Point 3
  vertex(6*s, 3*s); // Point 4
  vertex(5*s, 3*s); // Point 5
  vertex(4*s, 2*s); // Point 6
  endShape(CLOSE);

  // --- 3. Draw circles (좌측 하단 2번 활동 예시) ---
  fill(100, 100, 200, 150);
  ellipse(4*s, 5*s, 1*s); // Circle 1 (X=4, Y=5, diameter=1)
  ellipse(5*s, 3*s, 1*s); // Circle 2
  
  pop();
}

function drawGrid() {
  stroke(220);
  for (let i = 0; i <= 8; i++) {
    line(i * 50, 0, i * 50, 400);
    line(0, i * 50, 400, i * 50);
  }
}
