// This is a javascript function in charge of inserting a table of content into the webpages (as well as showing where we are in the table)

function add_list_current(correct_prefix = "", indentation_factor = 0, item = "Some bullet") {
    return `<li class='${correct_prefix}table_list_current' style='padding-left:${indentation_factor}px'>${item}</li>`;
}

function add_list_non_current(correct_prefix = "", indentation_factor = 0, link = "/", item = "Some bullet") {
    return `<li class='${correct_prefix}table_list' style='padding-left:${indentation_factor}px'><a class='${correct_prefix}a' href='${location.origin}${link}'>${item}</a></li>`;
}

function _table_for_body(pages, css_theme, theme_key, indentation_key, location) {
    const indentation_factor = 10;
    var body = "";
    body += `<p class='${css_theme}table_list_title'>Pages:</p>`;
    body += "<nav><ul>";
    for (var i = 0; i < pages.length; i++) {
        console.log(`(table_of_contents) pages[${JSON.stringify(i)}] = ${JSON.stringify(pages[i])}`);
        for (let item in pages[i]) {
            console.log(`(table_of_contents) item = ${JSON.stringify(item)}`);
            console.log(`(table_of_contents) pages[${i}][theme] = ${pages[i][theme_key]} === ${css_theme} = ${pages[i][theme_key] === css_theme}`);
            if (location === item && pages[i][theme_key] === css_theme) {
                body += add_list_current(css_theme, (pages[i][indentation_key] * indentation_factor), item);
            } else {
                body += add_list_non_current(css_theme, (pages[i][indentation_key] * indentation_factor), pages[i][item], item);
            }
            break;
        }
    }
    body += "</ul></nav>";
    return body;
}

/* 
<nav class="navbar navbar-expand-md bg-body">
    <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navcol-1">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <div class="nav-item dropdown">
                        <a class="dropdown-toggle active" aria-expanded="false" data-bs-toggle="dropdown" href="#">Dropdown </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">First Item</a>
                            <a class="dropdown-item" href="#">Second Item</a>
                            <a class="dropdown-item" href="#">Third Item</a>
                        </div>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Second Item</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
*/

function _add_header_dropdown(pages, css_theme, theme_key, indentation_key, index, item) {
    var body = "",
        indents = index + 1;
    const
        nb_pages = pages.length,
        home = location.origin,
        prev_indentation = pages[index][indentation_key];
    /*
    <div class="dropdown">
  <a href="https://www.google.com"><button class="dropbtn" onclick="location.href='https://www.google.com'">Dropdown</button></a>
  <div class="dropdown-content">
    <a href="https://www.google.com">Link 1</a>
    <a href="https://www.google.com">Link 2</a>
    <a href="https://www.google.com">Link 3</a>
  </div>
</div>
 */
    body += `<div class="nav-item dropdown">\n`;
    body += `<a class="dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown" href="${home}${pages[index][item]}">${item}</a>\n`;
    body += `<div class="dropdown-menu">\n`;
    // body += `<a class="dropdown-item" href="${home}${pages[index][item]}">${item}</a>\n`;
    while (indents < nb_pages && pages[indents][indentation_key] > prev_indentation) {
        for (var node in pages[indents]) {
            if (indents + 1 < nb_pages && pages[indents + 1][indentation_key] > prev_indentation + 1) {
                var resp = _add_header_dropdown(pages, css_theme, theme_key, indentation_key, indents, node);
                indents = resp["i"];
                body += resp["body"];
                break;
            }
            body += `<a class="dropdown-item" href="${home}${pages[indents][node]}">${node}</a>`;
            indents++;
            break;
        }
    }
    body += `</div></div>`;
    return { 'i': indents, 'body': body }
}

function _inject_link_in_hover() {
    document.querySelectorAll('.nav-link.dropdown-toggle').forEach(function (element) {
        element.addEventListener('click', function (event) {
            if (element.getAttribute('href') !== '#') {
                window.location.href = element.getAttribute('href');
            }
        });
    });
}

