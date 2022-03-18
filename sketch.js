var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloudImage
var obstacleimg1,obstacleimg2,obstacleimg3,obstacleimg4,obstacleimg5,obstacleimg6





function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
obstacleimg1=loadImage("obstacle1.png")
obstacleimg2=loadImage("obstacle2.png")
obstacleimg3=loadImage("obstacle3.png")
obstacleimg4=loadImage("obstacle4.png")
obstacleimg5=loadImage("obstacle5.png")
obstacleimg6=loadImage("obstacle6.png")

 cloudImage=loadImage("cloud.png")
  
}

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
 
}

function draw() {
  //set background color
  background(180);
  
  
  
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 150) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);
spawncloud()
  spawnobstacles()
  drawSprites();
  
}

function spawncloud(){
if(frameCount%60===0){
var cloud=createSprite(600,Math.round(random(10,60)),20,10)
cloud.velocityX=-3

cloud.addImage(cloudImage)
cloud.scale=0.7

cloud.lifetime=200



cloud.depth=trex.depth
trex.depth=trex.depth+1

}
}


function spawnobstacles(){
  if(frameCount%60===0){
    var obstacles=createSprite(600,165,10,40)
    obstacles.velocityX=-6
    var rand =Math.round(random(1,6))

switch(rand){
  case 1:obstacles.addImage(obstacleimg1)
  break
  case 2:obstacles.addImage(obstacleimg2)
  break
  case 3:obstacles.addImage(obstacleimg3)
  break
  case 4:obstacles.addImage(obstacleimg4)
  break
  case 5:obstacles.addImage(obstacleimg5)
  break
  case 6:obstacles.addImage(obstacleimg6)
  break
default:break
}
obstacles.scale=0.5
obstacles.lifetime=200

  }
  
}