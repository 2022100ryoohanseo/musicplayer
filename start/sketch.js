let mySound;
let button;

function setup(){

    createCanvas(640,480);
    mySound=loadMusic('fareless.mp3', loadMusic);
    button=createButton('play');
    button.mousePressed(togglePlaying);
    
}

function togglePlaying(){

    if(!mySound.isPlaying()){
        mySound.play();
        mySound.setVolum(0.3);
        button.html('pause');
    } else{
        mySound.stop();
        button.html('play');
    }
}

function loadMusic(){
    console.log("loaded");
}

function draw(){
    fill(255,0,0);
    ellipse(50,50,100,100);
}