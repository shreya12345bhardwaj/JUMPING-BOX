var canvas;
var music;
var block1,block2,block3,block4,ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
   block1 = createSprite(0,580,360,30);
   block1.shapeColor="purple";
   block2 = createSprite(295,580,200,30);
   block2.shapeColor="blue";
   block3 = createSprite(515,580,200,30);
   block3.shapeColor="orange";
   block4 = createSprite(740,580,200,30);
   block4.shapeColor="pink";
   
    //create box sprite and give velocity
     ball = createSprite(random(20,750),100,40,40);
     ball.shapeColor = "white";
     ball.velocityX = 4
     ball.velocityY = 9
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
   edges = createEdgeSprites();
   ball.bounceOff(edges);


    //add condition to check if box touching surface and make it box
    if(ball.isTouching(block1) && ball.bounceOff(block1)){
        ball.shapeColor="purple";
    }
    if(ball.isTouching(block2)){
        ball.shapeColor="blue";
        ball.velocityX = 0
        ball.velocityY = 0
    }
    if(ball.isTouching(block3) && ball.bounceOff(block3)){
        ball.shapeColor="orange";
    }
    if(ball.isTouching(block4) && ball.bounceOff(block4)){
        ball.shapeColor="pink";
    }
    drawSprites();

}
