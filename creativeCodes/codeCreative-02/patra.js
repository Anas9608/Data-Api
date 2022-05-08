function patra() {


    //render patra
    this.vPatra = 10;
    this.xPos = width/2;
    this.yPos = height - 30;
    this.lenPatra = 200;
    this.heightPatra = 30;
  
  
  
  
    this.render = function () {
  
      rect(this.xPos, this.yPos, this.lenPatra, this.heightPatra);
      
  
  
    }

    this.move = function(){
      
      if(this.xPos + this.lenPatra >= width){
      this.vPatra = -this.vPatra;
      }
      if(this.xPos == 0){
        this.vPatra = -this.vPatra;
      }
      this.xPos += this.vPatra;

    }
  
  }