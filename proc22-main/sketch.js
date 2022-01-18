//var gameState = 0;

var stage;
var car;
var npc1, npc2;
var pistol,pistaul;

var snipr;
var scopeeee;
var handGun;

var canvas,backgroundImage;
var playButton;
var thisButton;
var thatButton;
var selectedGun;

function preload() {
  stage = loadImage("../images/horeWimeCaari.png");
  car = loadImage("../images/caari.png");
  npc1 = loadImage("../images/npc1.png");
  npc2 = loadImage("../images/npc2.png");
  pistaul = loadImage("../images/Pistol9mm.png");
  snipr = loadImage("../images/sniper.png");
  scopeeee = loadImage("../images/untitledDesign.png");
  handGun = loadImage("../images/untitled.png");
  backgroundImage = loadImage("../images/savannah.jpg");
  playButton = loadImage("../images/playButton.png");




  

}

function setup() {
  canvas = createCanvas(displayWidth - 100  , displayHeight - 145 );


   playButton = createButton("Play");
   playButton.size(200, 200);
   playButton.position(displayWidth / 2 - 150, displayHeight / 2);
   playButton.style("font-size", "50px");
   playButton.style("border-radius", "50px");
   playButton.style("color", "yellow");
   playButton.style("background-color", "black");

   playButton.mousePressed(secondPage);



   //thisButton = createButton("PISTOL");
   //thisButton.size(60, 20);
   //thisButton.position(200, 50);
   //thisButton.style("display", "none");
//
   //thatButton = createButton("SNIPER");
   //thatButton.size(60, 20);
   //thatButton.position(770, 130);
   //thatButton.style("display", "none");
  
  
  


}
function draw() {
  background(backgroundImage);

 


  


  
 //pistol.addImage("pistol", pistaul);
 



 
  


 // if(gameState === 1){
 //   clear();
 //   game.play();
 // }
 // if(gameState === 2){
 //   game.end();
 // }
showSprites();



}


 function secondPage(){
image(pistaul, 200, 30, 200, 200);
image(snipr, 700, 0, 600, 400);




thisButton = createButton("PISTOL");
thisButton.size(60, 20);
thisButton.position(200, 50);
thisButton.style("display", "none");

thatButton = createButton("SNIPER");
thatButton.size(60, 20);
thatButton.position(770, 130);
thatButton.style("display", "none");

thisButton.style("display", "block");
thatButton.style("display", "block");
playButton.style("display", "none");

//thisButton.mousePressed(selectPistol);
thisButton.mousePressed(() => {
  selectedGun="pistol";
  thirdPage();
});

thatButton.mousePressed(() => {
  selectedGun="sniper";
  thirdPage();
});


//if(thisButton.mousePressed){
//  console.log("selectPistol")
//}
//else if(thatButton.mousePressed){
//  console.log("selectSniper")
//}






}


function thirdPage(){

  background("black");
  if (selectedGun === "pistol") {
    console.log("selected gun is pistol");
  } else if (selectedGun === "sniper") {
    console.log("selected gun is sniper");
  }

  
  fill("yellow");
  textSize(50)
  text("|Kill The Redman Mischief|",displayWidth/2,displayHeight/2);
  

  


thisButton.style("display", "none");
thatButton.style("display", "none");


}



