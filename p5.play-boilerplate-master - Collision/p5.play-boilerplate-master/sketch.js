var movingRect;
var fixedRect;

function setup() {
  createCanvas(1000,1000);
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.velocityY = -3;
  fixedRect = createSprite(400,100,50,75);
  fixedRect.velocityY = 3;
}

function draw() {
  background(255,255,255);  

  bounceOff(movingRect, fixedRect);

  drawSprites();
}