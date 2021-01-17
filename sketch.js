var ship,ship_moving;
var sea, sea_running;
function preload(){
ship_moving =
loadImage("ship-1.png");
           
sea_running=
loadImage("sea.png");
ship1= loadImage("ship-3.png")
ship2= loadImage("ship-2.png")
ship4= loadImage("ship-4.png")
}

function setup(){
  createCanvas(600,600);
  sea= createSprite(400,200);
  sea.addImage("jumping",sea_running);
  sea.velocityX= -3
  
  ship= createSprite(50,350,20,50);
  
  
  ship.scale=0.15

  
}

function draw() {
  background("blue");
  console.log(ship.y)
ship.addImage("running",ship_moving)
  if(sea.x <0){
    sea.x= sea.width/2;
  }
  if(keyDown("space")){
  ship.addImage("running",ship1)
  }
   if(keyDown("up")){
  ship.addImage("running",ship2)
   }
    if(keyDown("down")){
  ship.addImage("running",ship4)
   }
 drawSprites();
  
} 