
var dog, happyDog, database, foodS, foodStock, dogImg


function preload()
{
	happyDog = loadImage("happydog.png");
	dogImg=loadImage("Dog.png")
}

function setup() {
	createCanvas(500, 500);

	database = firebase.database();
	//Create the Bodies Here.
foodStock=database.ref("Food")
  foodStock.on("value",readStock)
  dog=createSprite(300,200,20,20)
  dog.addImage(dogImg)
  dog.scale=0.5

	
  
}


function draw() {
  rectMode(CENTER);
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
	  foodS=foodS-1  
	  writeStock(foodS)
	  dog.addImage(happyDog)
	  

  }
  
  drawSprites();
fill ("black")
  text("Hit the up arrow to feed the dog",100,100)
  
 
}

function readStock(data){
	foodS=data.val();

}

function writeStock(x){
	database.ref('/').update({
		Food:x

	})
}
