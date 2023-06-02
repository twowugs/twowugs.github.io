
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
  


//CONFIRMATIONS ------------------------------------------------------

function changePopupC01() {
    var a = document.getElementById("popupText01");
        //ring ring!
      a.style.display = "none";
      var d = document.getElementById("popupSet01");
        //answer || ignore
      d.style.display = "none";
      var b = document.getElementById("popupTextC02");
        //hello?
      b.style.display = "block";
      var c = document.getElementById("popupSetC02");
        //who's this?  || hang up
      c.style.display = "grid";

  } 

  function changePopupC02() {
    var a = document.getElementById("popupTextC03");
        //i had a dream about you last night...
      a.style.display = "block";
      var c = document.getElementById("popupSetC03");
        //who's this?  || hang up
      c.style.display = "grid";
      var b = document.getElementById("popupTextC02");
        //hello?
      b.style.display = "none";
      var d = document.getElementById("popupSetC02");
        //who's this || hang up
      d.style.display = "none";
  } 

  // DENIALS -----------------------------------------------------------

  function changePopupD01X() {
    var a = document.getElementById("popupText01");
        //ring ring!
      a.style.display = "none";
      var d = document.getElementById("popupSet01");
        //answer || ignore
      d.style.display = "none";
      var e = document.getElementById("popupWindow-grid");
      e.style.display = "none";
  } 

    //hang up ----HITTING IGNORE ON FIRST CALL---- (get call back) 
    function changePopupD01() {
        var a = document.getElementById("popupText01");
            //ring ring!
          a.style.display = "none";
          var d = document.getElementById("popupSet01");
            //answer || ignore
          d.style.display = "none";
          var e = document.getElementById("popupWindow-grid");
          e.style.display = "none";
    
          setTimeout (function() {
            var a = document.getElementById("popupText01");
                //ring ring!
            a.style.display = "none";
            var d = document.getElementById("popupSet01");
                //answer || ignore
            d.style.display = "none";
            var e = document.getElementById("popupWindow-grid");
            e.style.display = "none";

            setTimeout (function() {
                var a = document.getElementById("popupText01");
                    //ring ring!
                a.style.display = "block";
                var d = document.getElementById("popupSet01alt");
                    //answer || ignore
                d.style.display = "grid";
                var e = document.getElementById("popupWindow-grid");
                e.style.display = "grid";
        
            },3000);
    
        },3000);
            
          return;
      } 

  //hang up ----HITTING IGNORE AFTER ANSWERING----(get call back)
  function changePopupD02() {
    var a = document.getElementById("popupTextC02");
        //hello?
      a.style.display = "none";
      var b = document.getElementById("popupTextD03");
        //~~~dialtone ~~~
      b.style.display = "block";
      var d = document.getElementById("popupSetC02");
      d.style.display = "none";

    setTimeout(function() {
        var a = document.getElementById("popupTextC02");
            //hello?
          a.style.display = "none";
          var b = document.getElementById("popupTextD03");
            //~~~dialtone ~~~
          b.style.display = "block";
          var d = document.getElementById("popupSetC02");
            //who's this? || hang up
          d.style.display = "none";

        setTimeout (function() {
            var a = document.getElementById("popupText01");
                //ring ring!
            a.style.display = "none";
            var d = document.getElementById("popupSet01");
                //answer || ignore
            d.style.display = "none";
            var d = document.getElementById("popupSetC02");
                //who's this? || hang up
            d.style.display = "none";
            var e = document.getElementById("popupWindow-grid");
            e.style.display = "none";
    
        },3000);

      }, 3000);
        
      return;
  } 

  function changePopupD01b() {
    var a = document.getElementById("popupText01");
        //ring ring!
     a.style.display = "none";
     var d = document.getElementById("popupSet01alt");
        //answer || ignore
     d.style.display = "none";
     var e = document.getElementById("popupWindow-grid");
     e.style.display = "none";
  } 


  function changePopupD02inactive() {
    var a = document.getElementById("popupTextC02");
        //hello?
      a.style.display = "none";
      var b = document.getElementById("popupTextD03");
        //~~~dialtone ~~~
      b.style.display = "block";
      var d = document.getElementById("popupSetC02");
        //who's this? || hang up
      d.style.display = "none";
  } 