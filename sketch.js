var fundo,fundoImg, parede1,parede2,parede3,parede4,parede5,parede6,parede7,parede8,parede9,parede10,parede11,parede12;
var nave, naveImg, alienImg,alien1, alien2, alien3, fritas, fritasImg

function preload(){
  fundoImg = loadImage("fundoJogo.jpg");
  naveImg = loadImage("nave.png");
  alienImg = loadImage("et1.png");
  fritasImg = loadImage("fritas.png");
}
function setup() {
 createCanvas(400,400)
 fundo = createSprite(200, 200, 1, 1);
 fundo.addImage("imagemFundo", fundoImg);



 parede1 = createSprite(190,120,250,3);
 parede2 = createSprite(190,260,250,3);
 parede3 = createSprite(67,145,3,50);
 parede4 = createSprite(67,235,3,50);
 parede5 = createSprite(313,145,3,50);
 parede6 = createSprite(313,235,3,50);
 parede7 = createSprite(41,170,50,3);
 parede8 = createSprite(41,210,50,3);
 parede9 = createSprite(337,210,50,3);
 parede10 = createSprite(337,170,50,3);
 parede11 = createSprite(18,190,3,40);
 parede12 = createSprite(361,190,3,40);


  nave = createSprite(38, 190, 1, 1);
  nave.addImage("imagemnave", naveImg);
  nave.scale = 0.3;

  alien1 = createSprite(110, 140, 1, 1);
  alien1.addImage("imagemalien", alienImg);
  alien1.scale = 0.5;

  alien2 = createSprite(200,230,1,1);
  alien2.addImage("imagemalien", alienImg);
  alien2.scale = 0.5;

  alien3 = createSprite(290,140,1,1);
  alien3.addImage("imagemalien", alienImg);
  alien3.scale = 0.5;

  fritas = createSprite(340, 190, 1, 1);
  fritas.addImage("imagemfritas", fritasImg);
  fritas.scale = 0.07;

  alien1.velocityY = 1;
  alien2.velocityY = -1;
  alien3.velocityY = 1;
}

function draw() 
{  
  alien1.bounceOff(parede2);
  alien1.bounceOff(parede1);
  alien2.bounceOff(parede1);
  alien2.bounceOff(parede2);
  alien3.bounceOff(parede1);
  alien3.bounceOff(parede2);
  if (keyDown("right")) {
    nave.x = nave.x + 4;
  }
  if (keyDown("left")) {
    nave.x = nave.x - 4;
  }
  if (nave.isTouching(alien1) || nave.isTouching(alien2) || nave.isTouching(alien3) ) {
    nave.x = 38;
    nave.y = 190;
  }
  if (nave.isTouching(parede12)) {
    //true false
    nave.x = 115;
    nave.y = 300;
    nave.velocityX = 2;
    fritas.visible = false;
  }
  drawSprites();
}





