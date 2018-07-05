var bird;
var pipes = []

function setup(){
    createCanvas(400, 600)
    bird = new Bird()
    pipes.push(new Pipe())
}

function draw(){
    background(0)
   
    //render multiple pipes every 100 frame
    if(frameCount % 100 == 0){
        pipes.push(new Pipe())
    }

  
    //render pipes
    for(let i = 0; i < pipes.length; i++){
        let currentPipe = pipes[i]
        currentPipe.show()
        currentPipe.update()

        //bird hitting pipe mechanism
        if(currentPipe.hits(bird)){
            console.log('HIT')
        }

        //delete the pipe when it's out of screen
        if(currentPipe.offscreen()){
            pipes.splice(i, 1)
        }
    }
    //Show and update the bird
    bird.update()  
    bird.show()
}



function keyPressed(){
    if(key == ' '){
        bird.up()
    }
}