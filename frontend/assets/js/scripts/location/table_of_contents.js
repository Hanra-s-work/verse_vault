// This is a javascript function in charge of inserting a table of content into the webpages (as well as showing where we are in the table)

function add_list_current(correct_prefix = "", indentation_factor = 0, item = "Some bullet") {
    return `<li class='${correct_prefix}table_list_current' style='padding-left:${indentation_factor}px'>${item}</li>`;
}

function add_list_non_current(correct_prefix = "", indentation_factor = 0, link = "/", item = "Some bullet") {
    return `<li class='${correct_prefix}table_list' style='padding-left:${indentation_factor}px'><a class='${correct_prefix}a' href='${link}'>${item}</a></li>`;
}

function table_of_contents(ID, location = "", theme = "") {
    var indentation = "indentation",
        indentation_factor = 10,
        theme_reference = "theme",
        pages = [
            { "Home": "/", indentation: 0, "theme": get_correct_prefix("default") },
            { "Darling": "/darling", indentation: 0, "theme": get_correct_prefix("darling") },
            { "Poems": "/poems", indentation: 0, "theme": get_correct_prefix("poems") },
            { "Everyone": "/poems/everyone", indentation: 1, "theme": get_correct_prefix("poems") },
            { "Henri Leblanc": "/poems/henri_leblanc", indentation: 1, "theme": get_correct_prefix("poems") },
            { "Henry Letellier": "/poems/henry_letellier", indentation: 1, "theme": get_correct_prefix("poems") },
            { "Thierry Montreuil": "/poems/thierry_montreuil", indentation: 1, "theme": get_correct_prefix("poems") },
            { "Projects": "/projects", indentation: 0, "theme": get_correct_prefix("") },
            { "Desktop Pets": "/projects/desktop_pets", indentation: 1, "theme": get_correct_prefix("") },
            { "Planned Characters": "/projects/desktop_pets/planned_characters", indentation: 2, "theme": get_correct_prefix("") },
            { "Quotes": "/quotes", indentation: 0, "theme": get_correct_prefix("quotes") },
            { "Everyone": "/quotes/everyone", indentation: 1, "theme": get_correct_prefix("quotes") },
            { "Darling": "/quotes/darling", indentation: 1, "theme": get_correct_prefix("quotes") },
            { "About": "/about", indentation: 0, "theme": get_correct_prefix("") },
            { "Author": "/about/author", indentation: 1, "theme": get_correct_prefix("") },
            { "Cookies": "/about/cookies", indentation: 1, "theme": get_correct_prefix("") },
        ],
        correct_prefix = get_correct_prefix(theme),
        content = document.getElementById(ID),
        body = "";

    body += `<p class='${correct_prefix}table_list_title'>Pages:</p>`;
    body += "<nav>";
    body += "<ul>";
    for (var i = 0; i < pages.length; i++) {
        console.log(`(table_of_contents) pages[${JSON.stringify(i)}] = ${JSON.stringify(pages[i])}`);
        for (let item in pages[i]) {
            console.log(`(table_of_contents) item = ${JSON.stringify(item)}`);
            console.log(`(table_of_contents) pages[${i}][theme] = ${pages[i][theme_reference]} === ${correct_prefix} = ${pages[i][theme_reference] === correct_prefix}`);
            if (location === item && pages[i][theme_reference] === correct_prefix) {
                body += add_list_current(correct_prefix, (pages[i][indentation] * indentation_factor), item);
            } else {
                body += add_list_non_current(correct_prefix, (pages[i][indentation] * indentation_factor), pages[i][item], item);
            }
            break;
        }
    }
    body += "</ul>";
    body += "</nav>";
    content.innerHTML += body;
}
