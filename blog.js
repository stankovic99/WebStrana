function start(){
    document.getElementById( "potvrda" ).addEventListener( "click", Pocetok, false );
}

window.addEventListener( "load", start, false);

function Pocetok(){
    var currentNode = document.getElementById( "tuka" );
    var newNode = vnesiBlog();
    currentNode.parentNode.insertBefore( newNode, currentNode );
}

function vnesiBlog(){
    var naslov = document.getElementById( "naslov" ).value;
    var tekst = document.getElementById( "tekst" ).value;
    var ime = document.getElementById( "ime" ).value;
    var celosno = document.createElement( "div" );
    var naslovp = document.createElement( "p" );
    naslovp.setAttribute( "class","blognas" );
    var tekstp = document.createElement( "p" );
    tekstp.setAttribute( "class","blogtekst" );
    var imep = document.createElement( "p" );
    imep.setAttribute( "class","blogime" );
    var datum = document.createElement( "p" );
    datum.setAttribute( "class","blogime" );

    var date = new Date().toLocaleString();
    var textnode = document.createTextNode( date );
    datum.appendChild( textnode );
    naslovp.appendChild( document.createTextNode( naslov ) );
    tekstp.appendChild( document.createTextNode( tekst ) );
    imep.appendChild( document.createTextNode( ime ) );

    celosno.appendChild( naslovp );
    celosno.appendChild( tekstp );
    celosno.appendChild( imep );
    celosno.appendChild( datum );
    return celosno;
}