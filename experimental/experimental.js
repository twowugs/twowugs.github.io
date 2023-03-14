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