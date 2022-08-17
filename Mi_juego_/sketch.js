var cabaña_img,background_img;
var Button,Button_2,button_2,button_3,button_x;
var bandera = 0;
 

function preload(){
cabaña_img = loadImage("./imagenes/Cabaña.jpg");
background_img = loadImage("./imagenes/background.jpg");
interior_img = loadImage("./imagenes/interior de la cabaña.jpg");
}

function setup(){
  createCanvas(900,700);

  Button = createButton('continuar');
  Button.position(800, 660);
  Button.mousePressed(Escenarios);
  
}

function draw(){
background(189);
image(cabaña_img,0,0,width,height);

fill("#F0F0F0");
textSize(20);
text(`Tu y tus amigos rentaron una cabaña en el bosque, donde van a tomarse un descanso 
despues de estar jugando fueron todos a sus habitaciones para dormir, pero tu despertaste 
por un ruido`,10,600);
//textAlign(CENTER, CENTER);
drawSprites();
}

function Escenarios() {
  console.log("hola");
  Button.hide();
 
  var sprite_1 = createSprite(width,height);
  sprite_1.addImage("escenario_1",background_img);
  sprite_1.changeImage("escenario_1");

  button_2 = createButton('Volver a dormir');
  button_2.position(width/2,height/2);
  button_2.mousePressed(opcion1);

  button_3 = createButton('Ir a investigar');
  button_3.position(width/2,height/2+30);

}

function opcion1(){
  button_2.hide();
  button_3.hide();

  var sprite_2 = createSprite(width,height);
  sprite_2.addImage("escenario_2",interior_img);
  sprite_2.changeImage("escenario_2");

  barra_1 = createSprite(10,800,800,100);
  fill("#F0F0F0")
  textSize(20);
  text(`Al dia siguiente despiestas y te diriges a la sala de estar y ves a tus amigos 
  nerviosos asi que les preguntas - ¿ Que pasa ? ellos te voltean a ver y te dicen que 
  falta Samuel y no saben donde esta`,10,600);
  
  //Debe ser una ventana emergente
  text(` Busca pistas en la habitacion de Jake`,10,100);
  fill("black");
  textSize(20);

  Button_2 = createButton('continuar');
  Button_2.position(800, 660);
  //Button_2.mousePressed();

  text(`Caminas a la habitacion de Jake al abrir la puerta te acercas al cristal y dices 
  -Alguien entro por aqui ¿pero quien? y ¿porque?`);
  
  //Debe ser una ventana emergente
  text(` Busca en el bosque 2/3`,10,100);
  fill("black");
  textSize(20);

  button_x.mousePressed(() => {

  });
}
