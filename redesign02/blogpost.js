function toggleDropdown() {
    var a = document.getElementById("menu");
    if (a.style.display === "none") {
      a.style.display = "flex";
      var b = document.getElementById("horizontal-drop-arrow");
      b.style.display = "none";
      var c = document.getElementById("drop-arrow");
      c.style.display = "inline-block";
    } else {
      var b = document.getElementById("horizontal-drop-arrow");
      b.style.display = "inline-block";
      var c = document.getElementById("drop-arrow");
      c.style.display = "none";
      a.style.display = "none";
    }
  } 