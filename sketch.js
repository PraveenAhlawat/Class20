var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(300, 100, 80, 30);
  fixedRect = createSprite(300, 300, 50, 80);

  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "green";

  movingRect.velocityY= 5;
  fixedRect.velocityY= -5;

  movingRect.debug = true;
  fixedRect.debug = true;
}

function draw() {
  background(0);  


  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2
    && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    ){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }


  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2)
  {
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
   }

   if(fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2 
    && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2)
  {
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
   }

  
  drawSprites();
}