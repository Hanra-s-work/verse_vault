// The functions in charge of managing the changing of fonts, the displaying and gathering

const available_fonts_key = "available_fonts";
const fonts_api_available_key = "font_api_available";
const fonts_api_available_true = "true";
const fonts_api_available_false = "false";

function gather_fonts() {
    if (!document.fonts) {
        console.error('The Font Loading API is not supported by this browser.');
        const err_message = JSON.stringify(["Feature unavailable"]);
        localStorage.setItem(available_fonts_key, err_message);
        localStorage.setItem(fonts_api_available_key, fonts_api_available_false);
        return err_message;
    }
    localStorage.setItem(fonts_api_available_key, fonts_api_available_true);
    while (!document.fonts.ready) { console.log(`(gather_fonts) document.fonts.ready = ${document.fonts.ready}`); };
    let font_faces = new Set();
    document.fonts.forEach(function (font_face) {
        font_faces.add(font_face.family);
    });

    let fonts = Array.from(font_faces);

    fonts.sort();

    console.log(fonts);
    console.log(`(gather_fonts) fonts = ${JSON.stringify(fonts)}`);
    localStorage.setItem(available_fonts_key, JSON.stringify(fonts));
    return fonts;
}

function get_fonts_if_not_fetched() {
    if (localStorage.getItem(available_fonts_key) === null) {
        return gather_fonts();
    }
    return JSON.parse(localStorage.getItem(available_fonts_key));
}

function change_font(font_name) {
    document.body.style.fontFamily = font_name;
}

function inject_fonts_header_block(theme) {
    var content = "";
    const fonts = get_fonts_if_not_fetched(),
        css_theme = get_correct_prefix("");//theme
    if (localStorage.getItem(fonts_api_available_key) === fonts_api_available_false) {
        console.error("(inject_fonts_header_block) document.fonts not available");
        return content;
    }
    content += `    <section id="font" class="${css_theme}header_settings_font_section">\n`;
    content += `        <p>Font:</p>\n`;
    content += `        <select id="font_options" class="${css_theme}header_settings_font_select">\n`;
    for (var i in fonts) {
        content += `            <option value="${fonts[i]}">${fonts[i]}</option>\n`;
    }
    content += `        </select>\n`;
    content += `    </section>\n`;
    return content;
}
