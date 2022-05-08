let xSpeed;
let ySpeed;
let x;
let y;
let logo;
let r, g, b;
let pat;
let balls = [];
let ballX;
let ballY;
let vertex;
let A;
let B;
let xPos;
let yPos;
let lenPatra;
let heightPatra;


function preload() {
  logo = loadImage("logo.png");

}

function setup() {
  createCanvas(1500, 740);
  x = random(width);
  y = random(length);
  //code for smooth looking velocity


  xSpeed = 7;
  ySpeed = 7;
  r = random(256);
  g = random(256);
  b = random(256);
  pat = new patra();
}

function draw() {
  background(220,200,100);
  //use moving image
  //image(logo,x, y,200,150);
  //pat.render();
  //pat.move();
 
  beginShape();
  rect(x, y, 40, 40);
  fill(r, g, b);
  endShape();

  if(mouseX <= x && mouseX + 100 >= x) {
    if(y === height - 65){
      y= 0;
      // ySpeed = -1 * ySpeed;
      // console.log("yeah");
      // appearBalls();
    }

  }
  else if (x + 80 >= width) {

    changeColorfill();

    x = width - 80;
    xSpeed = -xSpeed;
    appearBalls();
  } else if (x <= 0) {
    changeColorfill();
    x = 0;
    xSpeed = -xSpeed;
    appearBalls();
  }
  else if (y + 40 >= height) {
    changeColorfill();
    y = height - 40;
    ySpeed = -ySpeed;
    appearBalls();
  } else if (y <= 0) {
    changeColorfill();
    y = 0;
    ySpeed = -ySpeed;
    appearBalls();
  }

  //retain balls on screen
  for (let i = 0; i < balls.length / 2; i++) {
    ellipse(balls[i], balls[i + 1], 30, 30);
  }
  
  //movable patra here
  stroke(14,14,14);
  fill(255);
  rect(mouseX,height-25,100,25);

  

  x += xSpeed;
  y += ySpeed;
   
  
  

}

function changeColorfill() {
  r = random(256);
  g = random(256);
  b = random(256);
  fill(r, g, b);
}

function appearBalls() {

  ballX = random(width);
  ballY = random(height)
  //ellipse(ballX, ballY, 30, 30);
  balls.push(ballX, ballY);
}