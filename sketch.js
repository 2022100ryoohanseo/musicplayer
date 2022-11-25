let mySound;
let button;

function setup()
{
    createCanvas(200,200);
soundFormats('mp3', 'ogg');
mySound=loadSound('lemon', loadMusic);
button = crateButton('play');
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
    ellipse();

}
