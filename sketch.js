let gridSize = 7;     // 그리드 칸 수 (0~7)
let spacing = 50;      // 한 칸의 크기 (픽셀)
let trianglePts = [];  // 삼각형 좌표 저장
let circlePts = [];    // 원 좌표 저장

function setup() {
  createCanvas(450, 450);
  noLoop(); // 한 번만 그리고 멈춤 (새로고침하면 다시 랜덤 생성)

  // 1. 삼각형을 위한 랜덤 좌표 3개 생성
  for (let i = 0; i < 3; i++) {
    trianglePts.push({
      x: floor(random(0, gridSize + 1)), 
      y: floor(random(0, gridSize + 1))
    });
  }

  // 2. 원 6개를 위한 랜덤 좌표 생성
  for (let i = 0; i < 6; i++) {
    circlePts.push({
      x: floor(random(0, gridSize + 1)),
      y: floor(random(0, gridSize + 1))
    });
  }
}

function draw() {
  background(255);
  translate(50, 50); // 숫자가 보일 수 있게 여백 확보
  
  drawGrid(); // 모눈종이 배경 그리기

  // --- 1. 랜덤 삼각형 그리기 ---
  stroke(0);
  strokeWeight(2);
  fill(150, 200, 255, 180); // 반투명 파랑
  beginShape();
  for (let p of trianglePts) {
    vertex(p.x * spacing, p.y * spacing);
  }
  endShape(CLOSE);

  // --- 2. 랜덤 원 6개 그리기 ---
  fill(255, 150, 150, 180); // 반투명 빨강
  for (let c of circlePts) {
    // 지름은 1칸 크기(spacing)로 설정
    ellipse(c.x * spacing, c.y * spacing, spacing, spacing);
  }
}

// 모눈종이를 그리는 함수
function drawGrid() {
  stroke(200);
  strokeWeight(1);
  for (let i = 0; i <= gridSize; i++) {
    line(i * spacing, 0, i * spacing, gridSize * spacing);
    line(0, i * spacing, gridSize * spacing, i * spacing);
    
    // 좌표 숫자 표시
    fill(100);
    noStroke();
    textSize(12);
    textAlign(CENTER, CENTER);
    text(i, i * spacing, -20); // X축 숫자
    text(i, -20, i * spacing); // Y축 숫자
  }
}
