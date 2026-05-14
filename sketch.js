let gridSize = 7;
let spacing = 50;
let trianglePts = [];
let circlePts = [];

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('canvas-container');
  
  generateRandomPoints();
  noLoop(); 
}

function generateRandomPoints() {
  trianglePts = [];
  circlePts = [];

  // 삼각형: 0~7 사이의 정수 좌표
  for (let i = 0; i < 3; i++) {
    trianglePts.push({
      x: floor(random(0, gridSize + 1)),
      y: floor(random(0, gridSize + 1))
    });
  }

  // 원: 칸 중앙에 오도록 0.5 더함 (그리드 밖으로 안 나감)
  for (let i = 0; i < 6; i++) {
    circlePts.push({
      x: floor(random(0, gridSize+ 1)),
      y: floor(random(0, gridSize+ 1))
    });
  }
}

// HTML 버튼이 클릭될 때 실행될 함수
function refreshDrawing() {
  generateRandomPoints();
  redraw();
}

function draw() {
  background(255);
  translate(25, 25); // 캔버스 안쪽 여백
  
  drawGrid();

  // 삼각형
  stroke(0);
  beginShape();
  for (let p of trianglePts) vertex(p.x * 50, p.y * 50);
  endShape(CLOSE);

  // 원
  for (let c of circlePts) {
    ellipse(c.x * 50, c.y * 50, 40, 40); // 지름을 40으로 살짝 줄여 여유 공간 확보
  }
}

function drawGrid() {
  stroke(230);
  for (let i = 0; i <= gridSize; i++) {
    line(i * 50, 0, i * 50, 350);
    line(0, i * 50, 350, i * 50);
  }
}
