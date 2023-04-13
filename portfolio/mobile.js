
  function toggleNavbar() {
    var x = document.getElementById("mobile-dropdown-content");
    if (x.style.display === "none") {
      x.style.display = "grid";
      var element = document.getElementById("arrow01");
      element.classList.add("visible");
      var element = document.getElementById("arrow02");
      element.classList.add("visible");
      var element = document.getElementById("arrow03");
      element.classList.add("visible");
      var element = document.getElementById("arrow04");
      element.classList.add("visible");
      var element = document.getElementById("arrow05");
      element.classList.add("visible");
    } else {
      x.style.display = "none";
    }
    
  }
  // 
  function toggleLinkDropdown() {
    var a = document.getElementById("aboutLinks-content");
    if (a.style.display === "none") {
      a.style.display = "grid";
      var d = document.getElementById("down-arrow");
      d.style.display = "none";
      var r = document.getElementById("right-arrow");
      r.style.display = "inline-block";
    } else {
      a.style.display = "none";
      var d = document.getElementById("down-arrow");
      d.style.display = "inline-block";
      var r = document.getElementById("right-arrow");
      r.style.display = "none";
    }
  } 