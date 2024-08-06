// This is a set of functions that will be used to manage the sql table section

function sql_bases(ID, show_options = [{ "value": "all", "text": "* (all)" }], where_options = [{ "value": "all", "text": "* (all)" }], apply_cmd = "", refresh_cmd = "", clear_filters_cmd = "", theme = "") {
    var content = "";
    const
        element = document.getElementById(ID),
        css_theme = get_correct_prefix(theme),
        id_menu = `${ID}_menu`,
        id_table = `${ID}_table`;

    console.log("In sql_bases function.");
    content += '<article>';
    content += `<section id="${id_menu}">`;
    content += `</section>`;
    content += `<section id="${id_table}">`;
    content += `</section>`;
    content += '</article>';
    element.innerHTML = content;
    sql_menu(id_menu, show_options, where_options, apply_cmd, refresh_cmd, cmear_filters_cmd, theme);
    return id_table;
}
