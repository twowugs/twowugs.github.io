var keyC = new Audio();
var keyD = new Audio();
var keyE = new Audio();
var keyF = new Audio();
var keyG = new Audio();
var keyA = new Audio();
var keyB = new Audio();
var keyC2 = new Audio();
var keyCsharp = new Audio();
var keyDsharp = new Audio();
var keyFsharp = new Audio();
var keyGsharp = new Audio();
var keyAsharp = new Audio();

// S O U N D P A D    N O I S E S //
function colorPad01() {
  var element = document.getElementById("pad01");
  //element.classList.toggle("padClicked");
  var ateOhAte = new Audio();
  ateOhAte.pause();
  ateOhAte = new Audio("808.wav");
  ateOhAte.play();
} 

function colorPad02() { 
  var element = document.getElementById("pad02");
  //element.classList.toggle("padClicked");
  var Bass01 = new Audio();
  Bass01.pause();
  Bass01 = new Audio("Bass01.wav");
  Bass01.play();
} 

function colorPad03() {
  var element = document.getElementById("pad03");
  //element.classList.toggle("padClicked");
  var Bass02 = new Audio();
  Bass02.pause();
  Bass02 = new Audio("Bass02.wav");
  Bass02.play();
} 

function colorPad04() {
  var element = document.getElementById("pad04");
  //element.classList.toggle("padClicked");
  var Clap01 = new Audio();
  Clap01.pause();
  Clap01 = new Audio("Clap01.wav");
  Clap01.play();
} 

function colorPad05() {
  var element = document.getElementById("pad05");
  //element.classList.toggle("padClicked");
  var Crash01 = new Audio();
  Crash01.pause();
  Crash01 = new Audio("Crash01.wav");
  Crash01.play();
} 

function colorPad06() {
  var element = document.getElementById("pad06");
  //element.classList.toggle("padClicked");
  var Hat01 = new Audio();
  Hat01.pause();
  Hat01 = new Audio("Hat01.wav");
  Hat01.play();
}

function colorPad07() {
  var element = document.getElementById("pad07");
  //element.classList.toggle("padClicked");
  var Kick01 = new Audio();
  Kick01.pause();
  Kick01 = new Audio("Kick01.wav");
  Kick01.play();
}  

function colorPad08() {
  var element = document.getElementById("pad08");
  //element.classList.toggle("padClicked");
  var Perc01 = new Audio();
  Perc01.pause();
  Perc01 = new Audio("Perc01.wav");
  Perc01.play();
}  

function colorPad09() {
  var element = document.getElementById("pad09");
  //element.classList.toggle("padClicked");
  var Snare01 = new Audio();
  Snare01.pause();
  Snare01 = new Audio("Snare01.wav");
  Snare01.play();
}  



// O C T A V E   B A R / K E Y B O A R D --------------------------//

// O C T A V E   B A R //
function setOctave01() {
  var element = document.getElementById("fraction01");
  element.classList.toggle("fraction01Clicked");
  var element = document.getElementById("fraction02");
  element.classList.remove("fraction02Clicked");
  var element = document.getElementById("fraction03");
  element.classList.remove("fraction03Clicked");
  keyC = new Audio("808.wav");
  keyD = new Audio();
  keyE = new Audio();
  keyF = new Audio();
  keyG = new Audio();
  keyA = new Audio();
  keyB = new Audio();
  keyC2 = new Audio();
  keyCsharp = new Audio();
  keyDsharp = new Audio();
  keyFsharp = new Audio();
  keyGsharp = new Audio();
  keyAsharp = new Audio();

} 

function setOctave02() {
  var element = document.getElementById("fraction02");
  element.classList.toggle("fraction02Clicked");
  var element = document.getElementById("fraction01");
  element.classList.remove("fraction01Clicked");
  var element = document.getElementById("fraction03");
  element.classList.remove("fraction03Clicked");
  keyC = new Audio("Clap01.wav");
  keyD = new Audio();
  keyE = new Audio();
  keyF = new Audio();
  keyG = new Audio();
  keyA = new Audio();
  keyB = new Audio();
  keyC2 = new Audio();
  keyCsharp = new Audio();
  keyDsharp = new Audio();
  keyFsharp = new Audio();
  keyGsharp = new Audio();
  keyAsharp = new Audio();
}

function setOctave03() {
  var element = document.getElementById("fraction03");
  element.classList.toggle("fraction03Clicked");
  var element = document.getElementById("fraction02");
  element.classList.remove("fraction02Clicked");
  var element = document.getElementById("fraction01");
  element.classList.remove("fraction01Clicked");
  keyC = new Audio("Crash01.wav");
  keyD = new Audio();
  keyE = new Audio();
  keyF = new Audio();
  keyG = new Audio();
  keyA = new Audio();
  keyB = new Audio();
  keyC2 = new Audio();
  keyCsharp = new Audio();
  keyDsharp = new Audio();
  keyFsharp = new Audio();
  keyGsharp = new Audio();
  keyAsharp = new Audio();
}


// K E Y B O A R D //

// W H I T E   K E Y S //
function colorKey01() {
  keyC.play();
} 
function colorKey02() {
  keyD.play();
} 
function colorKey03() {
  keyE.play();
} 
function colorKey04() {
  keyF.play();
} 
function colorKey05() {
  keyG.play();
} 
function colorKey06() {
  keyA.play();
} 
function colorKey07() {
  keyB.play();
} 
function colorKey08() {
  keyC2.play();
} 

// B L A C K    K E Y S //

function colorBlackKey01() {
  keyCsharp.play();
} 
function colorBlackKey02() {
  keyDsharp.play();
} 
function colorBlackKey03() {
  keyFsharp.play();
} 
function colorBlackKey04() {
  keyGsharp.play();
} 
function colorBlackKey05() {
  keyAsharp.play();
} 

//keycode activation idfk how to make this work //

//document.getElementById('page-body').addEventListener('keydown', (event) => {
  //if (event.keycode === 90) keyC.play();
//});



//not sure what this does... might've been for an on-click function i removed
//document.querySelectorAll('.grid-item').forEach(el, index); {
  //  if (index == num - 1) el.classList.add('onstate');
    //else el.classList.remove('onstate');
  //}