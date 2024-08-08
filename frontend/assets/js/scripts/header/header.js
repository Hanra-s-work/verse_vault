// The default header of the pages

function header(ID, theme = "default") {
    console.log("In header function.");
    var content = "";
    const
        home = location.origin,
        settings_id = "header_settings",
        logo = `${home}/icon/temporary_icon.png`,
        item = document.getElementById(ID),
        css_theme = get_correct_prefix(theme),
        toc_id = "table_of_contents_header_id",
        github_button_script = document.createElement('script');

    console.log(`(header) content = '${content}', home = '${home}', logo = '${logo}', item = '${JSON.stringify(item)}'`);
    content += `    <hgroup class="${css_theme}header_left">\n`
    content += `        <a id="header_logo_link" class="${css_theme}a" href="${home}">\n`
    content += `            <img class="${css_theme}header_left_logo" src="${logo}" />\n`
    content += `        </a>\n`
    content += `    </hgroup>\n`
    content += `    <hgroup class="${css_theme}header_center">\n`
    content += `        <h1 style="display:flex;justify-content:center;">VerseVault</h1>\n`
    content += `        <section id="${toc_id}"></section>\n`;
    content += `    </hgroup>\n`
    content += `    <hgroup class="${css_theme}header_right">\n`
    content += `        <div class="${css_theme}header_right_github_buttons">\n`
    content += `            <a class="github-button" href="https://github.com/Hanra-s-work" data-color-scheme="no-preference: light; light: light; dark: dark;" data-show-count="true" aria-label="Follow @Hanra-s-work on GitHub">Follow @Hanra-s-work</a>\n`
    content += `            <a class="github-button" href="https://github.com/Hanra-s-work/verse_vault/subscription" data-icon="octicon-eye" data-show-count="true" aria-label="Watch Hanra-s-work/verse_vault on GitHub">Watch</a>\n`
    content += `            <a class="github-button" href="https://github.com/Hanra-s-work/verse_vault" data-icon="octicon-star" data-show-count="true" aria-label="Star Hanra-s-work/verse_vault on GitHub">Star</a>\n`
    content += `        </div>\n`
    content += `        <aside class="${css_theme}header_right_site_stats">\n`
    content += `            <section>\n`
    content += `                <button type="button">Like</button>\n`
    content += `                <span>0</span>\n`
    content += `            </section>\n`
    content += `            <section>\n`
    content += `                <button type="button">Dislike</button>\n`
    content += `                <span>0</span>\n`
    content += `            </section>\n`
    content += `            <section>\n`
    content += `                <p style="margin-bottom: 0px;">Views: <span>0000001</span></p>\n`
    content += `            </section>\n`
    content += `            <section>\n`
    content += `                <p style="margin-bottom: 0px;">Visitors: <span>0000001</span></p>\n`
    content += `            </section>\n`
    content += `        </aside>\n`
    content += `        <section id="${settings_id}"></section>\n`
    content += `    </hgroup>\n`

    console.log(`(header) content = '${content}', home = '${home}', logo = '${logo}', item = '${JSON.stringify(item)}'`);

    github_button_script.type = 'text/javascript';
    github_button_script.async = true;
    github_button_script.defer = true;
    github_button_script.src = 'https://buttons.github.io/buttons.js';

    item.classList.add(`${css_theme}header`);
    item.innerHTML += content;
    item.appendChild(github_button_script);

    // adding the settings menu
    inject_settings(settings_id, theme);

    // adding the table of contents
    table_of_contents(toc_id, "", theme, true);

    // adding padding to the body
    add_padding("body_main", 8, true);
}
