// This is the script in charge of inserting the cookie banner for each page.

const
    cookie_banner_cookie = "cookie_banner_read",
    cookie_banner_true = true,
    cookie_banner_false = false;

function get_cookie_banner_satus() {
    const cbc = cookie.read(cookie_banner_cookie);
    if (cbc === '') {
        cookie.create(cookie_banner_cookie, cookie_banner_false, cookie.in30Days())
    }
    if (cbc === 'true' || cbc === true) {
        return true;
    }
    return false;
}

function hide_cookie_banner(ID) {
    var element = document.getElementById(ID);
    element.style.display = "none";
    cookie.remove(cookie_banner_cookie);
    cookie.create(cookie_banner_cookie, cookie_banner_true, cookie.in30Days());
}

function cookie_notice(ID, theme = "default") {
    var html_data = "",
        element = document.getElementById(ID),
        cookie_id = "cookie_banner_id",
        css_theme = get_correct_prefix(theme),
        display = "";
    if (get_cookie_banner_satus()) {
        display = 'style="display:none"'
    }
    html_data += `<section class="${css_theme}cookie_bg" id="${cookie_id}" ${display}>\n`;
    html_data += `<div class="${css_theme}cookie_banner">`;
    html_data += `<p class="${css_theme}cookie_text">This website uses essential cookies. More information at: `;
    html_data += `<a class="${css_theme}cookie_link" href="${location.origin}/about/cookies">about/cookies</a>`;
    html_data += `</p>`;
    html_data += `<button class="btn ${css_theme}cookie_button" type="button" onclick="hide_cookie_banner('${cookie_id}');">OK</button>`;
    html_data += '</div>';
    html_data += '</section>';
    element.innerHTML += html_data;
}
