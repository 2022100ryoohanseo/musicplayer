let mySound;

function setup()
{
soundFormats('mp3', 'ogg');
mySound=loadSound('lemon', loadMusic);
//mySound.play();
}

function loadMusic(){
    mySound.play();
}

function draw(){
    fill(255,0,0);
    

}
