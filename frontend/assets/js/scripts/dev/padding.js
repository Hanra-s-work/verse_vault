// Function in charge of adding artificial padding to the page

function add_padding(ID, occurences = 20) {
    var elem = document.getElementById(ID),
        e= "<section>";
    for (var i = 0; i < occurences; i++) {
        e += '<br>';
    }
    e+="</section>"
    elem.innerHTML += e;
}