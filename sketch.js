let img
let img2
let img3
let img4
var button1;
var button2;
var d = 35;
let figures = [];
let numfigures = 3;


function preload (){
  let figure1 = loadImage('image/figure1.png');
    let figure2 = loadImage('image/figure2.png');
    let figure3 = loadImage('image/figure3.png');
  figures = [figure1,figure2,figure3]
}

function setup() {
  createCanvas(1000, 1000);
  background(248, 237, 235);
  
  
  
  extraCanvas = createGraphics(100,200);
  //extraCanvas.background();
  extraCanvas.clear();
  
    button1 = createButton("click me"); 
   button1.position(800, 35); //x,y location of input
  button2 = createButton("HOME PAGE"); 
   button2.position(100, 35); //x,y location of input
  img=loadImage("image/Kylie.PNG")
  img2=loadImage("image/Amanda.PNG")
  img3=loadImage("image/Skincare.PNG")
  img4=loadImage("image/Tori.PNG")
  
  let randoImg = random(figures);
  image(randoImg,10,0, 700,1600/2);

  
}

function draw() {

  
   button1.mousePressed(picture); //pressing the button object
 button2.mousePressed(sketch); //pressing the button object
  
  
  stroke(254, 200, 154);//stroke on elipse
  fill(216, 226, 220);
  ellipse(mouseX,mouseY,d,d);
 
  
   fill(254, 197, 187); 
  noStroke();
  text('you are not enough',250,150);
  textSize(30);//size of font
  
  
  rect(random(550,465),random(100,200),10,10);

  if (mouseIsPressed){
  extraCanvas.noStroke();
  extraCanvas.fill(0,30);
  extraCanvas.ellipse(mouseX,mouseY,10,10);
  }
  else {
      extraCanvas.clear();
      }

  fill(254, 200, 154);
   text('not everything is what you see on social media',50,950);
  textSize(60);//size of font

 

  
}
  
function picture() {
image(img,250,250,200,400); 
image(img2,400,400,200,400);
image(img3,230,550,200,400);
image(img4,350,850,200,400);
  
  
}


function sketch(){
  clear(); 

}