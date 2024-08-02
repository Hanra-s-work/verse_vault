// This is the poems footer, it is the one that is not customised.

function footer_poems(ID) {
    console.log("In footer_poems function.");
    var content = Array(),
        item = document.getElementById(ID);
    
    content.push("<p>Hello world</p>");
    content.push("<p>Data</p>");

    item.classList.add("poems_footer");
    
    for (var i = 0; i < content.length; i++) {
        item.innerHTML += content[i];
    }
}