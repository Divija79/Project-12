var garden,rabbit;
var gardenImg,rabbitImg;
var apple;
var leaf;
var appleImg;
var leafImage;
var ran;
var score=0;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg=loadImage("apple.png");
  leafImage=loadImage("redImage.png")
}

function setup(){
  
  createCanvas(400,400);

  text("Score: "+score,50,50);
  
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);
  garden.scale=1;
  
 

  //creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  
  

  

  //Making the rabbit move along the mouse
  rabbit.x=World.mouseX;

  

  garden.velocityX=-5;

  if (garden.x < 0){
    garden.x = garden.width/2;
  }

  //createApple();
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  var selectSprite=Math.round(random(1,2));

  if(frameCount % 80===0){
    if(selectSprite===1){
      createApple();
    }
    else{
      createLeaves();
    }
  }
  
  //if(apple.isTouching(rabbit)){
    //apple.destroy();
  //}
  //createApple();

  //createLeaves();

  //select();

  drawSprites();
}
function createApple(){
  
  apple=createSprite(200,200,15,15);
  apple.addImage(appleImg);
  apple.scale=0.05;
  apple.velocityY=5;
  apple.lifetime=170;
  apple.x=Math.round(random(1,1000));
}

function createLeaves(){
  
  leaf=createSprite(200,200,15,15);
  leaf.addImage(leafImage);
  leaf.scale=0.05;
  leaf.velocityY=5;
  leaf.lifetime=170;
  leaf.x=Math.round(random(1,1000));
}

//function select(){




//}