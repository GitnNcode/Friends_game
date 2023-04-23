let player;

let pressedKeys = {};


let monkey;

function preload() {
  monkey = loadImage('./assets/monkey_1.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  player = new Player(width/2, height/2);
}

function draw() {
  background(0);
  player.update();
  player.draw();
}

function keyPressed() {
  pressedKeys[key] = true;
}

function keyReleased() {
  delete pressedKeys[key];
}

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    
    this.speed = 7;
  }
  
  update() {
    let mvmt = createVector(0, 0);
    
    if(pressedKeys.a) {
      mvmt.x -= 1;
    }
    if(pressedKeys.d) {
      mvmt.x += 1;
    }
    if(pressedKeys.w) {
      mvmt.y -= 1;
    }
    if(pressedKeys.s) {
      mvmt.y += 1;
    }
    
    mvmt.setMag(this.speed);
    
    this.x += mvmt.x;
    this.y += mvmt.y;
  }
  
  draw() {
    image(monkey, this.x, this.y, 100, 100)
  }
}