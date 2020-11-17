function addComment()
{ 
    var inputString = document.getElementById( "inputkomentar" ).value;
    document.getElementById("komentari").innerHTML=inputString;
}
function addComment2()
{ 
    var inputString1 = document.getElementById( "inputkomentar2" ).value;
    document.getElementById("komentari2").innerHTML=inputString1;
}
function addComment3()
{ 
    var inputString1 = document.getElementById( "inputkomentar3" ).value;
    document.getElementById("komentari3").innerHTML=inputString1;
}
function addComment4()
{ 
    var inputString1 = document.getElementById( "inputkomentar4" ).value;
    document.getElementById("komentari4").innerHTML=inputString1;
}
function addComment5()
{ 
    var inputString1 = document.getElementById( "inputkomentar5" ).value;
    document.getElementById("komentari5").innerHTML=inputString1;
}
function addComment6()
{ 
    var inputString1 = document.getElementById( "inputkomentar6" ).value;
    document.getElementById("komentari6").innerHTML=inputString1;
}
function addComment7()
{ 
    var inputString1 = document.getElementById( "inputkomentar7" ).value;
    document.getElementById("komentari7").innerHTML=inputString1;
}
function addComment8()
{ 
    var inputString1 = document.getElementById( "inputkomentar8" ).value;
    document.getElementById("komentari8").innerHTML=inputString1;
}
function addComment9()
{ 
    var inputString1 = document.getElementById( "inputkomentar9" ).value;
    document.getElementById("komentari9").innerHTML=inputString1;
}
function start()
{
   var commentButton = document.getElementById( "comment1" );
   commentButton.addEventListener( "click", addComment, false );
   var commentButton2 = document.getElementById( "comment2" );
   commentButton2.addEventListener( "click", addComment2, false );
   var commentButton3 = document.getElementById( "comment3" );
   commentButton3.addEventListener( "click", addComment3, false );
   var commentButton4 = document.getElementById( "comment4" );
   commentButton4.addEventListener( "click", addComment4, false );
   var commentButton5 = document.getElementById( "comment5" );
   commentButton5.addEventListener( "click", addComment5, false );
   var commentButton6 = document.getElementById( "comment6" );
   commentButton6.addEventListener( "click", addComment6, false );
   var commentButton7 = document.getElementById( "comment7" );
   commentButton7.addEventListener( "click", addComment7, false );
   var commentButton8 = document.getElementById( "comment8" );
   commentButton8.addEventListener( "click", addComment8, false );
   var commentButton9 = document.getElementById( "comment9" );
   commentButton9.addEventListener( "click", addComment9, false );
}

window.addEventListener( "load", start, false );