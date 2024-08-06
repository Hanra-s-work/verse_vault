// This is the fils that will inject an sql table that is styled for the darling theme/

function darling_apply() {console.log('In darling_apply');}

function darling_refresh() {console.log('In darling_apply');}

function darling_clear_filters() {console.log('In darling_apply');}

function _darling_data(ID, table_data, table_headers) {console.log('In _darling_data');}

function darling_table(ID, table_data = [], table_headers = [], show_options = [{ "value": "all", "text": "* (all)" }], where_options = [{ "value": "all", "text": "* (all)" }], apply_cmd = darling_apply, refresh_cmd = darling_refresh, clear_filters_cmd = darling_clear_filters) {
    console.log('In darling_table');
    const id_table = sql_bases(ID, show_options, where_options, apply_cmd, refresh_cmd, cmear_filters_cmd, theme);
    _darling_data(id_table, table_data, table_headers);
}