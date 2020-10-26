
var monkey , monkey_running
var ground;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,survivalTIme

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
   monkey = createSprite(150,265,50,50);
  monkey.addAnimation("monkeyrunning",monkey_running);
  monkey.scale = 0.1;
  
 // banana = createSprite(350,200,50,50);
 // banana.addImage("banana",bananaImage);
 // banana.scale = 0.1;
  
  ground = createSprite(200,300,900,10);
  ground.velocityX = -4
  ground.x=ground.width/2;
  
 // obstacle = createSprite(250,265,50,50);
  //obstacle.addImage("obstacle",obstacleImage);
  //obstacle.scale = 0.2;
  FoodGroup = new Group();
  obstaclesGroup = new Group();
  
}


function draw() {
  background("white");
  if(keyDown("space"))
    {
      monkey.velocityY = -10;
    }
  monkey.velocityY = monkey.velocityY +0.5;
  monkey.collide(ground);
  if(ground.x < 0)
    {
      ground.x = ground.width/2;
    }
  spawnFood();
    spawnObstacles();
 if(monkey.isTouching(obstaclesGroup))
   {
     ground.velocityY = 0;
    
        obstaclesGroup.setVelocityXEach(0);
        FoodGroup.setVelocityXEach(0);
        obstaclesGroup.setLifetimeEach(-1);
        FoodGroup.setLifetimeEach(-1);
   }
  
    
stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);
  drawSprites();
  
}

function spawnFood()
{
  if (frameCount % 80 === 0) {
    banana = createSprite(600,250,40,10);
    banana.y = random(120,200);    
    banana.velocityX = -5;
    
     //assign lifetime to the variable
    banana.lifetime = 300;
    monkey.depth = banana.depth + 1;
    
    //add image of banana
     banana.addImage(bananaImage);
     banana.scale=0.05;
    
    //add each banana to the group
    FoodGroup.add(banana);
  }
 
}

function spawnObstacles() {
  if(frameCount % 300 === 0) {
    obstacle = createSprite(800,275,10,40);
    obstacle.velocityX = -6;
    
    //add image to the obstacle 
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.15;
    
    //lifetime to the obstacle     
    obstacle.lifetime = 300;
    
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}



