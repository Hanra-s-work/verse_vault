// The default header of the pages

function header(ID, theme = "default") {
    console.log("In header function.");
    var content = "";
    const
        home = location.origin,
        settings_id = "header_settings",
        logo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAzFBMVEVHcEz////////+/v77+/vx8fL9/f309fX+/v739/f////09PXOz8/5+vr8/P3////////29vf///////84qlf8wAdGiPX8/PzsUUTqQjQsqFLrSj3S3/w6g/TqPCs0gPQgpUf85+bv9P+63sL62Nb+8ef4ycbw+PJkunkeePP81HXwgGv0jhzc5/3o9efX7N5Fr19Uj/WQy562zPr2trL94KDzoJrzoJv80Gjyl5H94qgyh9v7xzihsSp+wYV1sE5ZtXBmmvUynoWKrvzKDGT6AAAAE3RSTlMAW+TTeBLcHLMt1WsKzfUznkBIxSDAuAAAAUZJREFUKJFtktligkAMRUFZxKVuDMOAggpu1apVu+/t//9TkxBU1PsySQ4hlyGadpTd0fWOrV2R3eqyWhe80j1RpYCc7pmcI2tyaZimQw6bOTMplU9hpKIofJSUmgwtTCYq9EFhqKIJ5lbGdGIRAGhUQLNX6wRLOA2Y8vdpuvfVOJtaOjhdhL56yYrjU8cGFsRSLc4/x+DPfxBiSZN6LMlXUYXzVghBT8/7pPkdxFX28yzEO8HYI8U9dlQudMZx3AeInWWe+SrExxrhCLTre3E+M3P7FXznLn887z53a2PwGbjBLLvUP2jcYUC/FYdOA9d1g22SbN1fbizT9bUxXA+QguB4G2GlfbIFqw1i0GCzKmzDDQ1LZgPQLKHk5rAJpmSj0ykH0jxArW4V79yqF1bMkEckjYvFrTWIy0btApFsx7m68Ff1D4OdMHbngtKsAAAAAElFTkSuQmCC",
        item = document.getElementById(ID),
        css_theme = get_correct_prefix(theme),
        github_button_script = document.createElement('script');

    console.log(`(header) content = '${content}', home = '${home}', logo = '${logo}', item = '${JSON.stringify(item)}'`);
    content += `    <div class="${css_theme}header_left">\n`
    content += `        <a id="header_logo_link" class="${css_theme}a" href="${home}">\n`
    content += `            <img class="${css_theme}header_left_logo" src="${logo}" />\n`
    content += `        </a>\n`
    content += `    </div>\n`
    content += `    <div class="${css_theme}header_center">\n`
    content += `        <h1>VerseVault - ${home}</h1>\n`
    content += `    </div>\n`
    content += `    <div class="${css_theme}header_right">\n`
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
    content += `    </div>\n`
    content += `<script async="" defer="" src=""></script>`

    console.log(`(header) content = '${content}', home = '${home}', logo = '${logo}', item = '${JSON.stringify(item)}'`);

    github_button_script.type = 'text/javascript';
    github_button_script.src = 'https://buttons.github.io/buttons.js';
    github_button_script.async = true;
    github_button_script.defer = true;

    inject_settings(settings_id, theme);

    item.classList.add(`${css_theme}header`);
    item.innerHTML += content;
    item.appendChild(github_button_script);
}
