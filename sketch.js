var sea, ship;
var seaImg, shipImg1;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-1.png",
                            "ship-2.png","ship-1.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Plano de fundo móvel
  sea=createSprite(200,200)
  sea.addImage(seaImg)
  /* Criar sprite
  Adicionar imagem
  Adicionar velocidade
  Diminuir tamanho */
  sea.scale=0.4
  
  // Adicionar navio
  /* Criar sprite
  Adicionar imagem
  Scale */
  ship=createSprite(200,200)
  ship.addAnimation('shipImg1',shipImg1)
  ship.scale=0.4
}

function draw() {
  background(0);
  // Velocidade do plano de fundo
  sea.velocityX = -3;

  
  // código para redefinir o plano de fundo
  // dica: width
  if(sea.x<0){
  sea.x=400

  }
  drawSprites();
}
