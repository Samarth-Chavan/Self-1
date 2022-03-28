var H1Image
var H2Image
var H3Image
var H4Image

var GunImage

var Trackmage

function preload(){
  
 Trackmage = loadImage("assets/PNG/Track.png")
 GunImage = loadImage("assets/PNG/Gun.png")
 H1Image = loadImage("assets/PNG/H1.png")
 H2Image = loadImage("assets/PNG/H2.png")
 H3Image = loadImage("assets/PNG/H3.png")
 H4Image = loadImage("assets/PNG/H4.png")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(Trackmage)

}

function draw() {
  background(0); 



drawSprites();
}




