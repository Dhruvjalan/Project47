var s;
var scl = 20;
var food, NEUTRAL;
var x = 0;
var a = "NEUTRAL", UP,DOWN,LEFT,RIGHT;
var appleimg, apple, bkimg, endsound,eats,worm,wormhead,head, wx = 0, wy = 0,wormheadimg2;
var n = 1, m = 1;

function preload(){
appleimg = loadImage("apple.png");
bkimg = loadImage("background2.jpg");
endsound = loadSound("gameovr.wav");
eats = loadSound("eatsound.mp3");
worm = loadImage("Earth worm.jpg");
wormhead = loadImage("Earthwormhead.png");
wormheadimg2 = loadImage("head.png")
}

function setup(){
  createCanvas(600,600);
  s = new Snake();
  frameRate(10);
  pickLocation()
  a = NEUTRAL

  apple = createSprite(50,50,scl,scl);
  apple.addImage(appleimg);
  apple.scale = 0.089 
  
  head = createSprite(0,0,scl,scl);
  
  head.addImage(wormhead)
  ///wormy = createSprite(50,50,scl,scl);
  //wormy.addImage(worm)
  //wormy.scale = 1
  

}

function pickLocation(x,y){
  

  food = createVector(x,y)

  
  food.mult(scl);
  //sfood.addImage("apple.png")
   x+=1 

}

function draw(){
  background(bkimg);

   
  fill("red")
  textSize(30)
  if(frameCount>3){
  text("score: "+s.total,470,50)
  } else {  text("score: "+s.total*0,470,50)
}
  
  s.death()
  s.update()
  s.show()

  if(s.eat(food)){
    
  var cols = floor(width/scl);
  var row = floor(height/scl);
  var xpos = floor(random(cols));
  var ypos = floor(random(row))
  pickLocation(xpos,ypos);
  apple.x = (xpos*scl)+10;
  apple.y = ypos*scl +3;
  if(s.total>0&& frameCount>3){
  eats.play()
  }

  } 

  fill(255,0,100)
  rect(food.x,food.y,scl,scl)

  drawSprites()

  
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    if(a!="DOWN"){
    s.dir(0,-1);
    a = "UP";
    angleMode(DEGREES)
    head.rotation = 270;
    head.addImage(wormhead)

    }

  }if(keyCode === DOWN_ARROW){
    if(a!="UP"){
    s.dir(0,10/10)
    a = "DOWN";
    angleMode(DEGREES)
    head.rotation = 90;
    head.addImage(wormhead)

    }

  }if(keyCode === LEFT_ARROW){
    if(a!="RIGHT"){
    s.dir(-10/10,0);
      head.rotation = 0;

    

    
    a = "LEFT";
    angleMode(DEGREES)
    head.addImage(wormheadimg2)

    }

  }if(keyCode === RIGHT_ARROW){
    if(a!="LEFT"){
    s.dir(10/10,0)
    a = "RIGHT";
    angleMode(DEGREES)
    head.rotation = 0;
    head.addImage(wormhead)

    }
  }
}

