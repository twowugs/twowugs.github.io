//logging each playlist item
//i want to be able to add any number of audio files
//and still be able to change the album art to indicate play-status

const audioParentDivs = document.querySelectorAll('.audio-option');
const audioFiles = [
    "playlist/Hank-Williams-Ill-never-get-out-of-this-world-alive.mp3", 
    "playlist/Wingnut-Dishwashers-Union-My-Idea-of-Fun.mp3",
    "playlist/Sumer-is-icumen-in.mp3",
    "playlist/50-Cent-In-Da-Club.mp3",
    "playlist/Thirteen.mp3"
];
//const img = document.getElementsByClassName(this);

let currentSongIndex = -1; 
/* -1 to indicate no song is playing*/

/* play song @ index*/
function playSong(index) {
    if (index === currentSongIndex) {
        if (music.paused) {
            music.play();
            console.log('audio playing');
            /* YEAH IDK THIS DOESN'T WORK-- GOD HATES ME*/
            1/* I'M GOING TO SLEEP!!*/
            //img.src = "visuals/audio-play.png";
        } else {
            music.pause();
            console.log('audio paused');
            //img.src = "visuals/audio-pause.png";
        }
    } else {
        currentSongIndex = index;
        music.src = audioFiles[currentSongIndex];
        /* select from the audioFiles array, the song
        that matches its index on the playlist*/
        music.play();
        console.log('active song updated');
    }
}

/* event listener for each playlist item*/
audioParentDivs.forEach((audioParentDiv, index) => {
    audioParentDiv.addEventListener('click', () => {
        playSong(index);
    });
});

// Initialize audio element
const music = new Audio();
music.addEventListener('ended', () => {
});