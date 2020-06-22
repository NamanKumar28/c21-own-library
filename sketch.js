var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1 = createSprite(600,100,80,50);
  rect2 = createSprite(600,700,80,50);

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  rect1.velocityY = +5;
  rect2.velocityY = -5;
}

function draw() {
  background(0,0,0);  

  bounceOff(fixedRect,movingRect);
  bounceOff(rect1,rect2);
  
  drawSprites();
}
