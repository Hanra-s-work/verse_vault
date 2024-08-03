// This is the darling footer, it is the one that is not customised.

function footer_darling(ID) {
    console.log("In footer_darling function.");
    var content = Array(),
        item = document.getElementById(ID);
    
    content.push("<p>Hello world</p>");
    content.push("<p>Data</p>");

    item.classList.add("darling_footer");
    
    for (var i = 0; i < content.length; i++) {
        item.innerHTML += content[i];
    }
}