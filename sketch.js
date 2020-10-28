var tower , towerimage;                                
var door,doorimage,doorGroup;
var climber,climberImage,climberGroup;
var ghost,ghostimage;
var invisibleblock,invisibleblockGroup;
var play=1;
var end=0;
var gamestate=play;
var spooky;
function preload (){
  towerimage=loadImage("tower.png");
  doorimage=loadImage("door.png");
  climberimage=loadImage("climber.png");
  ghostimage=loadImage("ghost-standing.png");
  spooky=loadSound("spooky.wav");
}


function setup(){
  createCanvas(600, 600);
  tower=createSprite(300,300);
  tower.addImage("tower",towerimage);
  tower.velocityY=4;
  
  
  doorGroup=new Group();
  climberGroup=new Group();
  invisibleblockGroup=new Group();
  
  
  ghost=createSprite(200,200,50,50);
  ghost.addImage("ghost",ghostimage);
  ghost.scale=0.3;
}


function draw(){
   background(0);
  //spooky.loop();
  if(gamestate===play){
  if (tower.y>400){
    tower.y=300;
  }
  if (keyDown("left_arrow")){
    ghost.x=ghost.x-3;
  }
  if (keyDown("right_arrow")){
    ghost.x=ghost.x+3;
  }
  if (keyDown("space")){
    ghost.velocity.y=-3;
  }
  ghost.velocityY=ghost.velocityY+0.8;                                      if (climberGroup.isTouching(ghost)){
    ghost.velocityY=0;
    
  }  
  if(invisibleblockGroup.isTouching(ghost)||ghost.y>600){
    ghost.destroy();
    gamestate=end;
  }
  
  obstacle();
    
  drawSprites();
  }
  if (gamestate===end){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("GAME OVER",230,250);
    
    
  }
}

function obstacle(){
  if (frameCount%240===0){
   var door=createSprite(200,-50);
    door.x=Math.round(random(120,400));
    door.addImage(doorimage);
    door.velocityY=3;
    door.lifetime=800;
    doorGroup.add(door);
    
    climber=createSprite(200,10);
    climber.addImage(climberimage);
    climber.velocityY=3;
    climber.lifetime=800;
    climberGroup.add(climber);
    climber.x=door.x;
    
    ghost.depth=door.depth ;
    ghost.depth=ghost.depth+1;
    
    invisibleblock=createSprite(200,15);
    invisibleblock.width=climber.width;
    invisibleblock.height=2;
    invisibleblock.velocityY=3;
    invisibleblock.lifetime=800;
    invisibleblockGroup.add(invisibleblock);
    invisibleblock.x=door.x;
  }
}
  
  
