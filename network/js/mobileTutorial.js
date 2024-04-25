
function setHidden() {
    var x = document.getElementById("instructions-textbox");
    x.style.display = "none";
}

function tellMeAboutIt() {
    var x = document.getElementById("instructions-textbox");
    if (x.style.display === "none") {
      x.style.display = "block";
      var element = document.getElementById("instructions-textbox");
      element.classList.add("visible");
    } else {
      x.style.display = "none";
    }
  }