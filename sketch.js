var img;
var bolle;
var bolle2;
var bolle3;
var bolle4;
var bolle5;
var bolle6;
var bolle7;
var bolle8;
var bolle9;
var bolle10;

function preload() {
  img = loadImage("./assets/background.jpg");
}

function setup() {

  createCanvas(windowWidth, windowHeight);

  bolle = new Bubbles(random() * width, height / 2, 50);
  bolle2 = new Bubbles(random() * width / 2, random() * height / 2, 50);
  bolle3 = new Bubbles(random() * width, random() * height / 2, 50);
  bolle4 = new Bubbles(random() * width / 2, random() * height / 2, 50);
  bolle5 = new Bubbles(random() * width, random() * height / 2, 50);
  bolle6 = new Bubbles(random() * width/2, height / 2, 50);
  bolle7 = new Bubbles(random() * width, random() * height / 2, 50);
  bolle8 = new Bubbles(random() * width/2, random() * height / 2, 50);
  bolle9 = new Bubbles(random() * width, random() * height / 2, 50);
  bolle10 = new Bubbles(random() * width/2, random() * height / 2, 50);

  Bubbles.speed = 10;
}

function draw() {
  push();
  translate(width / 2, height / 2);
  imageMode(CENTER);
  let scale = Math.max(width / img.width, height / img.height);
  image(img, 0, 0, img.width * scale, img.height * scale)
  pop();

  var shell1Div = createElement("div");
  shell1Div.position(windowWidth / 4, windowHeight * 3 / 4);
  shell1Div.addClass("shell1Container");

  var shell2Div = createElement("div");
  shell2Div.position(windowWidth * 3 / 8, windowHeight * 4 / 5);
  shell2Div.addClass("shell2Container");

  var shell3Div = createElement("div");
  shell3Div.position(windowWidth * 4 / 7, windowHeight * 3 / 4);
  shell3Div.addClass("shell3Container");

  var shell4Div = createElement("div");
  shell4Div.position(windowWidth * 5 / 7, windowHeight * 2 / 3);
  shell4Div.addClass("shell4Container");

  var shell5Div = createElement("div");
  shell5Div.position(windowWidth * 5 / 8, windowHeight * 3 / 4);
  shell5Div.addClass("shell5Container");

  var shell6Div = createElement("div");
  shell6Div.position(windowWidth / 9, windowHeight * 3 / 4);
  shell6Div.addClass("shell6Container");

  bolle.move();
  bolle.display();

  bolle2.move();
  bolle2.display();

  bolle3.move();
  bolle3.display();

  bolle4.move();
  bolle4.display();

  bolle5.move();
  bolle5.display();

  bolle6.move();
  bolle6.display();

  bolle7.move();
  bolle7.display();

  bolle8.move();
  bolle8.display();

  bolle9.move();
  bolle9.display();

  bolle10.move();
  bolle10.display();
}

function Bubbles(_x, _y, _diameter) {
  // Properties defined by constructor
  this.size = _diameter;
  this.x = _x;
  this.y = _y;
  // Hardcoded properties
  this.speed = 2;
  // Methods
  this.move = function() {

    this.y -= this.speed;
  }

  this.display = function() {
    noFill();
    stroke('aquamarine');
    ellipse(this.x, this.y, this.size);
  }
}
