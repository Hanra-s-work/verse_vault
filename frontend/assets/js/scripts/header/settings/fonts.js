// The functions in charge of managing the changing of fonts, the displaying and gathering

function gather_fonts() {
    let fonts = [];
    for (let font of document.fonts) {
        fonts.push(font);
    }
    console.log(fonts);
}

function inject_fonts(theme) {

}
