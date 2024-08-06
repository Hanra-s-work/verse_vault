// This file will insert the sql controll menu for the table

/*
<h2>Control menu:</h2>
    <table class="sql_control_menu">
        <tr>
            <td>
                <label for="sql_show">Show </label>
                <select name="sql_show" id="sql_show">
                    <option value="all">* (all)</option>
                    <option value="dave">Dave</option>
                    <option value="pumpernickel">Pumpernickel</option>
                    <option value="reeses">Reeses</option>
                </select>
                <label for="sql_where">where </label>
                <select name="sql_where" id="sql_where">
                    <option value="all">* (all)</option>
                    <option value="dave">Dave</option>
                    <option value="pumpernickel">Pumpernickel</option>
                    <option value="reeses">Reeses</option>
                </select>
            </td>
            <td>
                <button>Apply</button>
            </td>
            <td>
                <button>Refresh</button>
            </td>
            <td>
                <button>Clear filters</button>
            </td>
        </tr>
    </table>
*/

function sql_menu(ID, show_options = [{ "value": "all", "text": "* (all)" }], where_options = [{ "value": "all", "text": "* (all)" }], apply_cmd = "", refresh_cmd = "", clear_filters_cmd = "", theme = "") {
    var content = "",
        value_key = "value",
        text_key = "text",
        element = document.getElementById(ID),
        css_theme = get_correct_prefix(theme);

    content += '<h2>Control menu:</h2>';
    content += `<table class="${css_theme}sql_control_menu">`;
    content += '<tr><td>';
    content += `<label for="sql_show">Show </label>`;
    content += `<select name="sql_show" id="sql_show">`;
    // content == `<option value="all">* (all)</option>`;
    for (var i = 0; i < show_options.length; i++) {
        content += `<option value="${show_options[i][value_key]}">${show_options[i][text_key]}</option>`;
    }
    content += '</select>';
    content += `<label for="sql_where">where </label>`;
    content += `<select name="sql_where" id="sql_show">`;
    // content == `<option value="all">* (all)</option>`;
    for (var i = 0; i < where_options.length; i++) {
        content += `<option value="${where_options[i][value_key]}">${where_options[i][text_key]}</option>`;
    }
    content += '</select>';
    content += '</td><td>';
    content += `<button class="${css_theme}sql_menu_button" onclick="${apply_cmd}">Apply</button>`;
    content += '</td><td>';
    content += `<button class="${css_theme}sql_menu_button" onclick="${refresh_cmd}">Refresh</button>`;
    content += '</td><td>';
    content += `<button class="${css_theme}sql_menu_button" onclick="${clear_filters_cmd}">Clear filters</button>`;
    content += '</td></tr></table>';
    element.innerHTML += content;
}
