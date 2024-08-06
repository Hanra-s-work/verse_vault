// The javascript script in charge of triggering all the smaller inserts that have common switches.

function injector(ID, theme) {
    cookie_notice(ID, theme);
    add_padding(ID, 20);
    table_path('page_path', location.pathname, theme);
    gather_fonts();
}
