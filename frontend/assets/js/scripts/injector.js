// The javascript script in charge of triggering all the smaller inserts that have common switches.

async function injector(ID, theme) {
    const
        correct_theme = get_correct_prefix(theme),
        css_poems = get_correct_prefix("poems"),
        css_quotes = get_correct_prefix("quotes"),
        css_darling = get_correct_prefix("darling"),
        css_default = get_correct_prefix("default");

    await load_constants();
    console.log('loading data');
    if (correct_theme === css_default) {
        header('body_header');
        footer('body_footer');
    } else if (correct_theme === css_darling) {
        header_darling('body_header');
        footer_darling('body_footer');
    } else if (correct_theme === css_poems) {
        header_poems('body_header');
        footer_poems('body_footer');
    } else if (correct_theme === css_quotes) {
        header_quotes('body_header');
        footer_quotes('body_footer');
    } else {
        header('body_header');
        footer('body_footer');
    };
    cookie_notice(ID, theme);
    add_padding(ID, 20);
    table_path('page_path', location.pathname, theme);
    gather_fonts();
}
