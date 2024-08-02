// Add the path for the access of the table

function add_table_link(url = "", name = "", css_theme = "") {
    return `<a href="${url}" class="${css_theme}table_path_link">${name}</a>`;
}
function table_path(ID, path = location.pathname, theme = "") {
    var content = document.getElementById(ID),
        body = "",
        buffer = "",
        home = location.origin,
        split_path = path.split("/"),
        css_theme = get_correct_prefix(theme);

    if (split_path.length == 2 && split_path[0] === '' && split_path[1] == '') {
        split_path = [home]
    } else {
        if (split_path[0] === '') {
            split_path.shift();
        }
        split_path.unshift(home);
    }
    console.log(`(table_path) split_path = ${split_path}`);
    console.log(`(table_path) css_theme = ${css_theme}`);
    body += `<aside class="${css_theme}table_path_section">`;
    body += `<p class="${css_theme}table_path_title">Quick access:</p>`;
    for (var i = 0; i < split_path.length; i++) {
        buffer += `${split_path[i]}/`;
        console.log(`(table_path) i = ${i}, split_path[${i}] = '${split_path[i]}', buffer = '${buffer}'`);
        if (i === 0) {
            body += add_table_link(home, location.host, css_theme);
        } else {
            body += add_table_link(buffer, split_path[i], css_theme);
        }
        if (i < split_path.length - 1) {
            body += `<p class="${css_theme}table_path_seperator">&gt;</p>`;
        }
    }
    body += "</aside>";
    content.innerHTML = body;
}
