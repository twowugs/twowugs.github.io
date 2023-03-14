// I DONT KNOW LOOPS //
function colorPad01() {
  var element = document.getElementById("pad01");
  element.classList.toggle("padClicked");
} 

function colorPad02() {
  var element = document.getElementById("pad02");
  element.classList.toggle("padClicked");
} 

function colorPad03() {
  var element = document.getElementById("pad03");
  element.classList.toggle("padClicked");
} 

function colorPad04() {
  var element = document.getElementById("pad04");
  element.classList.toggle("padClicked");
} 

function colorPad05() {
  var element = document.getElementById("pad05");
  element.classList.toggle("padClicked");
} 

function colorPad06() {
  var element = document.getElementById("pad06");
  element.classList.toggle("padClicked");
}

function colorPad07() {
  var element = document.getElementById("pad07");
  element.classList.toggle("padClicked");
}  

function colorPad08() {
  var element = document.getElementById("pad08");
  element.classList.toggle("padClicked");
}  

function colorPad09() {
  var element = document.getElementById("pad09");
  element.classList.toggle("padClicked");
}  

// M U S I C S //
var music = new Audio();
function playSound() {
    music.pause();
    music = new Audio("Coqui.mp3");
    music.play();
}



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