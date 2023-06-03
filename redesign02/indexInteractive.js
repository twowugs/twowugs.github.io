
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
      var d = document.getElementById("popupSet01alt");
        //answer || ignore
      d.style.display = "none";
      var b = document.getElementById("popupTextC02");
        //hello?
      b.style.display = "block";
      var c = document.getElementById("popupSetC02");
        //who's this?  || hang up
      c.style.display = "grid";

  } 

  function changePopupC01b() {
    var a = document.getElementById("popupTextC02");
        //hello?
     a.style.display = "block";
     var c = document.getElementById("popupText01");
        //hello?
     c.style.display = "none";
     var b = document.getElementById("popupSet01alt");
        //answer || ignore
     b.style.display = "none";
     var d = document.getElementById("popupSetC02alt");
        //who's this? || null
     d.style.display = "grid";
     var e = document.getElementById("popupWindow-grid");
     e.style.display = "grid";
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
      var e = document.getElementById("popupSetC02alt");
        //who's this? || null
     e.style.display = "none";
  } 

  function changePopupC03() {
    var a = document.getElementById("popupTextC04");
        //we were by the water...
      a.style.display = "block";
      var c = document.getElementById("popupSetC04");
        // . . . || null
    c.style.display = "grid";
      var b = document.getElementById("popupTextC03");
        //i had a dream about you last night...
      b.style.display = "none";
      var c = document.getElementById("popupSetC03");
        // . . . || null
      c.style.display = "none";
  } 

  function changePopupC04() {
      var b = document.getElementById("popupTextC05");
        //the whole world was glowing
      b.style.display = "block";
      var c = document.getElementById("popupSetC05");
        // . . . || null
      c.style.display = "grid";
      var a = document.getElementById("popupTextC04");
        //we were by the water...
      a.style.display = "none";
      var c = document.getElementById("popupSetC04");
        // . . . || null
      c.style.display = "none";
  } 

  function changePopupC05() {
    setTimeout (function() {
        var i = document.getElementById("popupTextC07");
        //you were glowing, too
        i.style.display = "block";
        var k = document.getElementById("popupSetC06");
        // . . . || null
        k.style.display = "none";
        var d = document.getElementById("popupSetC07");
        // . . . || null
        d.style.display = "grid";
    },500);
    var a = document.getElementById("popupTextC06");
      //and you...
    a.style.display = "block";
    var c = document.getElementById("popupSetC06");
      // . . . || null
    c.style.display = "grid";
    var b = document.getElementById("popupTextC05");
      //the whole world was glowing
    b.style.display = "none";
    var d = document.getElementById("popupSetC05");
      // . . . || null
    d.style.display = "none";
} 

function changePopupC06() {
    var b = document.getElementById("popupTextC08");
      //you're beautiful, you know...
    b.style.display = "block";
    var c = document.getElementById("popupSetC08");
      // . . . || null
    c.style.display = "grid";
    var a = document.getElementById("popupTextC06");
      //and you...
    a.style.display = "none";
    var a = document.getElementById("popupTextC07");
      //you were glowing, too.
    a.style.display = "none";
    var c = document.getElementById("popupSetC07");
      // . . . || null
    c.style.display = "none";
}

function changePopupC07() {
    var a = document.getElementById("popupTextC09");
      // silence...
    a.style.display = "block";
    var c = document.getElementById("popupSetC09");
      // . . . || null
    c.style.display = "grid";
    var b = document.getElementById("popupTextC08");
      //you're beautiful, you know...
    b.style.display = "none";
    var c = document.getElementById("popupSetC08");
      // . . . || null
    c.style.display = "none";

}

function changePopupC08() {

    var b = document.getElementById("popupTextC10");
      //anyways...
    b.style.display = "block";
    var c = document.getElementById("popupSetC10");
      // . . . || null
    c.style.display = "grid";
    var a = document.getElementById("popupTextC09");
      // silence...
    a.style.display = "none";
    var c = document.getElementById("popupSetC09");
      // . . . || null
    c.style.display = "none";

}

