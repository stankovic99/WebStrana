var tekst;
var currentNode;
var name;
var newNode;
var vtor;
var prv;
var replay;
var kopce;
var i=0;

function start()
{
   name=prompt("Enter your name and surname!")
   document.getElementById( "comment1" ).addEventListener( "click", insert1, false );
   document.getElementById( "comment2" ).addEventListener( "click", insert2, false );
   document.getElementById( "comment3" ).addEventListener( "click", insert3, false );
   document.getElementById( "comment4" ).addEventListener( "click", insert4, false );
   document.getElementById( "comment5" ).addEventListener( "click", insert5, false );
   document.getElementById( "comment6" ).addEventListener( "click", insert6, false );
}

window.addEventListener( "load", start, false );

function insert1()
{
   currentNode = document.getElementById( "paragraf1" );
   var newNode = createNewNode(document.getElementById( "inputkomentar1" ).value );
   currentNode.parentNode.insertBefore( newNode, currentNode );
   document.getElementById( "replaybutton"+i ).addEventListener( "click", vnesi, false);
}
function insert2()
{
   currentNode = document.getElementById( "paragraf2" );
   var newNode = createNewNode(document.getElementById( "inputkomentar2" ).value );
   currentNode.parentNode.insertBefore( newNode, currentNode );
   document.getElementById( "replaybutton"+i ).addEventListener( "click", vnesi, false);
}
function insert3()
{
   currentNode = document.getElementById( "paragraf3" );
   var newNode = createNewNode(document.getElementById( "inputkomentar3" ).value );
   currentNode.parentNode.insertBefore( newNode, currentNode );
   document.getElementById( "replaybutton"+i ).addEventListener( "click", vnesi, false);
}
function insert4()
{
   currentNode = document.getElementById( "paragraf4" );
   var newNode = createNewNode(document.getElementById( "inputkomentar4" ).value );
   currentNode.parentNode.insertBefore( newNode, currentNode );
   document.getElementById( "replaybutton"+i ).addEventListener( "click", vnesi, false);
}
function insert5()
{
   currentNode = document.getElementById( "paragraf5" );
   var newNode = createNewNode(document.getElementById( "inputkomentar5" ).value );
   currentNode.parentNode.insertBefore( newNode, currentNode );
   document.getElementById( "replaybutton"+i ).addEventListener( "click", vnesi, false);
}
function insert6()
{
   currentNode = document.getElementById( "paragraf6" );
   var newNode = createNewNode(document.getElementById( "inputkomentar6" ).value );
   currentNode.parentNode.insertBefore( newNode, currentNode );
   document.getElementById( "replaybutton"+i ).addEventListener( "click", vnesi, false);
}

function createNewNode( text )
{
   newNode = document.createElement( "div" );
   
   ++i;
   prv = document.createElement( "p" );
   tekst=name+": "+text;
   prv.appendChild( document.createTextNode( tekst ) );
   prv.setAttribute( "class", "galery6" );

   vtor = document.createElement( "p" );
   var date = new Date().toLocaleString();
   var textnode = document.createTextNode( date );
   vtor.setAttribute( "id","datum"+i );
   vtor.setAttribute( "class", "galery5" );
   vtor.appendChild( textnode );

   replay = document.createElement( "input" );
   replay.setAttribute( "id", "replayinput"+i );
   replay.setAttribute( "placeholder", "Replay.." );
   replay.setAttribute( "type","text" );
   replay.setAttribute( "style","width:85%" );

   kopce = document.createElement( "input" );
   kopce.setAttribute( "id", "replaybutton"+i );
   kopce.setAttribute( "type", "button" );
   kopce.setAttribute( "value","Replay" );
   kopce.setAttribute( "class", "galery7" );

   newNode.setAttribute( "class", "galery4" );
   newNode.appendChild( prv );
   newNode.appendChild( vtor );
   newNode.appendChild( replay );
   newNode.appendChild( kopce );
   return newNode;
}

function vnesi(){
   var x = document.createElement( "div" );
   x.setAttribute( "class", "galery10" );
   var x1 = document.createElement( "p" );
   x1.setAttribute( "class", "galery8" );
   var t = document.getElementById( "replayinput"+i ).value;
   var x2 = document.createElement( "p" );
   x2.setAttribute( "class", "galery9" );
   var pom = name+": "+t;

   var date = new Date().toLocaleString();
   var textnode = document.createTextNode( date );

   x1.appendChild( document.createTextNode( pom ) );
   x2.appendChild( textnode );
   x.appendChild( x1 );
   x.appendChild( x2 );
   vtor.appendChild( x );
   return newNode;
}