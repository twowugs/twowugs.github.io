
//on load


function resetPhone() {
    var a = document.getElementById("popupText01");
    a.style.display = "none";
    
    var d = document.getElementById("popupSet01");
    d.style.display = "none";
    
    var e = document.getElementById("popupWindow-grid");
    e.style.display = "none";
    
    setTimeout(function() {
      var a = document.getElementById("popupText01");
      a.style.display = "block";
      
      var d = document.getElementById("popupSet01");
      d.style.display = "grid";
      
      var e = document.getElementById("popupWindow-grid");
      e.style.display = "grid";
    }, 2100);
    
    return;
  }
  


//confim

function changePopupC01() {
    var a = document.getElementById("popupText01");
      a.style.display = "none";
      var b = document.getElementById("popupTextC02");
      b.style.display = "block";
      var c = document.getElementById("popupSet02");
      c.style.display = "grid";
      var d = document.getElementById("popupSet01");
      d.style.display = "none";
  } 

  //deny

  function changePopupD01() {
    var a = document.getElementById("popupText01");
      a.style.display = "none";
      var d = document.getElementById("popupSet01");
      d.style.display = "none";
      var e = document.getElementById("popupWindow-grid");
      e.style.display = "none";
  } 

  function changePopupD02() {
    var a = document.getElementById("popupTextC02");
      a.style.display = "none";
      var b = document.getElementById("popupTextD03");
      b.style.display = "block";
      var d = document.getElementById("popupSet02");
      d.style.display = "none";
  } 