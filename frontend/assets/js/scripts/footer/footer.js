// This is the default footer, it is the one that is not customised.

function footer(ID) {
    console.log("In footer function.");
    var content = Array(),
        item = document.getElementById(ID);
    
    content.push("<p>Hello world</p>");
    content.push("<p>Data</p>");
    
    item.classList.add("main_footer");
    
    for (var i = 0; i < content.length; i++) {
        item.innerHTML += content[i];
    }
}