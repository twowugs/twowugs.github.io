var music = new Audio();
function playSound() {
    music.pause();
    music = new Audio("Coqui.mp3");
    music.play();
}