var box
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30)
}

function draw() 
{
  background(30);
drawSprites;

if (keyIsDown(UP_ARROW)){
   background("Red")
}

if(keyIsDown(DOWN_ARROW)){
  background("orange");
}

if(keyIsDown(RIGHT_ARROW)){
  background("yellow")
}

if(keyIsDown(LEFT_ARROW)){
  background("green")
}
}





