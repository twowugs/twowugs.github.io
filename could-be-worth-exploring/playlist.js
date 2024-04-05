
//var img = document.getElementsByClassName('album-art');
//var audioImages = ["../visuals/audio-default.png", "../visuals/audio-play.png", "../visuals/audio-pause.png"];


var music = new Audio();
var isPaused = 1;

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
const audioFiles = [
    "playlist/Hank-Williams-Ill-never-get-out-of-this-world-alive.mp3", 
    "playlist/Wingnut-Dishwashers-Union-My-Idea-of-Fun.mp3",
    "playlist/Sumer-is-icumen-in.mp3",
    "playlist/50-Cent-In-Da-Club.mp3",
    "playlist/Thirteen.mp3"
    ];
const indexMapping = {};
audioFiles.forEach((song, index) => {
    audioFiles[song] = indexedAudioParentDivs[index];
});

const currentSong = [];

//----------------------------------
//console.log-- readout of audio file index number
    /*maybe move this into the song-select function*/
function getIndex() {
    for(let i = 0; i < indexedAudioParentDivs.length; i++){
        indexedAudioParentDivs[i].addEventListener('click',function(){
            console.log('audio file index : '+i);
            var activeSong = +i;
            if (currentSong.includes(activeSong)) {
                music.onplaying = function() {
                    console.log("playing");
                    isPaused = 0;
                }
                music.onpause = function() {
                    console.log("paused");
                    isPaused = 1;
                }
                return;
            } else {
                currentSong = [];
                /* clear array*/
                currentSong.unshift (activeSong);
                /* add clicked song to array*/
                console.log('currentSong[] contains' + currentSong);
                music.pause();
                isPaused = 1;
                /* pause anything currently playing*/
                music.currentTime = 0;
                /* reset audio scrubber*/
                music = new Audio(audioFiles[activeSong]);
            /* select from the audioFiles array, the song
            that matches its index on the playlist*/
                music.play();
                isPaused = 0;
                /* play that song :) */
            }
        });
    }
}


//----------------------------------
//re-writing the code that will play audio to work for all playlist items

function playAudio() {
    getIndex;

    //link the clicked div index to the song matching its index here
}