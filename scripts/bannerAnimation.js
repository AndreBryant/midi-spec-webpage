// Here goes the banner animation (matrix animation sana)
//matrix of zeros that turns the hovered digit into a 1.
window.addEventListener('load', ()=>{
    const canvas = document.getElementById('canvas1');
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    
    var ctx = canvas.getContext('2d');

    class Particle{
        constructor(x,y,height,width){
            this.x = x;
            this.y = y;
            this.height = height;
            this.width = width;
            
            this.text = '01';
        }
        draw(){

        }
    }

    class Effect{
        constructor(){

        }
        #initialize(){

        }
        resize(){

        }
    }

    //only for the first time
    function animate(){
    }

})