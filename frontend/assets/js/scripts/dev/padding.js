// Function in charge of adding artificial padding to the page

function add_padding(ID, occurences = 20, before = false) {
    var elem = document.getElementById(ID),
        e= "<section>";
    for (var i = 0; i < occurences; i++) {
        e += '<br>';
    }
    e+="</section>"
    if (before === true) {
        var data = elem.innerHTML;
        elem.innerHTML = e + data;
    } else {
        elem.innerHTML += e;
    }
}