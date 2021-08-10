var iss;
var sleepimg,exerciseimg,brushimg,moveimg,bathimg,eatimg,gymimg,issimg;
var astronaut;
function preload() {
issimg = loadImage("iss.png")
  sleepimg = loadAnimation("sleep.png")
  brushimg = loadAnimation("brush.png")
  gymimg = loadAnimation("gym11.png","gym12.png","gym11.png")
  eatimg = loadAnimation("eat1.png","eat2.png")
  drinkimg = loadAnimation("drink1.png","drink2.png")
  moveimg = loadAnimation("move.png","move1.png")
  bathimg = loadAnimation("bath1.png","bath2.png","bath1.png")
 
 
}


function setup() {
  createCanvas(800,400);
 iss = createSprite(400, 200, 50, 50);
iss.addImage(issimg)
iss.scale = 0.2
astronaut = createSprite(300,230)
astronaut.addAnimation("sleeping",sleepimg)
astronaut.addAnimation("movings", moveimg);
astronaut.scale = 0.1;



}

function draw() {
  background(255,255,255);  
if (keyDown("UP_ARROW")) {
  astronaut.addAnimation("brushing",brushimg)
  astronaut.changeAnimation("brushing")
  astronaut.y = 275
  astronaut.velocityY = 0
  astronaut.velocityX = 0
}

if (keyDown("DOWN_ARROW")) {
  astronaut.addAnimation("gyming",gymimg)
  astronaut.changeAnimation("gyming")
  astronaut.y = 275
  astronaut.velocityY = 0
  astronaut.velocityX = 0

}if (keyDown("LEFT_ARROW")) {
  astronaut.addAnimation("eating",eatimg)
  astronaut.changeAnimation("eating")
  astronaut.y = 275
  astronaut.velocityY = 0
  astronaut.velocityX = 0

}if (keyDown("RIGHT_ARROW")) {
  astronaut.addAnimation("drinking",drinkimg)
  astronaut.changeAnimation("drinking")
  astronaut.y = 275
  astronaut.velocityY = 0
  astronaut.velocityX = 0

}
if(keyDown("N")){
  astronaut.changeAnimation("moving");
  astronaut.velocityX = 1;
  astronaut.velocityY = 1;
}




  drawSprites();
textSize(25)
fill(600)
  text("Instructions",40,50)
  textSize(25)
  fill(150)
    text("brushing = up arrow",40,80)

    textSize(25)
    fill(150)
      text("gyming = down arrow",40,110)

      textSize(25)
      fill(150)
        text("eating = left arrow",40,140)

        textSize(25)
        fill(150)
          text("drinking = right arrow",40,170)
                    
          textSize(25)
          fill(150)
            text("moving = N key",40,200)
          
}
