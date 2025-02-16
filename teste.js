class Ninja{
    constructor(ctx,teclado,imagem,x,y){
        this.ctx=ctx
        this.teclado=teclado
        this.x=x
        this.y=y
        this.vel=5
        this.ninja = new Image()
        this.ninja.src = imagem
        this.ninja.width = 50;
        this.ninja.height= 50;
        this.ninja.addEventListener('load',()=>{
            this.desenhar()
        })
        
    }

    gerenciar(){
        if(this.teclado.esquerda){
            if(this.x > 0)
            this.x -= this.vel
        }
        if(this.teclado.direita){
            if(this.x < this.ctx.canvas.width - this.ninja.width)
            this.x+=this.vel
        }
        if(this.teclado.cima){
            if(this.y > 0)
            this.y -= this.vel
        }


        if(this.teclado.baixo){
            if(this.y < this.ctx.canvas.height - this.ninja.height)
            this.y += this.vel
        }





    }
    
    desenhar(){
        this.gerenciar()
        this.ctx.drawImage(this.ninja,this.x,this.y,this.ninja.width,this.ninja.height)
            }

}


class Shurikas{
    constructor(ctx,imagem,x,y){
        this.ctx = ctx        
        this.shuriken = new Image()
        this.shuriken.src = imagem
        this.shuriken.width = 50;
        this.shuriken.height= 50;
        this.x = x
        this.y = y
        this.velx=5
        this.vely=5
      
}

        gerenciar(){

        this.x += this.velx;
        this.y += this.vely;

        if (this.x + this.shuriken.width > this.ctx.canvas.width || this.x < 0) {
            this.velx =-this.velx;
        }
        

        if (this.y + this.shuriken.height > this.ctx.canvas.height || this.y< 0) {
            this.vely = -this.vely;
             }
        }

         desenhar(){
            this.gerenciar()
            this.ctx.drawImage(this.shuriken,this.x,this.y,this.shuriken.width,this.shuriken.height)
         }
   
    }




    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext('2d')
    
    const teclado={
        cima:false,
        baixo:false,
        direita:false,
        esquerda:false,
        
    }

    const teclado2={
        cima:false,
        baixo:false,
        direita:false,
        esquerda:false,
    }





    let ninjaazul; 
     
    let ninjaverm; 
 
    let listashuriken ;


    function estadoinicial(){

        listashuriken = [new Shurikas(ctx,"shurikenbranca.png",0,0)]
        ninjaazul = new Ninja(ctx,teclado,"ninjaazul.png",350,200)
        ninjaverm = new Ninja(ctx,teclado2,"ninjaverm.png",500,200)

    }

    




    const intervalo = setInterval(tempo,10000);


    function tempo(){
        listashuriken.push(new Shurikas(ctx,"shurikenbranca.png", Math.random()*(ctx.canvas.width-50),Math.random()*(ctx.canvas.height-50)))

        if(listashuriken.length>5)
            clearInterval(intervalo)
    }


        

    

    const teladeinico = new Image()
    teladeinico.src = 'telainicio.jpg'

    const telagameover = new Image()
    telagameover.src = 'ninjaazulganha.png'

    const telagameover2 = new Image()
    telagameover2.src = 'ninjavermelhoganha.png'


    let telaAtual = 'inicio'

    const planodefundo = {
    
        width:canvas.width,
        height:canvas.height,
        x:0,
        y:0,
        desenhainicio(){
            ctx.drawImage(
            teladeinico,
            planodefundo.x,
            planodefundo.y,
            planodefundo.width,
            planodefundo.height,
            
            
            )
        }    

  }

    const planofimgame = {
    
        width:canvas.width,
        height:canvas.height,
        x:0,
        y:0,
        desenhawin1(){
            ctx.drawImage(
            telagameover,
            planodefundo.x,
            planodefundo.y,
            planodefundo.width,
            planodefundo.height,
            
            )
        },

        desenhawin2(){
            ctx.drawImage(
            telagameover2,
            planodefundo.x,
            planodefundo.y,
            planodefundo.width,
            planodefundo.height,
            
            
            
            )    
          }
  }

    window.addEventListener('keydown',(evento)=>{
        
        if(evento.keyCode==40){
            event.preventDefault()
            }
        if(evento.keyCode==38){
            event.preventDefault()
            }
        if(evento.keyCode==37){
            event.preventDefault()
            }
        if(evento.keyCode==39){
            event.preventDefault()
            }





           
        if(evento.keyCode==13){
            if(telaAtual=="end"){
               telaAtual = "inicio"
            }
            else if(telaAtual=="inicio"){
                telaAtual = "jogo"
            }       

        }


        if(evento.keyCode==37){
            teclado.esquerda=true
        }else if(evento.keyCode==39){
            teclado.direita=true
        }
        if(evento.keyCode==38){
            teclado.cima=true
        }else if(evento.keyCode==40){
            teclado.baixo=true
        }
        


    

    
        if(evento.keyCode==65){
            teclado2.esquerda=true
        }else if(evento.keyCode==68){
            teclado2.direita=true
        }
        if(evento.keyCode==87){
            teclado2.cima=true
        }else if(evento.keyCode==83){
            teclado2.baixo=true
        }






})  
    
    

    window.addEventListener('keyup',(evento)=>{

        if(evento.keyCode==37){
            teclado.esquerda=false
        }else if(evento.keyCode==39){
            teclado.direita=false
        }

        if(evento.keyCode==38){
            teclado.cima=false
        }else if(evento.keyCode==40){
            teclado.baixo=false
        }       

        
        if(evento.keyCode==65){
            teclado2.esquerda=false
        }else if(evento.keyCode==68){
            teclado2.direita=false
        } 

        if(evento.keyCode==87){
            teclado2.cima=false
        }else if(evento.keyCode==83){
            teclado2.baixo=false
        }


    })






    const game=()=>{

        if(telaAtual=="inicio"){
          planodefundo.desenhainicio()
          estadoinicial()
        }

        if(telaAtual=="jogo"){
        
            ctx.clearRect(0,0,canvas.width,canvas.height)
            ninjaazul.desenhar()
            ninjaverm.desenhar()
            listashuriken.forEach(shurika=>{ 
                shurika.desenhar()
                if(
                    shurika.x + shurika.shuriken.width >= ninjaazul.x &&
                    shurika.x <= ninjaazul.x + ninjaazul.ninja.width*0.75  &&
                    shurika.y + shurika.shuriken.height >= ninjaazul.y &&
                    shurika.y <= ninjaazul.y + ninjaazul.ninja.height*0.75
                )
                {
                    
                    telaAtual="end"
                    planofimgame.desenhawin2()
                    
                }

             if(
                    shurika.x + shurika.shuriken.width >= ninjaverm.x &&
                    shurika.x <= ninjaverm.x + ninjaverm.ninja.width*0.75 &&
                    shurika.y + shurika.shuriken.height >= ninjaverm.y &&
                    shurika.y <= ninjaverm.y + ninjaverm.ninja.height*0.75
                )
                {
                        
                    telaAtual="end"
                    planofimgame.desenhawin1()
                
                }




            })


          



           
    }
                    



        requestAnimationFrame(game);    
}
    requestAnimationFrame(game);
