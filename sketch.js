// rectangle 
var fixedRect, movingRect;
var gameObjectone ,gameObjecttwo ;

function setup() {
  //canvas(i.e) the background
  createCanvas(1200,800);
  //rect1
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  //moving rectangle with mouse x,y
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  
  //secondrectangle
  gameObjectone = createSprite(200,200,80,40);
  gameObjectone.shapeColor = "green";
  gameObjectone.debug = true;
  
  //third rectangle
  gameObjecttwo = createSprite(100,100,80,40);
  gameObjecttwo.shapeColor = "green";
  gameObjecttwo.debug = true;

}

function draw() {
  //background colour(black)
  background(0,0,0);  

  //moving rectangle .y&.x = mouse.y&.x
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  //istouching library
  if(isTouching(movingRect,gameObjectone)) {
    gameObjectone.shapeColor = "red";
    movingRect.shapeColor = "red";
    
  }

  else  {

    movingRect.shapeColor = "green";
    gameObjectone.shapeColor = "green";
    
    
  }

 //istouching library
  if(isTouching(movingRect,gameObjecttwo)) {
    gameObjecttwo.shapeColor = "red";
    movingRect.shapeColor = "red";
    
    
  }

  else  {
    movingRect.shapeColor = "green";
    gameObjecttwo.shapeColor = "green";
    

  }
  
 /* if(isTouching(movingRect,fixedRect)) {
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }

  else  {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  */

  drawSprites();

}

