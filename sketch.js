let mySound;
let button;

function setup()
{
    createCanvas(640,480);
mySound=loadSound('lemon', loadMusic);
button = createButton('play');
button.mousePressed(togglePlaying);
background(51);
//mySound.play();
}

function togglePlaying(){
    if(!song.isPlaying()){
        song.play();
        song.setVolume(0.3);
        buttom.html('pause');
    }else{
        song.stop();
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
