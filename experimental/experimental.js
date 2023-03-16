// I DONT KNOW LOOPS //
function colorPad01() {
  var element = document.getElementById("pad01");
  element.classList.toggle("padClicked");
  var ateOhAte = new Audio();
  ateOhAte.pause();
  ateOhAte = new Audio("808.wav");
  ateOhAte.play();
} 

function colorPad02() { 
  var element = document.getElementById("pad02");
  element.classList.toggle("padClicked");
  var Bass01 = new Audio();
  Bass01.pause();
  Bass01 = new Audio("Bass01.wav");
  Bass01.play();
} 

function colorPad03() {
  var element = document.getElementById("pad03");
  element.classList.toggle("padClicked");
  var Bass02 = new Audio();
  Bass02.pause();
  Bass02 = new Audio("Bass02.wav");
  Bass02.play();
} 

function colorPad04() {
  var element = document.getElementById("pad04");
  element.classList.toggle("padClicked");
  var Clap01 = new Audio();
  Clap01.pause();
  Clap01 = new Audio("Clap01.wav");
  Clap01.play();
} 

function colorPad05() {
  var element = document.getElementById("pad05");
  element.classList.toggle("padClicked");
  var Crash01 = new Audio();
  Crash01.pause();
  Crash01 = new Audio("Crash01.wav");
  Crash01.play();
} 

function colorPad06() {
  var element = document.getElementById("pad06");
  element.classList.toggle("padClicked");
  var Hat01 = new Audio();
  Hat01.pause();
  Hat01 = new Audio("Hat01.wav");
  Hat01.play();
}

function colorPad07() {
  var element = document.getElementById("pad07");
  element.classList.toggle("padClicked");
  var Kick01 = new Audio();
  Kick01.pause();
  Kick01 = new Audio("Kick01.wav");
  Kick01.play();
}  

function colorPad08() {
  var element = document.getElementById("pad08");
  element.classList.toggle("padClicked");
  var Perc01 = new Audio();
  Perc01.pause();
  Perc01 = new Audio("Perc01.wav");
  Perc01.play();
}  

function colorPad09() {
  var element = document.getElementById("pad09");
  element.classList.toggle("padClicked");
  var Snare01 = new Audio();
  Snare01.pause();
  Snare01 = new Audio("Snare01.wav");
  Snare01.play();
}  

// M U S I C S //
//var music = new Audio();
//function playSound() {
  //  music.pause();
    //music = new Audio("Coqui.mp3");
    //music.play();
//}



document.querySelectorAll('.grid-item').forEach(el, index); {
    if (index == num - 1) el.classList.add('onstate');
    else el.classList.remove('onstate');
  }

   //function onClick() {
  //classList.add('onClick');
  //}

  //--------------------------------------------------

  // E X P E R I M E N T I N G

//  var colorPads = document.getElementsByClassName('grid-item');
  //var modalPad = document.getElementById("pad01");

  //for (var i = 0; i < colorPads.length; i++) {
    //var col = colorPads[i];
    // and attach our click listener for this image.
    //col.onclick = function(evt) {
      //scroll(0,0);
      //pad.style.background-color = "#bfcde3ca";
      //modalImg.src = this.src;
    //}
  
 // }