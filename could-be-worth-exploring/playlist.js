//playlistTracks = [] {

//}

var music = new Audio();

//var img = document.getElementsByClassName('album-art');
//var audioImages = ["../visuals/audio-default.png", "../visuals/audio-play.png", "../visuals/audio-pause.png"];


function playSound() {
    music.pause();
    music.currentTime = 0;
    music = new Audio("Coqui.mp3");
    music.play();
    music.onplaying = function() {
        console.log("playing");
    }
    //img.src = audioImages[2];
    music.onended = function() {
        console.log("Playback ended");
        //img.src = audioImages[1];
    };
}

//----------------------------------
//logging each playlist item
//i want to be able to add any number of audio files
//and still be able to change the album art to indicate play-status
const audioParentDivs = document.querySelectorAll('.audio-option');
const indexedAudioParentDivs = [...audioParentDivs];
console.log(indexedAudioParentDivs);

//----------------------------------
//console.log-- readout of audio file index number
    /*maybe move this into the song-select function*/
for(let i = 0; i < indexedAudioParentDivs.length; i++){
    indexedAudioParentDivs[i].addEventListener('click',function(){
        console.log('audio file index : '+i);
    });
}

//----------------------------------
//re-writing the code that will play audio to work for all playlist items

function playAudio() {
    //link the clicked div index to the song matching its index here
}