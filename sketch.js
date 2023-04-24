let player;
//let ai=[];
let enemy = [];

let linex=0;

let pressedKeys = {};


let monkey;

function preload() {
  monkey = loadImage('./assets/monkey_1.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  player = new Player(width/2, 0);
  // for(let i=0; i<=4; i++){
  // ai[i]=new Ai(width-50,i*height/4)
  // }
  //enemy = new Enemy();
  for(lasy[i]=new Enemy()
  }
}

function draw() {
  frameRate(50)
  background(0);
  // for(i in ai){
  //   ai[i].show()
  //   ai[i].shoot(linex)
  //   player.collide(ai[i].lineX, ai[i].lineY, ai[i].lineH,-linex);
  //   r=random(1)
  //   if(r<=.5){
  //     ai[i].y+=20
  //   }else{
  //     ai[i].y-=20
  //   }
  // }
  player.update();
  player.draw();
    
  for (i in enemy){
    enemy[i].show();
    enemy[i].follow(player.x, player.y);
    
  }
  

  if(linex>=width*1.5){
    linex=0
  }
  else{
    linex+=20
  }
  //noLoop()

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
    this.width=100
    this.height=100
    this.speed = 7;
  }
  
  
  collide(r2x,r2y,r2h,r2w){
    //console.log(this.x,this.y,r2x,r2y,r2h,r2w)
    if (
        this.x+this.width > r2x + r2w
        && this.x + this.width*2 < r2x
        && this.y < r2y + r2h
        && this.y + this.height > r2y
        ) {
      noLoop()
    }
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

    if(this.x < 0 || this.x+this.width>width){
      this.x -= mvmt.x;
    }

    if(this.y < 0 || this.y + this.height > height ){
      this.y -= mvmt.y;
    }
  }

 
  
  draw() {
    image(monkey, this.x, this.y, this.width, this.height)
  }
}

