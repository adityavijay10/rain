function preload(){
  dropImg=loadImage("rain3.png");
}

function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
}

function draw() {
  background("white");
  spawnDrop();  
  //drop.setAnimation();
  drawSprites();
}

function spawnDrop() {
if (World.frameCount % 30 === 0) {
  var drop = createSprite(36,0,9,4);
  drop.velocityY = 12;
  //drop.shapeColor="green";
  drop.addImage(dropImg);
  drop.scale=0.2;

  var drop2=createSprite(136,0,11,6)
  drop2.velocityY = 20;
  drop2.shapeColor="green";
  drop2.addImage(dropImg);
  drop2.scale=0.2;

  var drop3=createSprite(236,0,10,5)
  drop3.velocityY = 18;
  drop3.shapeColor="green";
  drop3.addImage(dropImg);
  drop3.scale=0.2;

  var drop4=createSprite(336,0,10,5)
  drop4.velocityY = 28;
  drop4.shapeColor="green";
  drop4.addImage(dropImg);
  drop4.scale=0.2;

  var drop5=createSprite(436,0,12,7)
  drop5.velocityY = 26;
  drop5.shapeColor="green";
  drop5.addImage(dropImg);
  drop5.scale=0.2;

  var drop6=createSprite(536,0,8,5)
  drop6.velocityY = 30;
  drop6.shapeColor="green";
  drop6.addImage(dropImg);
  drop6.scale=0.2;

  var drop7=createSprite(636,0,10,5)
  drop7.velocityY = 40;
  drop7.shapeColor="green";
  drop7.addImage(dropImg);
  drop7.scale=0.2;

  var drop8=createSprite(736,0,10,5)
  drop8.velocityY = 15;
  drop8.shapeColor="green";
  drop8.addImage(dropImg);
  drop8.scale=0.2;

  var drop9=createSprite(800,0,10,5)
  drop9.velocityY = 20;
  drop9.shapeColor="green";
  drop9.addImage(dropImg);
  drop9.scale=0.2;

  var drop10=createSprite(236,0,10,5)
  drop10.velocityY = 30;
  drop10.shapeColor="green";
  drop10.addImage(dropImg);
  drop10.scale=0.2;

  var drop11=createSprite(89,0,4,2)
  drop11.velocityY = 30;
  drop11.shapeColor="green";
  drop11.addImage(dropImg);
  drop11.scale=0.2;
}
}