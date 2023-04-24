class Ai{
    constructor(x,y){
        this.x=x
        this.y=y
        this.size=50
        this.lineX=width-this.size
        this.lineY=this.y+this.size/2
        this.lineH=5
    }
    shootchance(){
        chance = random(1)
        if(chance<=.1){
            shootGraphics()
        }
    }
    show(){
        fill(255)
        rect(this.x,this.y,this.size)
    }
    shootGraphics(i){
        this.lineX=width-this.size
        this.lineY=this.y+this.size/2
        fill(255,0,0)
        noStroke()
        rect(this.lineX, this.lineY, -i, this.lineH)
    }
}
