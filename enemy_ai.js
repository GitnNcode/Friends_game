class Enemy{
    constructor(){
        this.x = random(0, width);
        this.y = random(0, height);
        this.playerX = 0;
        this.playerY = 0;
        this.velocity = random(4.5, 6);

    } 

    show(){
        fill(0,0,255);
        noStroke();
        rect(this.x, this.y, 40);      
    }

    follow(playerX, playerY){
        if(this.x < playerX){
            this.x += this.velocity;
        }

        if(this.x > playerX){
            this.x -= this.velocity;
        }

        if(this.y < playerY){
            this.y += this.velocity;
        }

        if(this.y > playerY){
            this.y -= this.velocity;
        }
    }
}
