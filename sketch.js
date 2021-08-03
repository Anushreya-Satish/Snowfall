const World = Matter.World;

var BackgroundImage, bg;
var olaf, olafImg;
var music;
var text,textImg;
var world,snow;

function preload(){
 BackgroundImage = loadImage("snowy.jpg")
 music = loadSound("Some things never change.mp3")
 olafImg = loadImage("snowman.png");
 textImg = loadImage("snowyText.png");

}
function setup() {
  createCanvas(1536,719);

    music.play();
  
    olaf = createSprite(740,500,20,20);
    olaf.addImage(olafImg);
    olaf.scale = 0.5;

    text = createSprite(1300,650,10,10);
    text.addImage(textImg);
    text.scale = 1;

    snow = new snowflake(random(0,1536), random(0,719));
}

function draw() {
  background(BackgroundImage); 

  snow.display();

  drawSprites();
}