function _table_for_header(pages, css_theme, theme_key, indentation_key) {
    const
        nb_pages = pages.length,
        home = location.origin;
    var
        i = 0,
        body = "";
    body += "<nav class=\"navbar navbar-expand-md bg-body\" style=\"position:inherit;\">\n";
    body += "<div class=\"container-fluid\">\n";
    body += "<div class=\"collapse navbar-collapse\">";
    body += "<ul class=\"navbar-nav\">\n";
    while (i < nb_pages) {
        console.log(`(table_of_contents) pages[${JSON.stringify(i)}] = ${JSON.stringify(pages[i])}`);
        for (var item in pages[i]) {
            if (pages[i][indentation_key] === 0 && (i + 1 < nb_pages && pages[i + 1][indentation_key] === 0)) {
                body += `<li class="nav-item"><a class="nav-link" href="${home}${pages[i][item]}">${item}</a></li>`;
                i++;
            } else {
                var response = _add_header_dropdown(pages, css_theme, theme_key, indentation_key, i, item);
                i = response["i"];
                body += response["body"];
            }
            break;
        }
    }
    body += "</ul>\n";
    body += "</div>\n";
    body += "</div>\n";
    body += "</nav>\n";
    _inject_link_in_hover();
    return body;
}
function table_of_contents(ID, location = "", theme = "", in_header = true) {
    const
        content = document.getElementById(ID),
        css_theme = get_correct_prefix(theme),
        indentation_key = "indentation",
        theme_key = "theme",
        empty_key = get_correct_prefix(""),
        poems_key = get_correct_prefix("poems"),
        darling_key = get_correct_prefix("darling"),
        default_key = get_correct_prefix("default"),
        quotes_key = get_correct_prefix("quotes"),
        pages = JSON.parse(`[
            { "Home": "/", "${indentation_key}": 0, "${theme_key}": "${default_key}" },
            { "Darling": "/darling", "${indentation_key}": 0, "${theme_key}": "${darling_key}" },
            { "Poems": "/poems", "${indentation_key}": 0, "${theme_key}": "${poems_key}" },
            { "Everyone": "/poems/everyone", "${indentation_key}": 1, "${theme_key}": "${poems_key}" },
            { "Henri Leblanc": "/poems/henri_leblanc", "${indentation_key}": 1, "${theme_key}": "${poems_key}" },
            { "Henry Letellier": "/poems/henry_letellier", "${indentation_key}": 1, "${theme_key}": "${poems_key}" },
            { "Thierry Montreuil": "/poems/thierry_montreuil", "${indentation_key}": 1, "${theme_key}": "${poems_key}" },
            { "Projects": "/projects", "${indentation_key}": 0, "${theme_key}": "${empty_key}" },
            { "Desktop Pets": "/projects/desktop_pets", "${indentation_key}": 1, "${theme_key}": "${empty_key}" },
            { "Planned Characters": "/projects/desktop_pets/planned_characters", "${indentation_key}": 2, "${theme_key}": "${empty_key}" },
            { "Quotes": "/quotes", "${indentation_key}": 0, "${theme_key}": "${quotes_key}" },
            { "Everyone": "/quotes/everyone", "${indentation_key}": 1, "${theme_key}": "${quotes_key}" },
            { "Darling": "/quotes/darling", "${indentation_key}": 1, "${theme_key}": "${quotes_key}" },
            { "About": "/about", "${indentation_key}": 0, "${theme_key}": "${empty_key}" },
            { "Author": "/about/author", "${indentation_key}": 1, "${theme_key}": "${empty_key}" },
            { "Cookies": "/about/cookies", "${indentation_key}": 1, "${theme_key}": "${empty_key}" }
        ]`);
    var body = "";

    if (in_header === true) {
        body = _table_for_header(pages, css_theme, theme_key, indentation_key);
    } else {
        body = _table_for_body(pages, css_theme, theme_key, indentation_key, location);
    }
    content.innerHTML += body;
}
