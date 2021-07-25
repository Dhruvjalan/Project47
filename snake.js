function Snake(){
    this.x = 0;
    this.y = 0;
    this.xspeed = 0;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];
    

    this.dir = function(x,y){
      this.xspeed = x;
      this.yspeed = y;

    }

    this.death = function(){
        for(var i = 0; i<this.tail.length;i++){
            var pos = this.tail[i];
            var d = dist(this.x,this.y,pos.x,pos.y)

            if(d<1){
                          
                if(this.total>=1 && frameCount>3){
                endsound.play()
                console.log("end")
               }
               this.total = 0;
               this.tail = [];
                a = "NEUTRAL";

            }
        }
    }
  
    this.update = function(){
        if(this.total === this.tail.length){
            for(var i = 0;i<this.total-1;i++){
              this.tail[i] = this.tail[i+1]
           }
        }
       
        this.tail[this.total-1] = createVector(this.x,this.y)
        
      this.x = this.x +this.xspeed*scl;
      this.y = this.y+this.yspeed*scl;
       wx = this.x;
       wy = this.y
      this.x = constrain(this.x,0,width-scl)
      this.y = constrain(this.y,0,height-scl)
  
    }
  
    this.show= function(){
        fill(255)

        for(var i = 0; i<this.total;i++){
            //rect(this.tail[i].x,this.tail[i].y,scl,scl);
            if(i===0){
            image(worm,this.tail[i].x,this.tail[i].y,scl,scl);
            } else {image(worm,this.tail[i].x,this.tail[i].y,scl,scl);
        }


        }
        //rect(this.x,this.y,scl,scl);
        //image(wormhead,this.x,this.y,scl,scl);
      //  if(a === 'LEFT'|| a === 'DOWN'){
        head.x = this.x,
        head.y = this.y
        //}

        if(a === 'RIGHT'){
            head.x = this.x+scl;
            head.y = head.y+scl
        }
        if (a === 'UP'){
            head.x = this.x+scl
            head.y = head.y;
        }
        if (a === 'DOWN'){
            head.x = this.x;
            head.y = head.y+scl;
        }

        if(a === 'LEFT'){
            head.y +=scl/2
        }

      
  
    }

    this.eat = function(pos){
        var d = dist(this.x,this.y,pos.x,pos.y)

        if(d<scl/2){
            this.total+=1
            return true;
        } else {return false}
        
        
    }
}