function changePopupC09() {

    var a = document.getElementById("popupTextC11");
      //you dont need to reply...
    a.style.display = "block";
    var c = document.getElementById("popupSetC11");
      // . . . || null
    c.style.display = "grid";
    var b = document.getElementById("popupTextC10");
      //anyways...
    b.style.display = "none";
    var c = document.getElementById("popupSetC10");
      // . . . || null
    c.style.display = "none";

}

function changePopupC09() {
    setTimeout (function() {
        var i = document.getElementById("popupTextC12");
        //i know you're listening
        i.style.display = "block";
        var k = document.getElementById("popupSetC11");
        // . . . || null
        k.style.display = "none";
        var d = document.getElementById("popupSetC12");
        // . . . || null
        d.style.display = "grid";
    },500);
    var a = document.getElementById("popupTextC11");
      //you dont need to reply...
    a.style.display = "block";
    var c = document.getElementById("popupSetC11");
      // . . . || null
    c.style.display = "grid";
    var b = document.getElementById("popupTextC10");
      //anyways...
    b.style.display = "none";
    var d = document.getElementById("popupSetC10");
      // . . . || null
    d.style.display = "none";
}

function changePopupC10() {

    var a = document.getElementById("popupTextC11");
      //you dont need to reply...
    a.style.display = "none";
    var a = document.getElementById("popupTextC12");
      //i know you're listening
    a.style.display = "none";
    var c = document.getElementById("popupSetC11");
      // . . . || null
    c.style.display = "none";
    var b = document.getElementById("popupTextC13");
      //just calling to say i love you
    b.style.display = "block";
    var c = document.getElementById("popupSetC12");
      // . . . || null
    c.style.display = "none";
    var c = document.getElementById("popupSetC13");
      // . . . || null
    c.style.display = "grid";

}

function changePopupC11() {

    setTimeout (function() {
        var a = document.getElementById("popupTextD03");
          //holds dialtone display 3s
          //~~~dialtone ~~~
        a.style.display = "block";
        var b = document.getElementById("popupTextC14");
          //so much...
        b.style.display = "none";
        var d = document.getElementById("popupSetC14");
          // . . . || null
        d.style.display = "none";

        setTimeout (function() {
            var a = document.getElementById("popupTextD03");
              //holds dialtone display 3s
              //~~~dialtone ~~~
            a.style.display = "none";
            var e = document.getElementById("popupWindow-grid");
            e.style.display = "none";
    
        },3000);

    },3000);

    var a = document.getElementById("popupTextC13");
      //just calling to say i love you
    a.style.display = "none";
    var c = document.getElementById("popupSetC13");
      // . . . || null
    c.style.display = "none";
    var b = document.getElementById("popupTextC14");
      //so much...
    b.style.display = "block";
    var d = document.getElementById("popupSetC14");
      // . . . || null
    d.style.display = "grid";

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
        //displays dialtone
        //~~~dialtone ~~~
      b.style.display = "block";
      var d = document.getElementById("popupSetC02");
      d.style.display = "none";

    setTimeout(function() {
        var a = document.getElementById("popupTextC02");
            //hello?
          a.style.display = "none";
          var b = document.getElementById("popupTextD03");
            //holds dialtone display 3s
            //~~~dialtone ~~~
          b.style.display = "block";
          var d = document.getElementById("popupSetC02");
            //who's this? || hang up
          d.style.display = "none";

        setTimeout (function() {
            //closes chat window
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

            setTimeout (function() {
                var a = document.getElementById("popupText01");
                    //ring ring!
                a.style.display = "block";
                var d = document.getElementById("popupSet01alt");
                    //answer || ignore
                d.style.display = "grid";
                var d = document.getElementById("popupSetC02");
                    //who's this? || hang up
                d.style.display = "none";
                var b = document.getElementById("popupTextD03");
                //~~~dialtone ~~~
              b.style.display = "none";
                var e = document.getElementById("popupWindow-grid");
                e.style.display = "grid";
        
            },3000);
    
        },4000);

      }, 2000);
        
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