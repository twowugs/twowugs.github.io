
function setHidden() {
    var y = document.getElementById("instructions-textbox");
    y.style.display = "none";
}

var y = document.getElementById("instructions-textbox");
y.style.display = "none";

function tellMeAboutIt() {
    var y = document.getElementById("instructions-textbox");
    if (y.style.display === "none") {
      y.style.display = "block";
      var element = document.getElementById("instructions-textbox");
      element.classList.add("visible");
    } else {
      y.style.display = "none";
    }
  }