function toggleDropdownXXX() {
    var a = document.getElementById("menu");
    if (a.style.display === "none") {
      a.style.display = "flex";
      var e = document.getElementById("horizontal-drop-arrow");
      e.style.display = "none";
      var f = document.getElementById("drop-arrow");
      f.style.display = "inline-block";
    } else {
      var e = document.getElementById("horizontal-drop-arrow");
      e.style.display = "inline-block";
      var f = document.getElementById("drop-arrow");
      f.style.display = "none";
      a.style.display = "none";
    }
  } 

function toggleDropdown() {
  var a= document.getElementById ("container03-nav");
  if (a.style.display === "none") {
    a.style.display = "flex";
    var e = document.getElementById("horizontal-drop-arrow");
    e.style.display = "none";
    var f = document.getElementById("drop-arrow");
    f.style.display = "inline-block";
  setTimeout (function() {
    var b= document.getElementById ("container03");
        b.style.display = "flex";
      setTimeout (function() {
        var c= document.getElementById ("container02");
          c.style.display = "flex";
        setTimeout (function() {
          var d= document.getElementById ("container01");
            d.style.display = "grid";   
        },140);
      },140);
  },140);
  } else {
    var d= document.getElementById ("container01");
    d.style.display = "none"
    setTimeout (function() {
      var c= document.getElementById ("container02");
      c.style.display = "none";
      setTimeout (function() {
        var b= document.getElementById ("container03");
        b.style.display = "none";
        setTimeout (function() {
          var a= document.getElementById ("container03-nav");
          a.style.display = "none";
          var e = document.getElementById("horizontal-drop-arrow");
          e.style.display = "inline-block";
          var f = document.getElementById("drop-arrow");
          f.style.display = "none";
        },140);
      },140);
    },140);
  }
}


setTimeout (function() {
          
},50);


