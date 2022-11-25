let mySound;
let button;

function setup()
{
    createCanvas(640,480);
mySound=loadSound('lemon.mp3', loadMusic);
button = createButton('play');
button.mousePressed(togglePlaying);
background(51);
//mySound.play();
}

function togglePlaying(){
    if(!mySound.isPlaying()){
        mySound.play();
        mySound.setVolume(0.3);
        button.html('pause');
    }else{
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
