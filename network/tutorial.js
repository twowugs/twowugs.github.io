
function setHidden() {
    var x = document.getElementById("example-qr");
    x.style.display = "none";
}

function revealCode() {
    var x = document.getElementById("example-qr");
    if (x.style.display === "none") {
      x.style.display = "block";
      var element = document.getElementById("example-qr");
      element.classList.add("visible");
    } else {
      x.style.display = "none";
    }
    
  }